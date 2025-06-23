export default function Projects() {
  return (
    <div className="max-w-6xl h-screen">
      <h2 className="text-2xl font-bold text-primary mb-4">Projects</h2>
      <div className="grid gap-6">
        <div className="border border-zinc-700 p-4 rounded">
          <h3 className="text-xl font-semibold">My Portfolio</h3>
          <p className="text-sm text-muted">
            Built with Next.js, TailwindCSS, and Framer Motion.
          </p>
        </div>
      </div>
    </div>
  );
}
