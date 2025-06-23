export default function Experience() {
  return (
    <section id="experience" className="flex flex-col justify-center py-20">
      <h2 className="text-4xl font-bold text-primary mb-12 px-8 uppercase">
        Experience
      </h2>
      <div className="space-y-8">
        {[
          {
            date: "Mar 2016 – Jun 2025",
            title: "Teknisi FTM",
            company: "PT. Telkom Akses",
            desc: "Responsible for installation, maintenance, and troubleshooting of fiber optic (FTM) networks. Conduct field coordination, technical disruption analysis, and documentation of infrastructure data and customer service activation.",
            skills: [
              "Fiber Optic",
              "OLT / ONT",
              "FTTH",
              "Troubleshooting",
              "NMS",
              "Aplikasi TAM",
            ],
          },
          {
            date: "2018 – Present",
            title: "Freelance Designer",
            company: "Logo & UI/UX Design",
            desc: "Providing logo design, visual identity, and user interface services for various clients, both local and international. Working on independent projects as well as collaborations with developer teams and small startups.",
            skills: [
              "Figma",
              "Adobe Illustrator",
              "Photoshop",
              "Branding",
              "UI Design",
              "UX Research",
            ],
          },
          {
            date: "2020 – Present",
            title: "3D Design Enthusiast",
            company: "Self-Learning & Practice",
            desc: "Actively exploring 3D design for visualization, short animations, and product mockups. Self-taught through various platforms.",
            skills: ["Blender", "3D Modeling", "Texturing", "Rendering"],
          },
          {
            date: "2021 – Present",
            title: "Web Developer",
            company: "Personal & Client Projects",
            desc: "Working on various frontend and fullstack projects using React, Next.js, and Laravel. Focus on clean UI, performance, and maintainable code structure.",
            skills: [
              "React",
              "Next.js",
              "Laravel",
              "TailwindCSS",
              "TypeScript",
              "Git",
            ],
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group transition duration-300 hover:bg-zinc-900 hover:shadow-md rounded-xl px-8 py-6"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Tanggal */}
              <div className="w-full md:w-[120px] flex md:items-center justify-start">
                <span className="text-sm text-muted font-semibold">
                  {item.date}
                </span>
              </div>

              {/* Konten utama */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="text-gray-300 leading-relaxed mb-3 text-justify lg:text-start">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/40 text-sm rounded-full text-primary transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
