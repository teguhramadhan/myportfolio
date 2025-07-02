"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ScrollSpyContextType {
  activeId: string | null;
}

const ScrollSpyContext = createContext<ScrollSpyContextType>({
  activeId: null,
});

export const useScrollSpy = () => useContext(ScrollSpyContext);

interface ScrollSpyProviderProps {
  children: ReactNode;
  defaultActiveId?: string;
  threshold?: number;
}

export function ScrollSpyProvider({
  children,
  defaultActiveId = "about",
  threshold = 0.1,
}: ScrollSpyProviderProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) {
      console.warn("Scroll container not found!");
      return;
    }

    const sections = Array.from(
      scrollContainer.querySelectorAll<HTMLElement>("section[id]")
    );

    if (sections.length === 0) {
      console.warn("No sections with IDs found in scroll container");
      return;
    }

    // Set default active section
    setActiveId(defaultActiveId || sections[0].id);

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter(
        (entry) => entry.isIntersecting && entry.intersectionRatio >= threshold
      );

      if (visibleEntries.length === 0) return;

      // Find the entry with the highest intersection ratio
      const mostVisibleEntry = visibleEntries.reduce((prev, current) =>
        current.intersectionRatio > prev.intersectionRatio ? current : prev
      );

      const target = mostVisibleEntry.target;
      if (target instanceof HTMLElement && target.id) {
        setActiveId(target.id);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: scrollContainer,
      rootMargin: "-30% 0px -30% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [defaultActiveId, threshold]);

  return (
    <ScrollSpyContext.Provider value={{ activeId }}>
      {children}
    </ScrollSpyContext.Provider>
  );
}
