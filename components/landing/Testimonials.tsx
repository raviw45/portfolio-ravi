"use client";

import { testimonials } from "@/data/Testimonial";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Testimonials: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  React.useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  });

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
          Testimonials
        </h2>

        <div className="relative mx-auto px-4 sm:px-6 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0 px-2">
                <div className="max-w-xl mx-auto bg-white dark:bg-gray-900/80 shadow-xl rounded-2xl p-8 sm:p-10 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-center">
                  <FaQuoteLeft className="text-indigo-500 text-3xl mb-4 mx-auto" />
                  <p className="text-gray-700 dark:text-gray-200 italic mb-6 text-lg leading-relaxed">
                    “{t.message}”
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-110 transition z-30"
            onClick={prev}
          >
            <IoChevronBack className="text-xl sm:text-2xl text-indigo-500" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-110 transition z-30"
            onClick={next}
          >
            <IoChevronForward className="text-xl sm:text-2xl text-indigo-500" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "bg-indigo-500 scale-110"
                    : "bg-gray-400/40 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
