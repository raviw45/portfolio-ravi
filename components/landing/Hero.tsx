"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../common/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import AnimatedBlog from "../common/animated-blob";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/config/framer";

const typingWords = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Full Stack Java Developer",
  "React Developer",
  "Frontend Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed] = useState(150);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, speed / 2);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <main
      id="hero"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="flex items-center w-full min-h-[calc(100vh-5rem)] not-even:not-last:scroll-mt-20"
    >
      <section className="w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
        {/* Left side */}
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          custom={0}
        >
          <motion.div variants={fadeUpVariant} custom={0.1}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-snug sm:leading-tight md:leading-tight lg:leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              I&apos;m <span>Ravikant Waghmare</span>
            </h1>

            <h2 className="text-lg md:text-2xl font-bold tracking-wide mt-2 leading-snug md:leading-snug text-indigo-600 dark:text-indigo-300">
              I am a {text}
              <span className="inline-block w-1 h-6 bg-indigo-600 dark:bg-indigo-300 animate-blink ml-1 align-bottom"></span>
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-md text-gray-700 dark:text-gray-300"
            variants={fadeUpVariant}
            custom={0.2}
          >
            I craft high-performance, SEO-optimized web applications with React,
            Redux, Next.js, Node.js, and Spring Boot. Skilled in building
            secure, scalable solutions with RDBMS, REST APIs and DevOps
            practices.
          </motion.p>

          <motion.div
            className="pt-2 flex flex-wrap gap-4"
            variants={fadeUpVariant}
            custom={0.3}
          >
            <Link href="/Ravikant_Waghmare_Resume.pdf" download>
              <Button icon={<Download size={20} />} size="lg">
                Download CV
              </Button>
            </Link>
            <Link href="mailto:ravikantwaghmare82@gmail.com">
              <Button icon={<Mail size={20} />} size="lg">
                Connect
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
            variants={fadeUpVariant}
            custom={0.4}
          >
            {[
              "React",
              "Next.js",
              "Redux",
              "Node.js",
              "TypeScript",
              "Java",
              "Spring Boot",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="relative flex justify-center items-center w-full h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated blob */}
          <AnimatedBlog css={"w-full h-full"} />

          {/* Image */}
          <div className="relative z-10 w-full">
            <Image
              src="/image/portfolioHeaderImg.png"
              title="Ravikant Waghmare"
              alt="Ravikant Waghmare"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg object-cover hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </main>
  );
};

export default Hero;
