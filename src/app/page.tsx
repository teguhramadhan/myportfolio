export default function Home() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">About</h2>
        <div className="space-y-4 text-lg">
          <p>
            Halo, saya Teguh. Saya adalah seorang Frontend Developer dan UI/UX
            Designer yang passionate dalam menciptakan pengalaman digital yang
            menarik dan fungsional.
          </p>
          <p>
            Dengan latar belakang yang kuat dalam teknologi web modern, saya
            fokus pada pengembangan antarmuka yang tidak hanya indah dipandang
            tetapi juga mudah digunakan.
          </p>
          <p>
            Saya selalu bersemangat untuk mempelajari teknologi baru dan
            mengaplikasikannya dalam proyek-proyek yang menantang.
          </p>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-semibold mb-2">
              Senior Frontend Developer
            </h3>
            <p className="text-muted-foreground mb-2">
              PT. Tech Innovation • 2022 - Present
            </p>
            <p>
              Memimpin pengembangan aplikasi web menggunakan React, Next.js, dan
              TypeScript. Bertanggung jawab dalam optimasi performa dan
              implementasi best practices.
            </p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-muted-foreground mb-2">
              CV. Digital Solutions • 2020 - 2022
            </p>
            <p>
              Mengembangkan berbagai website dan aplikasi web dengan fokus pada
              responsive design dan user experience yang optimal.
            </p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
            <p className="text-muted-foreground mb-2">
              Freelance • 2019 - 2020
            </p>
            <p>
              Merancang antarmuka dan pengalaman pengguna untuk berbagai klien,
              dari startup hingga perusahaan established.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Projects</h2>
        <div className="grid gap-6">
          <div className="border border-zinc-700 rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4">
              Platform e-commerce modern dengan fitur lengkap termasuk payment
              gateway, inventory management, dan analytics dashboard.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Tailwind CSS
              </span>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">Task Management App</h3>
            <p className="text-muted-foreground mb-4">
              Aplikasi manajemen tugas dengan fitur kolaborasi real-time, drag &
              drop interface, dan integrasi calendar.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Vue.js
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Socket.io
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                MongoDB
              </span>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-muted-foreground mb-4">
              Website portfolio interaktif dengan animasi smooth, dark/light
              mode, dan optimasi SEO yang sempurna.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Framer Motion
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                GSAP
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Contact</h2>
        <div className="space-y-6">
          <p className="text-lg">
            Mari berkolaborasi dan wujudkan ide digital Anda menjadi kenyataan!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">@</span>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">teguh@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">in</span>
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-muted-foreground">linkedin.com/in/teguh</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">gh</span>
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-muted-foreground">github.com/teguh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
