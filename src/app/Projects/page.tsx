import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa"; // icon arrow

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center py-20">
      <h2 className="text-4xl font-bold text-primary mb-12 uppercase px-8">
        Projects
      </h2>
      <div className="space-y-8 px-8">
        {[
          {
            image:
              "https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template-353x278.jpg.avif",
            title: "E-Commerce Platform",
            desc: "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
            tech: ["React", "Next.js", "TypeScript"],
          },
          {
            image:
              "https://figmafreebie.com/uploads/freebies/task-management-app-screen-by-ui-fry.webp",
            title: "Task Management App",
            desc: "Aplikasi manajemen tugas dengan fitur kolaborasi real-time dan drag & drop interface.",
            tech: ["Vue.js", "Node.js", "Socket.io"],
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 hover:shadow-md transition duration-300 pb-12"
          >
            {/* Gambar */}
            <div className="w-full md:w-[160px] h-[160px] overflow-hidden bg-zinc-800 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-1 transition">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/30 text-sm rounded-full text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Arrow link to detail */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white hover:underline group transition mt-4"
              >
                <span className="text-sm font-medium">View Project</span>
                <FaLongArrowAltRight className="text-sm transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:scale-110" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
