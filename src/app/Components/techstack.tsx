"use client";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TechStack() {
  const stacks = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-4xl" />,
      description: "A React framework for building high-performance web apps.",
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl text-sky-500" />,
      description: "A powerful UI library for creating interactive interfaces.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
      description: "A utility-first CSS framework for rapid styling.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      description: "A superset of JavaScript with static typing.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      description: "JavaScript runtime for building scalable server-side apps.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
      description: "The core markup language of the modern web.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-4xl text-blue-500" />,
      description: "Modern styling to create beautiful web pages.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-yellow-400" />,
      description: "The core language of modern web development.",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-4xl text-red-500" />,
      description: "Version control system for tracking and collaboration.",
    },
  ];

  return (
    <section id="tech-stack" className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Tech Stack
        </h2>
        <p className="text-slate-500 mb-8">
          Technologies & tools I use to build awesome digital products.
        </p>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          breakpoints={{
            0: {
              // Mobile < 640px
              slidesPerView: 2, // 2 card di mobile
            },
            640: {
              // sm (640px)
              slidesPerView: 2, // Masih 2 card, bisa juga sama
            },
            768: {
              // md (768px)
              slidesPerView: 3, // md: 3 card
            },
            1024: {
              // lg (1024px)
              slidesPerView: 3, // lg: 3 card (atau bisa 4 kalau mau)
            },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          loop
          className="relative"
        >
          {stacks.map((stack, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-6 bg-gray-950/50 rounded-xl shadow hover:shadow-lg transition">
                {stack.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-100">
                  {stack.name}
                </h3>
                <p className="mt-2 text-gray-400 text-center text-xs md:text-sm lg:text-md">
                  {stack.description}
                </p>
              </div>
            </SwiperSlide>
          ))}

          {/* Wrapper pagination dibikin relative & flex-end */}
          <div className="relative w-full flex justify-end items-center mt-2 pr-4">
            <div className="swiper-pagination !static"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
