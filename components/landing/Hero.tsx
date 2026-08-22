"use client";

import React, { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TechOrb = dynamic(() => import("./TechOrb"), { ssr: false });

const WORDS = [
  "Full Stack Software Engineer",
  "Agentic AI & RAG Systems",
  "React · Next.js · TypeScript",
  "Node.js · Spring Boot · AWS",
];

const CHIPS = ["React", "Next.js", "TypeScript", "Node.js", "Spring Boot", "LangChain / RAG", "AWS"];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function useTypedLoop(words: string[]) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let w = 0;
    let i = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const step = () => {
      const word = words[w];
      if (!deleting) {
        i++;
        if (i > word.length) {
          deleting = true;
          setTyped(word);
          timeout = setTimeout(step, 1600);
          return;
        }
      } else {
        i--;
        if (i <= 0) {
          deleting = false;
          w = (w + 1) % words.length;
          i = 0;
        }
      }
      setTyped(word.slice(0, i));
      timeout = setTimeout(step, deleting ? 34 : 62);
    };

    timeout = setTimeout(step, 400);
    return () => clearTimeout(timeout);
  }, [words]);

  return typed;
}

const Hero = () => {
  const typed = useTypedLoop(WORDS);

  return (
    <section id="top" className="relative pt-[132px] pb-[84px] px-[22px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-40 -right-28 w-[620px] h-[620px] rounded-full pg-motion-safe"
          style={{
            background: "radial-gradient(circle, var(--pg-glow), transparent 68%)",
            filter: "blur(30px)",
            animation: "pg-drift 18s ease-in-out infinite",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-[1180px] mx-auto relative grid grid-cols-1 min-[980px]:grid-cols-[1.05fr_0.95fr] gap-8 min-[980px]:gap-12 items-center"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-[9px] px-[13px] py-1.5 rounded-full border text-[12.5px] mb-[22px]"
            style={{
              borderColor: "var(--pg-line)",
              background: "var(--pg-accent-soft)",
              color: "var(--pg-accent-ink)",
              letterSpacing: ".02em",
            }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full"
              style={{ background: "#4ec98a", boxShadow: "0 0 0 3px rgba(78,201,138,.18)" }}
            />
            Open to Full Stack / AI engineering roles
          </motion.div>

          <motion.h1
            variants={item}
            className="font-semibold tracking-[-0.03em] leading-[1.05] mb-3.5"
            style={{ fontSize: "clamp(34px,5vw,58px)" }}
          >
            Ravikant Waghmare
          </motion.h1>

          <motion.div
            variants={item}
            className="font-mono mb-5 min-h-[1.6em] text-[var(--pg-accent)]"
            style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "clamp(15px,2.1vw,21px)" }}
          >
            <span className="text-[var(--pg-faint)]">&gt;&nbsp;</span>
            {typed}
            <span
              className="inline-block w-[9px] ml-[3px] align-[-2px] bg-[var(--pg-accent)]"
              style={{ height: "1.05em", animation: "pg-caret 1s step-end infinite" }}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="text-[16.5px] leading-[1.65] max-w-[56ch] mb-[26px] text-[var(--pg-muted)]"
          >
            Full Stack Software Engineer with{" "}
            <strong className="font-semibold text-[var(--pg-text)]">3+ years</strong> shipping
            AI-powered SaaS in React, Next.js, Node.js and TypeScript. I build Agentic AI
            workflows and RAG pipelines with LangChain and OpenAI, architect TurboRepo
            monorepos, and deploy on AWS.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-7">
            <a
              href="/Ravikant_Waghmare_Resume.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 px-5 py-[11px] rounded-lg border text-[14.5px] font-medium transition-colors hover:bg-[var(--pg-accent-soft)] hover:text-[var(--pg-accent-ink)]"
              style={{ borderColor: "var(--pg-accent)", color: "var(--pg-accent)" }}
            >
              <Download size={17} /> Download CV
            </a>
            <a
              href="mailto:ravikantwaghmare82@gmail.com"
              className="inline-flex min-h-11 items-center gap-2 px-5 py-[11px] rounded-lg border text-[14.5px] font-medium transition-colors hover:text-[var(--pg-accent)] hover:border-[var(--pg-accent)]"
              style={{ borderColor: "var(--pg-line)", color: "var(--pg-text)" }}
            >
              <Mail size={17} /> Get in touch
            </a>
            <a
              href="https://github.com/raviw45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 px-5 py-[11px] rounded-lg border text-[14.5px] font-medium transition-colors hover:text-[var(--pg-accent)] hover:border-[var(--pg-accent)]"
              style={{ borderColor: "var(--pg-line)", color: "var(--pg-text)" }}
            >
              GitHub
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-[11px] py-[5px] rounded-full border text-[12.5px] text-[var(--pg-muted)]"
                style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative flex items-center justify-center min-h-[300px] min-[660px]:min-h-[340px] min-[980px]:min-h-[420px]"
        >
          <div
            aria-hidden="true"
            className="absolute rounded-full pointer-events-none pg-motion-safe"
            style={{
              width: "min(78%,420px)",
              aspectRatio: "1",
              border: "1px solid var(--pg-line)",
              borderTopColor: "var(--pg-accent)",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              animation: "pg-ring 22s linear infinite",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full pointer-events-none pg-motion-safe"
            style={{
              width: "min(58%,320px)",
              aspectRatio: "1",
              border: "1px dashed var(--pg-line)",
              animation: "pg-ring 34s linear infinite reverse",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full pointer-events-none pg-motion-safe"
            style={{
              width: "min(64%,340px)",
              aspectRatio: "1",
              background: "radial-gradient(circle,var(--pg-glow),transparent 66%)",
              filter: "blur(18px)",
              animation: "pg-pulse 6s ease-in-out infinite",
            }}
          />
          <div className="w-full h-[300px] min-[660px]:h-[340px] min-[980px]:h-[440px]">
            <TechOrb />
          </div>
          <div
            className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[11.5px] uppercase pointer-events-none text-[var(--pg-faint)]"
            style={{ letterSpacing: ".06em" }}
          >
            Drag to rotate the stack
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
