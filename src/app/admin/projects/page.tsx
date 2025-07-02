"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  link: string;
  category: string;
  created_at: string;
}

export default function ProjectListPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (data && !error) {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Daftar Project</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-zinc-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-sm text-slate-400 mb-2">{project.category}</p>
            <div className="flex gap-3">
              <Link
                href={`/admin/projects/edit/${project.id}`}
                className="text-blue-400 hover:underline"
              >
                Edit
              </Link>
              <Link
                href={`/admin/projects/delete/${project.id}`}
                className="text-red-500 hover:underline"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
