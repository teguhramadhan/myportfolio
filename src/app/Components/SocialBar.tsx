import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export default function SocialBar() {
  return (
    <>
      <div className="flex items-center justify-center pb-6 sm:pb-10">
        <h1 className="uppercase font-semibold text-base sm:text-lg text-center">
          Contact Me
        </h1>
      </div>

      <div className="flex justify-center gap-6 sm:gap-12 lg:gap-32 mb-8 text-2xl sm:text-3xl md:text-4xl text-slate-400 flex-wrap">
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
    </>
  );
}
