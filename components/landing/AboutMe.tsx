"use client";

import React from "react";
import Image from "next/image";
import SocialIcons from "../common/SocialIcons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/config/framer";

const AboutMe = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="md:py-20 py-8 overflow-hidden w-full"
    >
      <div className="w-[95%] md:w-[85%] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="relative flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0}
        >
          {/* Relative wrapper to control layering */}
          <div className="relative w-fit">
            {/* Profile Image on top */}
            <div className="relative z-10 rounded-full overflow-hidden shadow-2xl bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500 p-1 animate-float">
              <div className="w-64 h-64 md:h-96 md:w-96 rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <Image
                  src="/image/profile.jpg"
                  alt="Ravikant Waghmare"
                  fill
                  className="object-contain w-full h-full rounded-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={1}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-6">
            I&apos;m a full-stack software engineer passionate about building
            performant and user-focused web applications. At{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Vionsys IT Solutions India Pvt. Ltd.
            </span>
            , I focus on developing secure, scalable platforms using modern
            frontend and backend technologies.
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
            <li>
              🎯 <strong>Current Role:</strong> Software Engineer @ Vionsys IT
              Solutions
            </li>
            <li>
              ⚛️ <strong>Frontend:</strong> Expert in React.js, Next.js, and
              Tailwind CSS for building responsive and dynamic UIs
            </li>
            <li>
              🖥️ <strong>Backend:</strong> Skilled in Node.js, Express.js, Java,
              and Spring Boot with RESTful API development
            </li>
            <li>
              ☁️ <strong>Cloud & DevOps:</strong> AWS, Docker, Jenkins, and
              Kubernetes for secure deployment pipelines
            </li>
            <li>
              🏆 <strong>Awards:</strong> Team of the Quarter & Champion of the
              Quarter at Vionsys
            </li>
          </ul>

          <div className="py-4">
            <SocialIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
