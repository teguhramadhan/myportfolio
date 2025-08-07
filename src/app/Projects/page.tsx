"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <section
      id="projects"
      className="flex flex-col justify-center py-4 md:py-12 lg:py-20 text-orange-50"
    >
      <div className="flex justify-between items-center mb-4 md:mb-8 lg:mb-12 font-code ligature-on">
        <h2 className="text-4xl font-bold text-primary uppercase">Projects</h2>
        <h1 className="text-4xl font-bold uppercase bg-gradient-to-b from-white via-primary to-black bg-clip-text text-transparent">
          {" "}
          ::: 01
        </h1>
      </div>

      {isLoading ? (
        <p className="text-slate-400 text-sm px-2">Loading projects...</p>
      ) : (
        <div className="space-y-8 px-2">
          {projects.length === 0 ? (
            <p className="text-slate-500 text-sm text-center">
              No project yet.
            </p>
          ) : (
            <>
              {projects.slice(0, 3).map((item, i) => {
                const isCoding = item.category.toLowerCase() === "coding";
                const detailLink = `/Projects/${item.id}`;

                let firstImage = "";
                try {
                  const parsed = JSON.parse(item.image_url ?? "");
                  firstImage = Array.isArray(parsed)
                    ? parsed[0]
                    : item.image_url!;
                } catch {
                  firstImage = item.image_url!;
                }

                return (
                  <div
                    key={i}
                    className="group flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 hover:shadow-md transition duration-300 pb-12"
                  >
                    {/* Gambar Thumbnail */}
                    <div className="w-full md:w-[160px] h-[160px] overflow-hidden bg-zinc-800 flex items-center justify-center rounded-lg group-hover:shadow-md">
                      {firstImage ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={firstImage}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 italic">
                          No image
                        </span>
                      )}
                    </div>

                    {/* Info Project */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-1 transition">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(Array.isArray(item.tech_stack)
                          ? item.tech_stack
                          : item.tech_stack?.split(",")
                        )?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/30 text-sm rounded-full text-primary"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>

                      {/* Tombol link */}
                      <Link
                        href={
                          isCoding
                            ? item.link?.startsWith("http")
                              ? item.link
                              : `https://${item.link}`
                            : detailLink
                        }
                        target={isCoding ? "_blank" : "_blank"}
                        className="inline-flex items-center gap-2 text-white hover:underline group transition mt-4"
                      >
                        <span className="text-sm font-medium">
                          {isCoding ? "View Project" : "View Detail"}
                        </span>
                        <FaLongArrowAltRight className="text-sm transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:scale-110" />
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Tombol See All */}
              <div className="text-center mt-8">
                <Link
                  href="/Projects/all"
                  className="inline-flex items-center gap-2 text-primary hover:underline hover:underline-offset-8 group transition mt-4"
                >
                  <span className="text-sm font-medium text-primary">
                    See all Project
                  </span>
                  <FaLongArrowAltRight className="text-sm transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:scale-110 text-primary" />
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
