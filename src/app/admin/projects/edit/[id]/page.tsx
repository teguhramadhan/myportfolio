"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string;
  link: string;
  category: string;
}

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setProject({
          ...data,
          tech: Array.isArray(data.tech) ? data.tech.join(", ") : data.tech,
        });
      }
    };

    fetchProject();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    setIsSubmitting(true);

    const { error } = await supabase
      .from("projects")
      .update({
        title: project.title,
        desc: project.desc,
        tech: project.tech.split(",").map((t) => t.trim()),
        link: project.link,
        category: project.category,
      })
      .eq("id", id);

    setIsSubmitting(false);
    if (!error) router.push("/admin/projects");
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Edit Project</h1>
      <form onSubmit={handleUpdate} className="space-y-4 max-w-2xl mx-auto">
        <input
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          className="w-full bg-zinc-800 px-4 py-2 rounded"
        />
        <textarea
          value={project.desc}
          onChange={(e) => setProject({ ...project, desc: e.target.value })}
          className="w-full bg-zinc-800 px-4 py-2 rounded"
        />
        <input
          value={project.tech}
          onChange={(e) => setProject({ ...project, tech: e.target.value })}
          className="w-full bg-zinc-800 px-4 py-2 rounded"
        />
        <input
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
          className="w-full bg-zinc-800 px-4 py-2 rounded"
        />
        <select
          value={project.category}
          onChange={(e) => setProject({ ...project, category: e.target.value })}
          className="w-full bg-zinc-800 px-4 py-2 rounded"
        >
          <option>UI/UX Design</option>
          <option>Graphic Design</option>
          <option>3D Design</option>
          <option>Coding</option>
        </select>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary py-2 rounded"
        >
          {isSubmitting ? "Menyimpan..." : "Update Project"}
        </button>
      </form>
    </div>
  );
}
