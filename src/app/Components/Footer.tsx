// Components/Footer.tsx
export default function Footer() {
  const techStack = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "React Icons",
  ];

  return (
    <footer className="w-full mt-20 py-6 text-center text-md text-slate-500 font-code ligature-on">
      <p className="mb-3">Built with:</p>
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 border border-zinc-700 rounded-full text-sm text-slate-300 hover:border-primary hover:text-primary transition"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm md:text-md lg:text-lg text-slate-600">
        © {new Date().getFullYear()} Teguh Ramadhan.
      </p>
      <p className="text-xs md:text-sm lg:text-md mt-1 text-primary/60">
        All rights reserved.
      </p>
    </footer>
  );
}
