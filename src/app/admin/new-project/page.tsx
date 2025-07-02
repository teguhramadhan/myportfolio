"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { FaLongArrowAltLeft, FaChevronDown } from "react-icons/fa";

export default function NewProjectPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("UI/UX Design");
  const [techStack, setTechStack] = useState("");
  const [link, setLink] = useState("");
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCoding = category === "Coding";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Anda harus login terlebih dahulu");
      setIsSubmitting(false);
      return;
    }

    const image_urls: string[] = [];

    if (imageFiles && imageFiles.length > 0) {
      for (let i = 0; i < imageFiles.length; i++) {
        const imageFile = imageFiles[i];
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `private/${Date.now()}_${i}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(fileName, imageFile);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          alert("Gagal mengupload gambar: " + uploadError.message);
          setIsSubmitting(false);
          return;
        }

        const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project-images/${fileName}`;
        image_urls.push(publicUrl);
      }
    }

    const payload = {
      title,
      description,
      category,
      tech_stack: techStack,
      link: isCoding ? link : "",
      image_url: isCoding ? image_urls[0] || "" : JSON.stringify(image_urls),
    };

    const { data, error } = await supabase
      .from("projects")
      .insert([payload])
      .select();

    if (error || !data) {
      alert("Gagal menyimpan project: " + error?.message);
      setIsSubmitting(false);
      return;
    }

    const insertedId = data[0]?.id;

    if (!isCoding && insertedId) {
      const generatedLink = `${process.env.NEXT_PUBLIC_APP_URL}/project/${insertedId}`;
      const { error: updateError } = await supabase
        .from("projects")
        .update({ link: generatedLink })
        .eq("id", insertedId);

      if (updateError) {
        console.error("Update link error:", updateError);
      }
    }

    alert("Project berhasil ditambahkan!");
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-2xl mx-auto mb-6">
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="text-md text-slate-400 hover:text-primary transition flex items-center gap-2 group"
        >
          <FaLongArrowAltLeft className="text-base group-hover:-translate-x-1.5 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-lg font-bold uppercase">Back to Dashboard</span>
        </button>
      </div>

      <div className="bg-zinc-900 p-10 w-full max-w-2xl mx-auto rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Tambah Project Baru</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul Project"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 bg-zinc-800 rounded text-white focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Deskripsi Project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 bg-zinc-800 rounded text-white h-32 resize-none focus:ring-2 focus:ring-primary"
          />

          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none px-4 py-2 bg-zinc-800 rounded text-white focus:ring-2 focus:ring-primary pr-10"
            >
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="3D Design">3D Design</option>
              <option value="Coding">Coding</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FaChevronDown className="text-slate-400 text-sm" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Tools / Tech Stack (pisahkan dengan koma)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="w-full px-4 py-2 bg-zinc-800 rounded text-white focus:ring-2 focus:ring-primary"
          />

          {isCoding && (
            <input
              type="url"
              placeholder="Link project (Opsional)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 rounded text-white focus:ring-2 focus:ring-primary"
            />
          )}

          <input
            type="file"
            accept="image/*"
            multiple={!isCoding}
            onChange={(e) => setImageFiles(e.target.files)}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80"
          />

          <div className="text-sm text-slate-500 space-y-1">
            {isCoding ? (
              <>
                <p>
                  Hanya perlu <strong>1 gambar</strong>.
                </p>
                <p>
                  Rekomendasi ukuran thumbnail: <strong>160×106 px</strong>
                </p>
              </>
            ) : (
              <>
                <p>
                  Bisa upload <strong>lebih dari satu gambar</strong>.
                </p>
                <p>
                  Rekomendasi ukuran thumbnail: <strong>160×106 px</strong>
                </p>
              </>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary py-2 rounded text-white font-semibold hover:bg-primary/80 transition"
          >
            {isSubmitting ? "Menyimpan..." : "Simpan Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
