import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import Reveal from "./Reveal";

const CERTS = [
  {
    image: "/certificates/cdac-certificate.jpeg",
    title: "PG-DAC",
    subtitle: "CDAC Bengaluru · 2023",
  },
  {
    image: "/certificates/udemy-jira-certificate.jpg",
    title: "Jira & Agile delivery",
    subtitle: "Udemy",
  },
  {
    image: "/certificates/socon-app-testing.jpeg",
    title: "Application testing",
    subtitle: "SoCon",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-[22px] pb-24">
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-[26px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span className="text-xs uppercase text-[var(--pg-faint)]" style={{ letterSpacing: ".14em" }}>
            Certifications &amp; awards
          </span>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 0.06}
              className="rounded-[14px] border overflow-hidden"
              style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
            >
              <div className="relative h-[150px]">
                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
              </div>
              <div className="p-3.5">
                <div className="text-[14.5px] font-semibold mb-[3px]">{cert.title}</div>
                <div className="text-[13px] text-[var(--pg-muted)]">{cert.subtitle}</div>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={CERTS.length * 0.06}
            className="rounded-[14px] border p-5 flex flex-col justify-center"
            style={{
              borderColor: "var(--pg-line)",
              background: "linear-gradient(150deg,var(--pg-accent-soft),var(--pg-surface-2))",
            }}
          >
            <div className="mb-2.5 text-[var(--pg-accent)]">
              <Award size={26} />
            </div>
            <div className="text-[15px] font-semibold mb-1">Team of the Quarter</div>
            <div className="text-[13px] leading-[1.5] text-[var(--pg-muted)]">
              Awarded for engineering contribution and delivery impact at Vionsys IT Solutions.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
