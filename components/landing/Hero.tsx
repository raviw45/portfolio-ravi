"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "../common/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import AnimatedBlog from "../common/animated-blob";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      contentRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }

    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      imageRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = "1";
          imageRef.current.style.transform = "translateY(0)";
        }
      }, 300);
    }
  }, []);

  return (
    <main
      id="hero"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="flex items-center w-full min-h-[calc(100vh-5rem)] px-4 sm:px-6 scroll-mt-20"
    >
      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center space-y-4 transition-all duration-700"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              I&apos;m <span>Ravikant Waghmare</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mt-2">
              Software Engineer
            </h2>
          </div>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I craft high-performance, SEO-optimized web applications with React,
            Redux, Next.js, Node.js, and Spring Boot. Skilled in building
            secure, scalable solutions with RDBMS, REST APIs and DevOps
            practices.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button icon={<Download size={20} />} size="lg">
              Download CV
            </Button>
            <Link href="mailto:ravikantwaghmare82@gmail.com">
              <Button icon={<Mail size={20} />} size="lg">
                Connect
              </Button>
            </Link>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
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
          </div>
        </div>

        {/* Right side */}
        <div
          ref={imageRef}
          className="relative flex justify-center items-center transition-all duration-700"
        >
          {/* Animated blob */}
          <AnimatedBlog />

          {/* Image */}
          <div className="relative z-10 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]">
            <Image
              src="/image/portfolioHeaderImg.png"
              alt="Ravikant Waghmare"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
