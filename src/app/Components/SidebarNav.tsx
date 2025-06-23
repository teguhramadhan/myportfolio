"use client";

import { useScrollSpy } from "./ScrollSpyContext";

interface NavLink {
  href: string;
  label: string;
}

export default function SidebarNav() {
  const { activeId } = useScrollSpy();

  const links: NavLink[] = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    const scrollContainer = document.getElementById("scroll-container");

    if (targetElement && scrollContainer) {
      const offset = 50;
      const targetPosition = targetElement.offsetTop - offset;

      scrollContainer.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="mt-10 space-y-4">
      {links.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeId === sectionId;

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`group relative pl-4 block w-fit transition-colors duration-300 cursor-pointer uppercase ${
              isActive
                ? "text-primary font-bold"
                : "text-gray-400 hover:text-primary"
            }`}
          >
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[2px] bg-primary transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
              }`}
            />
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
