"use client";

import { testimonials } from "@/data/Testimonial";
import React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const Testimonials: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  React.useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  });

  return (
    <section id="testimonials" className="px-[22px] pb-24">
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-[26px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span className="text-xs uppercase text-[var(--pg-faint)]" style={{ letterSpacing: ".14em" }}>
            What colleagues say
          </span>
        </Reveal>

        <div className="relative mx-auto px-4 sm:px-6 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-2">
                <figure
                  className="max-w-xl mx-auto rounded-[14px] border p-6 sm:p-8 md:p-10 text-center"
                  style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
                >
                  <Quote size={28} className="mx-auto mb-4 text-[var(--pg-accent)]" />
                  <blockquote className="text-[15px] leading-[1.65] mb-6 text-[var(--pg-text)]">
                    &ldquo;{t.message}&rdquo;
                  </blockquote>
                  <figcaption className="text-[13px] text-[var(--pg-muted)]">
                    <strong className="font-semibold text-[var(--pg-text)]">{t.name}</strong> · {t.role}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full border transition-transform hover:scale-110 z-30"
            style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-[var(--pg-accent)]" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full border transition-transform hover:scale-110 z-30"
            style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-[var(--pg-accent)]" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => setCurrent(idx)}
                className="w-3.5 h-3.5 rounded-full transition-all duration-300"
                style={{
                  background: idx === current ? "var(--pg-accent)" : "var(--pg-line)",
                  transform: idx === current ? "scale(1.1)" : "scale(1)",
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
