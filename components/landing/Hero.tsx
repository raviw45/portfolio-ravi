import Image from "next/image";
import React from "react";
import Button from "../common/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="flex items-center w-full px-8"
    >
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Left side */}
        <div className="flex flex-col justify-center space-y-2">
          <div>
            <h2 className="text-[2.5rem] font-bold tracking-wide">
              I&apos;m <span>Ravikant Waghmare</span>
            </h2>
            <h4 className="text-[2.5rem] font-bold tracking-wide">
              Software Engineer
            </h4>
          </div>
          <p className="text-lg max-w-xl leading-relaxed">
            I craft high-performance, SEO-optimized web applications with React,
            Redux, Next.js, Node.js, and Spring Boot. Skilled in building
            secure, scalable solutions with RDBMS, REST APIs and DevOps
            practices.
          </p>
          <div className="pt-2">
            <Button icon={<Download />}>Download Resume</Button>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex justify-center items-center">
          {/* Blurred circle behind */}
          <div
            className="absolute rounded-full bg-indigo-600 opacity-40 blur-2xl"
            style={{
              width: 300,
              height: 300,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          />
          {/* Image */}
          <Image
            src="/image/portfolioHeaderImg.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="relative z-10 rounded-lg "
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
