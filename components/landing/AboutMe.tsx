"use client";

import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const INFO_CARDS = [
  { label: "Currently", value: "Software Engineer, Traveazy Group — Pune" },
  { label: "Education", value: "PG-DAC, CDAC Bengaluru · B.E., T.P.C.T's COE" },
  { label: "Award", value: "Team of the Quarter — engineering impact" },
  { label: "Based in", value: "Hadapsar, Pune · open to hybrid & remote" },
];

const AboutMe = () => {
  return (
    <section id="about" className="px-[22px] pb-24">
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-[26px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span
            className="text-xs uppercase text-[var(--pg-faint)]"
            style={{ letterSpacing: ".14em" }}
          >
            About
          </span>
        </Reveal>

        <div className="grid md:grid-cols-[300px_minmax(0,1fr)] gap-12 items-start">
          <Reveal
            className="relative w-full max-w-[300px] mx-auto pg-motion-safe"
            style={{ animation: "pg-floaty 7s ease-in-out infinite" }}
          >
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--pg-line)", boxShadow: "var(--pg-shadow-lift)" }}
            >
              <Image
                src="/image/profile.jpg"
                alt="Ravikant Waghmare"
                width={300}
                height={324}
                className="w-full block object-cover"
                style={{ aspectRatio: "1/1.08" }}
              />
            </div>
            <div className="mt-4 flex gap-2.5">
              <a
                href="https://github.com/raviw45"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-[9px] rounded-lg border text-[13px] transition-colors hover:text-[var(--pg-accent)] hover:border-[var(--pg-accent)]"
                style={{ borderColor: "var(--pg-line)", color: "var(--pg-text)" }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ravikant-waghmare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-[9px] rounded-lg border text-[13px] transition-colors hover:text-[var(--pg-accent)] hover:border-[var(--pg-accent)]"
                style={{ borderColor: "var(--pg-line)", color: "var(--pg-text)" }}
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2
                className="font-semibold tracking-[-0.025em] mb-4"
                style={{ fontSize: "clamp(26px,3.4vw,36px)" }}
              >
                Engineer who ships — front to back, prompt to production.
              </h2>
            </Reveal>
            <Reveal className="text-base leading-[1.7] max-w-[64ch] mb-3.5 text-[var(--pg-muted)]">
              I&apos;m a Full Stack Software Engineer in Pune, currently at{" "}
              <strong className="font-semibold text-[var(--pg-text)]">Traveazy Group</strong>,
              building a multi-tenant travel SaaS platform in Next.js and TypeScript. Before
              that I spent two years at Vionsys IT Solutions delivering CRM, educational and
              construction platforms end to end.
            </Reveal>
            <Reveal className="text-base leading-[1.7] max-w-[64ch] mb-[26px] text-[var(--pg-muted)]">
              Most of my recent work sits where product engineering meets applied AI: Agentic
              workflows, RAG pipelines over vector stores, and LLM integrations through MCP
              servers — wired into real user-facing features rather than demos.
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {INFO_CARDS.map((card, i) => (
                <Reveal
                  key={card.label}
                  delay={i * 0.05}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
                >
                  <div
                    className="text-xs uppercase mb-1.5 text-[var(--pg-faint)]"
                    style={{ letterSpacing: ".1em" }}
                  >
                    {card.label}
                  </div>
                  <div className="text-[14.5px] leading-[1.5] text-[var(--pg-text)]">
                    {card.value}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
