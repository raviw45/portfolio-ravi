"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/Project";
import Reveal from "./Reveal";

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="px-[22px] pb-24">
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-5 mb-[26px]">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
              <span className="text-xs uppercase text-[var(--pg-faint)]" style={{ letterSpacing: ".14em" }}>
                Projects
              </span>
            </div>
            <h2 className="font-semibold tracking-[-0.025em]" style={{ fontSize: "clamp(24px,3vw,32px)" }}>
              Selected work
            </h2>
          </div>
          <a
            href="https://github.com/raviw45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-1 text-[var(--pg-accent)]"
          >
            All repositories <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.05}
              className="rounded-[14px] border overflow-hidden flex flex-col transition-transform hover:-translate-y-1.5 hover:border-[var(--pg-accent)]"
              style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
            >
              <div className="h-[152px] overflow-hidden border-b relative" style={{ borderColor: "var(--pg-line)" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-[18px] flex flex-col gap-2 flex-1">
                <h3 className="text-[16.5px] font-semibold">{project.title}</h3>
                <p className="text-sm leading-[1.6] flex-1 text-[var(--pg-muted)]">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11.5px]"
                      style={{ background: "var(--pg-accent-soft)", color: "var(--pg-accent-ink)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3.5 text-[13px] pt-0.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--pg-accent)]"
                  >
                    Code <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--pg-accent)]"
                  >
                    Live <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
