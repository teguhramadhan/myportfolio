import "./globals.css";
import type { ReactNode } from "react";
import { ScrollSpyProvider } from "./Components/ScrollSpyContext";
import SidebarNav from "./Components/SidebarNav";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Teguh Portfolio",
  description: "Frontend Dev & UI/UX Designer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-helvetica bg-black text-orange-50">
        <ScrollSpyProvider>
          <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 py-12 lg:py-20 gap-12">
            {/* Sidebar */}
            <aside className="w-full lg:w-2/5">
              {/* Wrap dengan fixed khusus lg */}
              <div className="static md:static lg:fixed lg:w-2/5 lg:max-w-[480px] lg:h-screen lg:overflow-y-auto lg:pr-12">
                <h1 className="text-4xl font-bold text-primary tracking-tighter mb-4">
                  Teguh Ramadhan
                </h1>
                <p className="text-slate-300 font-semibold text-xl mb-6">
                  Front End Engineer
                </p>
                <p className="max-w-lg text-slate-500 font-light text-sm md:text-md lg:text-lg mb-6">
                  I'm a UI/UX Designer and Frontend Developer who builds clean,
                  user-friendly digital experiences. With a strong eye for
                  design and a passion for code, I bridge creativity and
                  functionality to craft intuitive, responsive interfaces.
                </p>

                {/* Social media untuk mobile */}
                <div className="lg:hidden flex justify-start gap-6 mb-8 text-2xl text-slate-400">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:youremail@example.com"
                    className="hover:text-primary transition"
                  >
                    <FaEnvelope />
                  </a>
                </div>
                {/* Social media untuk desktop */}
                <div className="hidden lg:block">
                  <SidebarNav />
                  <div className="hidden fixed bottom-32 lg:flex justify-start gap-6 mt-10 text-xl text-slate-400">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="mailto:youremail@example.com"
                      className="hover:text-primary transition"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main
              id="scroll-container"
              className="w-full lg:w-3/5 space-y-20 h-screen lg:overflow-y-auto scroll-smooth scroll-hide"
            >
              {children}
            </main>
          </div>
        </ScrollSpyProvider>
      </body>
    </html>
  );
}
