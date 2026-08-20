import React from "react";
import { LayoutTemplate, Sparkles, Cloud } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "Product front-ends",
    description:
      "Responsive, accessible interfaces in React, Next.js, Tailwind and ShadCN UI — dashboards, onboarding flows and design-system packages that stay maintainable.",
  },
  {
    icon: Sparkles,
    title: "AI & agentic workflows",
    description:
      "RAG pipelines over vector databases, OpenAI and Claude integrations through MCP servers, and prompt engineering that automates real operational work.",
  },
  {
    icon: Cloud,
    title: "APIs, cloud & delivery",
    description:
      "REST services in Node.js and Spring Boot, PostgreSQL/Prisma data layers, Docker and Kubernetes, and GitHub Actions pipelines shipping to AWS.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-[22px] pb-24">
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-[26px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span
            className="text-xs uppercase text-[var(--pg-faint)]"
            style={{ letterSpacing: ".14em" }}
          >
            What I do
          </span>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="p-6 rounded-2xl border transition-transform hover:-translate-y-1 hover:border-[var(--pg-accent)]"
              style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
            >
              <div className="mb-3 text-[var(--pg-accent)]">
                <Icon size={24} />
              </div>
              <h3 className="text-[17px] font-semibold mb-2">{title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-[var(--pg-muted)]">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
