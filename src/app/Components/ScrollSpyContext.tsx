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

export function ScrollSpyProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    if (!scrollContainer) {
      console.warn("Scroll container not found!");
      return;
    }

    const sections = Array.from(
      scrollContainer.querySelectorAll("section[id]")
    );

    // Function to determine which section is currently active
    const updateActiveSection = () => {
      const scrollPosition = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;

      // Find the section that is most visible in the viewport
      let currentActiveId = null;
      let maxVisibility = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();

        // Calculate relative position within the scroll container
        const sectionTop = rect.top - containerRect.top;
        const sectionBottom = rect.bottom - containerRect.top;
        const sectionHeight = rect.height;

        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, -sectionTop);
        const visibleBottom = Math.min(
          sectionHeight,
          containerHeight - sectionTop
        );
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / sectionHeight;

        // Consider a section active if it's at least 30% visible and takes up significant viewport space
        if (visibilityRatio > 0.3 && visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          currentActiveId = section.id;
        }
      });

      // Fallback: if no section meets the visibility criteria, use the section closest to top
      if (!currentActiveId && sections.length > 0) {
        let minDistance = Infinity;
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();
          const distance = Math.abs(rect.top - containerRect.top);

          if (distance < minDistance) {
            minDistance = distance;
            currentActiveId = section.id;
          }
        });
      }

      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    // Use Intersection Observer as primary method
    const observer = new IntersectionObserver(
      (entries) => {
        // Get all currently intersecting sections
        const intersectingSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            // Sort by intersection ratio, then by position
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            // If intersection ratios are equal, prefer the one higher up
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

        if (intersectingSections.length > 0) {
          const newActiveId = intersectingSections[0].target.id;
          if (newActiveId !== activeId) {
            setActiveId(newActiveId);
          }
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-20% 0% -20% 0%", // Adjusted margins for better detection
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better accuracy
      }
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    // Also listen to scroll events as fallback
    scrollContainer.addEventListener("scroll", updateActiveSection);

    // Initial check
    updateActiveSection();

    return () => {
      observer.disconnect();
      scrollContainer.removeEventListener("scroll", updateActiveSection);
    };
  }, [activeId]);

  return (
    <ScrollSpyContext.Provider value={{ activeId }}>
      {children}
    </ScrollSpyContext.Provider>
  );
}
