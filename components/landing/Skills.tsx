"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { SKILLS, SKILL_TABS, SkillTabId } from "@/data/Skills";
import Reveal from "./Reveal";

const Skills = () => {
  const [tab, setTab] = useState<SkillTabId>("ai");

  return (
    <section id="skills" className="relative px-[22px] pb-24 overflow-visible">
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-20 w-[360px] h-[360px] pointer-events-none pg-motion-safe"
        style={{
          background: "radial-gradient(circle,var(--pg-glow),transparent 70%)",
          filter: "blur(40px)",
          borderRadius: "44% 56% 62% 38%/48% 42% 58% 52%",
          animation: "pg-blob-drift 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 w-[300px] h-[300px] pointer-events-none pg-motion-safe"
        style={{
          background: "radial-gradient(circle,var(--pg-glow),transparent 72%)",
          filter: "blur(46px)",
          borderRadius: "58% 42% 40% 60%/62% 48% 52% 38%",
          animation: "pg-blob-drift 20s ease-in-out infinite reverse",
        }}
      />

      <div className="max-w-[1180px] mx-auto relative">
        <Reveal className="flex items-center gap-3 mb-[26px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span className="text-xs uppercase text-[var(--pg-faint)]" style={{ letterSpacing: ".14em" }}>
            Skills
          </span>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-6">
          {SKILL_TABS.map((t) => {
            const active = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className="px-[17px] py-[9px] rounded-full text-sm font-medium transition-all border"
                style={{
                  borderColor: active ? "var(--pg-accent)" : "var(--pg-line)",
                  background: active ? "var(--pg-accent-soft)" : "transparent",
                  color: active ? "var(--pg-accent)" : "var(--pg-muted)",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </Reveal>

        <div className="flex flex-col gap-[30px] min-h-[260px]">
          {SKILLS[tab].map((grp) => (
            <div key={grp.title}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-[3px] h-[18px] rounded-sm flex-none bg-[var(--pg-accent)]" />
                <h3 className="text-[15px] font-semibold tracking-[.02em]">{grp.title}</h3>
                <span
                  className="font-mono text-[11.5px] px-2 py-[3px] rounded-full border text-[var(--pg-faint)]"
                  style={{ borderColor: "var(--pg-line)" }}
                >
                  {String(grp.items.length).padStart(2, "0")}
                </span>
                <span className="flex-1 h-px bg-[var(--pg-line)]" />
              </div>
              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))" }}>
                {grp.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-3 px-3.5 py-[22px] border transition-all duration-300 ease-out hover:-translate-y-1 hover:rotate-[-1.2deg] hover:scale-105 hover:border-[var(--pg-accent)]"
                    style={{
                      borderColor: "var(--pg-line)",
                      background: "var(--pg-surface-2)",
                      borderRadius: "28px 18px 28px 18px",
                      boxShadow: "var(--pg-shadow)",
                    }}
                  >
                    <span className="h-[42px] flex items-center justify-center text-[var(--pg-accent)]">
                      {skill.icon ? (
                        <skill.icon size={38} style={{ color: skill.color }} />
                      ) : (
                        <Sparkles size={34} />
                      )}
                    </span>
                    <span className="text-[14.5px] font-semibold text-center leading-[1.35] text-[var(--pg-text)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
