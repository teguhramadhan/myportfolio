"use client";

import { useScrollSpy } from "./ScrollSpyContext";

export default function SidebarNav() {
  const { activeId } = useScrollSpy();

  // Debug log
  console.log("Current activeId:", activeId);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
      // Calculate the position to scroll to
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const targetPosition =
        scrollTop + (targetRect.top - containerRect.top) - 100; // 100px offset

      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="mt-10 space-y-4 text-muted">
      {links.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeId === sectionId;

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`relative block w-fit transition-colors duration-300 cursor-pointer ${
              isActive
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                isActive ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
