"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import Link from "next/link";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech_stack: string[] | string;
  link?: string;
  image_url?: string;
}

export default function AllProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("az");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data) {
        setProjects(data);
      }
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      filterCategory === "all"
        ? true
        : item.category.toLowerCase() === filterCategory.toLowerCase()
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return b.id - a.id;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <section className="min-h-screen px-6 py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-8 transition"
        >
          <FaLongArrowAltLeft />
          <span className="text-sm font-medium uppercase">Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold text-primary mb-6">All Projects</h1>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          {/* Search Bar */}
          <div className="flex items-center bg-zinc-800 px-3 py-2 w-full sm:max-w-[300px] border border-zinc-700">
            <FaSearch className="text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-transparent outline-none text-sm text-white w-full placeholder:text-slate-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter & Sort */}
          <div className="flex flex-wrap gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 px-3 py-1 text-sm text-white"
            >
              <option value="az">A - Z</option>
              <option value="recent">Recent</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 px-3 py-1 text-sm text-white"
            >
              <option value="all">All Categories</option>
              <option value="design">Design</option>
              <option value="3d design">3D Design</option>
              <option value="coding">Coding</option>
            </select>
          </div>
        </div>

        {/* List */}
        {isLoading ? (
          <p className="text-slate-400">Loading projects...</p>
        ) : filteredProjects.length === 0 ? (
          <p className="text-slate-500">No projects found.</p>
        ) : (
          <div className="space-y-16">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col md:flex-row gap-6 md:gap-10 border-b border-zinc-800 pb-8"
              >
                {/* Image */}
                <div className="w-full md:w-[200px] h-[200px] bg-zinc-800 flex items-center justify-center overflow-hidden">
                  {item.image_url ? (
                    (() => {
                      let firstImage = "";
                      try {
                        const parsed = JSON.parse(item.image_url);
                        firstImage = Array.isArray(parsed)
                          ? parsed[0]
                          : item.image_url;
                      } catch {
                        firstImage = item.image_url;
                      }

                      return (
                        <div className="relative w-full h-full">
                          <Image
                            src={firstImage}
                            alt={item.title}
                            fill
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      );
                    })()
                  ) : (
                    <span className="text-slate-400 text-xs italic">
                      No image
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(Array.isArray(item.tech_stack)
                      ? item.tech_stack
                      : item.tech_stack?.split(",")
                    )?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary text-xs px-3 py-1"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {item.category.toLowerCase() === "coding" && item.link && (
                      <Link
                        href={
                          item.link.startsWith("http")
                            ? item.link
                            : `https://${item.link}`
                        }
                        target="_blank"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition"
                      >
                        <span className="text-sm font-medium">
                          View Project
                        </span>
                        <FaLongArrowAltRight className="text-sm transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}

                    {item.category.toLowerCase() !== "coding" && (
                      <Link
                        href={`/Projects/${item.id}`}
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition"
                      >
                        <span className="text-sm font-medium">View Detail</span>
                        <FaLongArrowAltRight className="text-sm transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
