import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // kamu bisa pilih sesuai kebutuhan
  variable: "--font-raleway",
});

export const metadata = {
  title: "Teguh Portfolio",
  description: "Frontend Dev & UI/UX Designer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="font-inter bg-black text-orange-50">
        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
