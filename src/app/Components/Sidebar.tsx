import SidebarNav from "./SidebarNav";

import {
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-full lg:w-2/5">
        {/* Wrap dengan fixed khusus lg */}
        <div className="static md:static lg:fixed lg:w-2/5 lg:max-w-[480px] lg:h-screen lg:overflow-y-auto lg:pr-12">
          <h1 className="text-4xl font-normal text-primary tracking-tighter mb-2">
            teguh ramadhan
          </h1>
          <p className="text-slate-300 font-semibold text-xl mb-6">
            Front End Engineer
          </p>
          <p className="max-w-lg text-slate-500 font-light text-sm md:text-md lg:text-lg mb-6">
            I&apos;m a UI/UX Designer and Frontend Developer who builds clean,
            user-friendly digital experiences. With a strong eye for design and
            a passion for code, I bridge creativity and functionality to craft
            intuitive, responsive interfaces.
          </p>

          {/* Social media untuk mobile */}
          <div className="lg:hidden flex justify-start gap-6 mb-8 text-2xl text-slate-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://dribbble.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-primary transition"
            >
              <FaDribbble />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-primary transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://behance.net/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-primary transition"
            >
              <FaBehance />
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-primary transition"
            >
              <FaTelegramPlane />
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
                className="text-white hover:text-primary transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://dribbble.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-primary transition"
              >
                <FaDribbble />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-primary transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-primary transition"
              >
                <FaBehance />
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-primary transition"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
