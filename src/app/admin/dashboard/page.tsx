"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FuzzyText from "@/blocks/TextAnimations/FuzzyText/FuzzyText";
import Image from "next/image";

// ----------------------
// Helper function!
function getFirstImageUrl(
  image_url: string | string[] | undefined
): string | null {
  if (!image_url) return null;

  if (Array.isArray(image_url)) {
    return image_url[0];
  }

  if (typeof image_url === "string" && image_url.trim().startsWith("[")) {
    try {
      const parsed = JSON.parse(image_url);
      if (Array.isArray(parsed)) return parsed[0];
    } catch {
      return null;
    }
  }

  return image_url;
}
// ----------------------

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech_stack: string[] | string;
  link?: string;
  image_url?: string | string[];
}

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isForbidden, setIsForbidden] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleNewProject = () => {
    router.push("/admin/new-project");
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    } else {
      alert("Gagal logout: " + error.message);
    }
  };

  useEffect(() => {
    const checkSessionAndFetchProjects = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        setIsForbidden(true);
      } else {
        setUserEmail(data.session.user.email ?? null);

        const { data: projectData, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: false });

        if (!error && projectData) {
          setProjects(projectData as Project[]);
        }
      }

      setIsLoading(false);
    };

    checkSessionAndFetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-slate-400 text-sm">Checking authentication...</p>
      </div>
    );
  }

  if (isForbidden) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
        <FuzzyText baseIntensity={0.2}>403</FuzzyText>
        <h1 className="text-2xl mt-6 mb-6">Error Forbidden!</h1>
        <p className="text-xl text-orange-50 mb-6">
          You are not authorized to access this page.{" "}
          <span className="font-bold text-primary">Please login first.</span>
        </p>
        <a
          href="/login"
          className="inline-flex items-center gap-2 text-white hover:underline group transition mt-4"
        >
          <span className="text-lg font-bold uppercase">Back to Login</span>
          <FaLongArrowAltRight className="text-sm transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:scale-110" />
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="bg-zinc-900 w-full max-w-7xl mx-auto p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, Admin 👋</h1>
        <p className="text-sm text-slate-400 mb-8">Logged in as {userEmail}</p>
        <p className="mb-6 text-slate-300">
          Di sini kamu bisa mengatur dan meng-upload project portofolio kamu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleNewProject}
            className="bg-primary hover:bg-primary/80 transition px-6 py-2 rounded text-sm font-semibold text-white"
          >
            + Tambah Project
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded text-sm font-semibold text-white"
          >
            Logout
          </button>
        </div>

        {/* Project List as Table */}
        <div className="mt-8 overflow-x-auto">
          {projects.length === 0 ? (
            <p className="text-slate-500 text-sm text-center">
              Belum ada project.
            </p>
          ) : (
            <table className="min-w-full text-sm text-left border border-zinc-800">
              <thead className="bg-zinc-800 text-white">
                <tr>
                  <th className="px-4 py-3 border-b border-zinc-700">Title</th>
                  <th className="px-4 py-3 border-b border-zinc-700">
                    Category
                  </th>
                  <th className="px-4 py-3 border-b border-zinc-700">
                    Description
                  </th>
                  <th className="px-4 py-3 border-b border-zinc-700">
                    Tech Stack
                  </th>
                  <th className="px-4 py-3 border-b border-zinc-700">Image</th>
                  <th className="px-4 py-3 border-b border-zinc-700">Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-zinc-800/70">
                    <td className="px-4 py-3 border-b border-zinc-800 font-semibold text-white">
                      {project.title}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800 text-white">
                      <span className="bg-zinc-700 text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800 text-slate-400">
                      {project.description}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800 text-slate-400 italic">
                      {Array.isArray(project.tech_stack)
                        ? project.tech_stack.join(", ")
                        : project.tech_stack?.split(",").join(", ")}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800">
                      {getFirstImageUrl(project.image_url) ? (
                        <div className="w-16 h-16 overflow-hidden rounded-lg group">
                          <Image
                            src={getFirstImageUrl(project.image_url)!}
                            alt={project.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded"
                          />
                        </div>
                      ) : (
                        <span className="text-slate-600 text-xs italic">
                          No image
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 border-b border-zinc-800">
                      {project.link ? (
                        <a
                          href={
                            project.link.startsWith("http")
                              ? project.link
                              : `https://${project.link}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          View ↗
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
