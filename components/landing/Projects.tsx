"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects, skillColors } from "@/data/Project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const ProjectCard = ({
  title,
  description,
  images,
  github,
  liveDemo,
  skills,
  index,
}: (typeof projects)[0] & { index: number }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl hover:shadow-4xl transform hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
    >
      <div className="relative h-48 rounded-t-xl overflow-hidden bg-black group">
        {/* Image with hover opacity effect */}
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-300 hover:opacity-60"
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Navigation Buttons: visible only on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white/70 dark:bg-black/70 text-black dark:text-white w-10 h-10 rounded-full z-10 shadow-xl hover:scale-110 transition-all duration-300 border border-gray-300 dark:border-gray-600"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white/70 dark:bg-black/70 text-black dark:text-white w-10 h-10 rounded-full z-10 shadow-xl hover:scale-110 transition-all duration-300 border border-gray-300 dark:border-gray-600"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Image dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 w-full flex justify-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "bg-indigo-500 scale-125"
                    : "bg-gray-400 dark:bg-gray-600 opacity-70"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="relative group">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer transition">
            {title}
          </h3>
          <div className="absolute left-0 top-full mt-2 w-72 p-3 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
            {description}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((Icon, i) => {
            const iconName = Icon.name || "";
            const color = skillColors[iconName] || "#666";
            return (
              <div
                key={i}
                title={iconName}
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                style={{ color }}
              >
                <Icon className="text-xl" />
              </div>
            );
          })}
        </div>

        <div className="flex gap-6 mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsShowcase = () => {
  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="md:py-20 py-8 overflow-hidden scroll-mt-20"
    >
      <div className="w-[95%] md:w-[85%] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
