import { supabaseServer } from "@/app/lib/supabaseServer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaLongArrowAltLeft, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "@/app/Components/Footer";
import SocialBar from "@/app/Components/SocialBar";
import Image from "next/image";

export const dynamic = "force-dynamic";

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

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !data) return notFound();

  const project: Project = data;

  let images: string[] = [];

  if (project.image_url) {
    try {
      const parsed = JSON.parse(project.image_url);
      images = Array.isArray(parsed) ? parsed : [project.image_url];
    } catch {
      images = [project.image_url];
    }
  }

  const techs =
    typeof project.tech_stack === "string"
      ? project.tech_stack.split(",")
      : project.tech_stack;

  return (
    <section className="min-h-screen py-16 bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full blur-2xl animate-bounce [animation-delay:1s]"></div>
      </div>

      <div className="max-w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
        {/* Breadcrumb & Keterangan */}
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 opacity-0 animate-fade-in [animation-fill-mode:forwards]"
          style={{ animationDelay: "100ms" }}
        >
          {/* Tombol Back */}
          <div className="md:w-1/4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated background line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>

              {/* Sliding background */}
              <div className="absolute inset-0 bg-primary/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

              <div className="relative z-10 flex items-center gap-2">
                <div className="w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <FaLongArrowAltLeft className="text-sm group-hover:-translate-x-0.5 transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    GO BACK
                  </span>
                  <span className="text-sm font-bold -mt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                    Projects
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Judul & Deskripsi */}
          <div className="md:w-2/4 text-center">
            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1 text-xs font-mono bg-slate-800 text-slate-400 border border-slate-700 uppercase tracking-widest">
                {project.category || "Project"}
              </span>
            </div>

            {/* Title with geometric design */}
            <div className="relative mb-8">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-600"></div>
                <div className="w-2 h-2 border border-primary rotate-45"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-600"></div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tight leading-none hover:text-primary transition-colors duration-700 font-code cursor-default">
                {project.title}
              </h1>

              <div className="flex items-center justify-center gap-4 mt-2">
                <div className="w-12 h-px bg-primary"></div>
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                <div className="w-12 h-px bg-primary"></div>
              </div>
            </div>

            {/* Description in modern card */}
            <div className="max-w-md mx-auto">
              <div className="relative bg-slate-900 border-l-4 border-primary pl-6 pr-4 py-4">
                <p className="text-slate-300 text-sm leading-relaxed text-left italic">
                  &quot;{project.description}&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="md:w-1/4">
            {/* Stack header */}
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-end">
              <div className="w-6 h-px bg-slate-600"></div>
              <span className="text-xs font-mono text-slate-500 uppercase">
                Stack
              </span>
              <div className="w-6 h-px bg-slate-600"></div>
            </div>

            {/* Tech grid */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 justify-items-center md:justify-items-end">
              {techs.map((t, i) => (
                <div
                  key={i}
                  className="relative group opacity-0 animate-fade-in [animation-fill-mode:forwards]"
                  style={{ animationDelay: `${700 + i * 150}ms` }}
                >
                  <div className="bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-slate-300 hover:text-primary hover:border-primary transition-all duration-300 cursor-default min-w-[80px] text-center">
                    <div className="font-mono uppercase tracking-wider">
                      {t.trim()}
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="flex justify-center md:justify-end mt-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-slate-700 rotate-45"
                    style={{ animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Link (if exists) */}
        {project.link && (
          <div
            className="flex justify-center mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards]"
            style={{ animationDelay: "600ms" }}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/30 hover:from-primary/30 hover:to-primary/40 text-primary px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <span className="font-semibold">View Live Project</span>
              <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>

      {/* Showcase Gambar */}
      <div className="max-w-full">
        {images.length > 1 && (
          <div className="flex flex-col">
            {images.slice(1).map((src, idx) => (
              <div
                key={idx}
                className="w-full overflow-hidden group opacity-0 animate-fade-in [animation-fill-mode:forwards]"
                style={{ animationDelay: `${800 + idx * 200}ms` }}
              >
                <div className="relative transform group-hover:scale-[1.02] transition-transform duration-700">
                  <Image
                    src={src}
                    alt={`Project Image ${idx + 2}`}
                    width={800}
                    height={600}
                    className="w-full h-auto shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-sm">
                      Image {idx + 2} of {images.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="opacity-0 animate-fade-in [animation-fill-mode:forwards]"
        style={{ animationDelay: "1000ms" }}
      >
        <SocialBar />
        <Footer />
      </div>
    </section>
  );
}
