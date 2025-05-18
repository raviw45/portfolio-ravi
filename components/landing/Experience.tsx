"use client";
import { timelineData } from "@/data/Experience";
import { motion } from "framer-motion";
import React from "react";

const ExperienceTimeline = () => {
  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      id="experience"
      className="md:py-20 py-8 overflow-hidden scroll-mt-20"
    >
      <div className="w-[95%] md:w-[85%] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          My Experience
        </h2>
        <div className="relative mx-auto">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 z-0" />

          <div className="space-y-20 relative z-10">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const SkillIcons = item.skills.map(({ Icon, color }, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                  style={{
                    backgroundColor: "#fff",
                    color: color,
                    border: `2px solid ${color}`,
                  }}
                >
                  <Icon className="text-xl" />
                </div>
              ));

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {isLeft && (
                    <div className="md:w-5/12 w-full px-6">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-xl relative"
                      >
                        {/* Connecting Line */}
                        <div className="absolute right-[-110px] top-1/2 transform -translate-y-1/2 h-1 w-28 bg-indigo-600" />
                        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                          {item.date} | {item.location}
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex gap-2 flex-wrap">{SkillIcons}</div>
                      </motion.div>
                    </div>
                  )}

                  {/* Timeline Icon */}
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg relative">
                    {item.icon}
                  </div>

                  {!isLeft && (
                    <div className="md:w-5/12 w-full px-6">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-xl relative"
                      >
                        {/* Connecting Line */}
                        <div className="absolute left-[-110px] top-1/2 transform -translate-y-1/2 h-1 w-28 bg-indigo-600" />
                        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                          {item.date} | {item.location}
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex gap-2 flex-wrap">{SkillIcons}</div>
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
