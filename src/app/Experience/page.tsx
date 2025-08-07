export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center py-4 md:py-12 lg:py-20"
    >
      <div className="flex justify-between items-center mb-4 md:mb-8 lg:mb-12 font-code ligature-on">
        <h2 className="text-4xl font-bold text-primary uppercase">
          Experience
        </h2>
        <h1 className="text-4xl font-bold uppercase bg-gradient-to-b from-white via-primary to-black bg-clip-text text-transparent">
          {" "}
          ::: 03
        </h1>
      </div>
      <div className="space-y-4 text-orange-50">
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
            className="group transition duration-300 hover:shadow-md rounded-xl px-2 py-6"
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
                <h3 className="text-2xl font-semibold mb-1 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="leading-relaxed text-justify text-sm md:text-md lg:text-lg lg:text-start mb-4">
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
