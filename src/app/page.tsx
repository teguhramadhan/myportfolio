import About from "./About/page";
import TechStack from "./Components/techstack";
import Experience from "./Experience/page";
import Projects from "./Projects/page";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

import { ScrollSpyProvider } from "./Components/ScrollSpyContext";

export default function Home() {
  return (
    <>
      <ScrollSpyProvider>
        <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 py-12 lg:py-20 gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-2/5">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main
            id="scroll-container"
            className="w-full lg:w-3/5 space-y-20 h-screen lg:overflow-y-auto scroll-smooth scroll-hide"
          >
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </ScrollSpyProvider>
    </>
  );
}
