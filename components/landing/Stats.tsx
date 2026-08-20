import React from "react";
import Reveal from "./Reveal";

const STATS = [
  { value: "3", suffix: "+ yrs", label: "Shipping production software" },
  { value: "30", suffix: "%", label: "Lift in user engagement" },
  { value: "50", suffix: "%", label: "Less manual processing via AI automation" },
  { value: "35", suffix: "%", label: "Code duplication removed with TurboRepo" },
];

const Stats = () => {
  return (
    <section className="px-[22px] pb-[84px]">
      <div
        className="max-w-[1180px] mx-auto rounded-[14px] border grid grid-cols-2 md:grid-cols-4"
        style={{
          borderColor: "var(--pg-line)",
          background: "linear-gradient(180deg,var(--pg-surface-2),var(--pg-bg2))",
        }}
      >
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className="px-[22px] py-[26px] border-[var(--pg-line)]"
            style={i < STATS.length - 1 ? { borderRightWidth: 1, borderRightStyle: "solid" } : undefined}
          >
            <div
              className="font-semibold tracking-[-0.02em] text-[var(--pg-accent)]"
              style={{ fontSize: "clamp(26px,3.4vw,38px)" }}
            >
              {s.value}
              <span className="text-[0.6em]">{s.suffix}</span>
            </div>
            <div className="text-[13px] mt-1 text-[var(--pg-muted)]">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Stats;
