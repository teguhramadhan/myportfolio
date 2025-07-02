export default function About() {
  return (
    <section id="about" className="flex flex-col justify-start py-2">
      <div className="space-y-4 text-sm md:text-md lg:text-lg text-orange-50 text-justify lg:text-justify px-2">
        <h2 className="text-4xl font-bold text-primary mb-3 md:mb-6 lg:mb-12 uppercase">
          About
        </h2>
        <p>
          I&apos;m a{" "}
          <span className="font-bold text-primary">
            UI/UX Designer and Frontend Developer
          </span>{" "}
          with around <span className="italic">2 years of experience</span> in
          crafting digital interfaces. I specialize in creating visually
          appealing designs that are both user-friendly and intuitive, combining
          a clean aesthetic with thoughtful interaction patterns.
        </p>

        <p>
          My passion lies in bridging the gap between design and code. I love
          turning complex problems into elegant solutions through
          well-structured components, interactive prototypes, and responsive
          layouts. Whether it&apos;s designing in Figma or building in React and
          TailwindCSS, I enjoy the creative flow of bringing ideas to life with
          precision and care.
        </p>

        <p>
          Over the past few years, I&apos;ve worked on various projects ranging
          from personal portfolios and company profiles to e-commerce websites
          and dashboard systems. This experience has taught me the importance of
          consistency, accessibility, and attention to micro-interactions that
          enhance the user experience.
        </p>

        <p>
          I&apos;m constantly exploring new design trends, improving my
          workflow, and learning modern web technologies. Currently, I&apos;m
          focusing on refining my skills in motion design, Next.js, and building
          better design systems to streamline development across projects.
        </p>
      </div>
    </section>
  );
}
