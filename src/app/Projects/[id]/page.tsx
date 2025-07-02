import { supabaseServer } from "@/app/lib/supabaseServer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Footer from "@/app/Components/Footer";
import SocialBar from "@/app/Components/SocialBar";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech_stack: string[] | string;
  link?: string;
  image_url?: string;
}

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const supabase = supabaseServer();
  const { data } = await supabase.from("projects").select("id");

  return (data ?? []).map((item) => ({
    id: String(item.id),
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  // Await the params Promise
  const { id } = await params;

  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !data) return notFound();

  const project: Project = data;

  let images: string[] = [];

  try {
    const parsed = JSON.parse(project.image_url || "");
    images = Array.isArray(parsed) ? parsed : [project.image_url || ""];
  } catch {
    if (project.image_url) images = [project.image_url];
  }

  const techs =
    typeof project.tech_stack === "string"
      ? project.tech_stack.split(",")
      : project.tech_stack;

  return (
    <section className="min-h-screen py-16 bg-black text-white">
      <div className="max-w-full px-6 md:px-12 lg:px-24 mx-auto">
        {/* Breadcrumb & Keterangan */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Tombol Back */}
          <div className="md:w-1/4">
            <Link
              href="/Projects/all"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition group"
            >
              <FaLongArrowAltLeft className="text-base group-hover:-translate-x-1.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold uppercase">
                Back to Projects
              </span>
            </Link>
          </div>

          {/* Judul & Deskripsi */}
          <div className="md:w-2/4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-primary mb-4 uppercase">
              {project.title}
            </h1>
            <p className="text-slate-300 text-sm text-center leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="md:w-1/4">
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {techs.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Gambar */}
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-24">
        {images.length > 1 && (
          <div className="flex flex-col mb-8">
            {images.slice(1).map((src, idx) => (
              <div key={idx} className="w-full rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={`Project Image ${idx + 2}`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <SocialBar />
      <Footer />
    </section>
  );
}
