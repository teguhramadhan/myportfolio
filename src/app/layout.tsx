import "./globals.css";
import type { ReactNode } from "react";
import { ScrollSpyProvider } from "./Components/ScrollSpyContext";
import SidebarNav from "./Components/SidebarNav";

export const metadata = {
  title: "Teguh Portfolio",
  description: "Frontend Dev & UI/UX Designer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-black text-white">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="hidden lg:block w-1/4 border-r border-zinc-700 p-8 sticky top-0 h-screen">
            <h1 className="text-2xl font-bold text-primary">Teguh</h1>
            <SidebarNav />
          </aside>

          {/* Main */}
          <ScrollSpyProvider>
            <main
              id="scroll-container"
              className="w-full overflow-y-auto h-screen p-8 space-y-32 scroll-smooth"
            >
              {children}
            </main>
          </ScrollSpyProvider>
        </div>
      </body>
    </html>
  );
}
