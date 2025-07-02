"use client";

import { FaLongArrowAltRight } from "react-icons/fa";
import FuzzyText from "@/blocks/TextAnimations/FuzzyText/FuzzyText"; // Pastikan ini ada atau buat dummy komponen dulu
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
      <h1 className="text-2xl mt-6 mb-6">Page Not Found!</h1>
      <p className="text-xl text-orange-50 mb-6">
        The page you&apos;re looking for doesn’t exist.{" "}
        <span className="font-bold text-primary">Please go back to home.</span>
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white hover:underline group transition mt-4"
      >
        <span className="text-lg font-bold uppercase">Back to Home</span>
        <FaLongArrowAltRight className="text-sm transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:scale-110" />
      </Link>
    </div>
  );
}
