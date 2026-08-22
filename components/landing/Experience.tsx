"use client";

import React from "react";
import { Check } from "lucide-react";
import { experience } from "@/data/Experience";
import Reveal from "./Reveal";

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative px-[22px] pb-24 overflow-visible">
      <div
        aria-hidden="true"
        className="absolute top-[10%] -right-10 w-[160px] h-[160px] min-[660px]:-right-16 min-[660px]:w-[250px] min-[660px]:h-[250px] min-[980px]:-right-24 min-[980px]:w-[340px] min-[980px]:h-[340px] pointer-events-none blur-[20px] min-[660px]:blur-[32px] min-[980px]:blur-[44px] pg-motion-safe"
        style={{
          background: "radial-gradient(circle,var(--pg-glow),transparent 70%)",
          borderRadius: "50% 50% 38% 62%/62% 38% 62% 38%",
          animation: "pg-blob-drift 22s ease-in-out infinite",
        }}
      />
      <div className="max-w-[1180px] mx-auto relative">
        <Reveal className="flex items-center gap-3 mb-[34px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span className="text-xs uppercase text-[var(--pg-faint)]" style={{ letterSpacing: ".14em" }}>
            Experience
          </span>
        </Reveal>

        <div className="flex flex-col gap-[26px]">
          {experience.map((role) => (
            <Reveal key={role.company} className="relative pl-[22px] min-[660px]:pl-[38px]">
              <span
                className="absolute left-0 top-0 bottom-[-26px] w-px"
                style={{ background: "linear-gradient(180deg,var(--pg-accent),var(--pg-line) 55%,transparent)" }}
              />
              <span
                className="absolute -left-[6px] top-[26px] w-[13px] h-[13px] rounded-full border-2"
                style={{
                  background: "var(--pg-bg)",
                  borderColor: "var(--pg-accent)",
                  boxShadow: "0 0 0 5px var(--pg-accent-soft)",
                }}
              />
              <div
                className="rounded-[28px_16px_28px_16px] border overflow-hidden backdrop-blur-[8px] transition-transform hover:-translate-y-1 hover:border-[var(--pg-accent)]"
                style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
              >
                <div
                  className="h-1"
                  style={{ background: "linear-gradient(90deg,var(--pg-accent),transparent 80%)" }}
                />
                <div className="px-6 pt-6 pb-[22px]">
                  <div className="flex flex-wrap items-start justify-between gap-3.5 mb-1.5">
                    <div className="flex items-center gap-[13px]">
                      <span
                        className="w-[42px] h-[42px] rounded-[11px] border flex items-center justify-center text-[15px] font-semibold flex-none text-[var(--pg-accent)]"
                        style={{ borderColor: "var(--pg-line)", background: "var(--pg-accent-soft)" }}
                      >
                        {role.initials}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em]">{role.title}</h3>
                        <div className="text-sm mt-[3px] text-[var(--pg-accent)]">{role.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[12.5px]">{role.dateRange}</div>
                      <div className="text-xs mt-[3px] text-[var(--pg-faint)]">{role.location}</div>
                    </div>
                  </div>
                  <p className="text-[15.5px] leading-[1.7] my-3 mb-[18px] max-w-[66ch] opacity-90">
                    {role.summary}
                  </p>
                  <div
                    className="grid grid-cols-1 min-[400px]:grid-cols-2 min-[660px]:grid-cols-4 gap-x-6 gap-y-4 py-4 mb-4 border-y"
                    style={{ borderColor: "var(--pg-line)" }}
                  >
                    {role.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-[22px] font-semibold tracking-[-0.02em] leading-[1.1] text-[var(--pg-accent)]">
                          {m.value}
                        </span>
                        <span
                          className="text-xs font-medium uppercase text-[var(--pg-muted)]"
                          style={{ letterSpacing: ".06em" }}
                        >
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ul className="flex flex-col gap-[11px] text-[15px] leading-[1.65] mb-[18px]">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2.5 items-start">
                        <Check size={14} className="flex-none mt-[5px] text-[var(--pg-accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-[7px]">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border text-[12.5px] font-medium"
                        style={{ borderColor: "var(--pg-line)", background: "var(--pg-bg2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
