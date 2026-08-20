import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAws, FaJenkins, FaJira, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiAntdesign,
  SiMui,
  SiFramer,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiVercel,
  SiGithubactions,
  SiTurborepo,
  SiGit,
  SiPostman,
  SiOpenai,
  SiClaude,
  SiLangchain,
} from "react-icons/si";

export type Skill = { name: string; icon?: IconType; color?: string };
export type SkillGroup = { title: string; items: Skill[] };
export type SkillTabId = "ai" | "fe" | "be" | "ops";

const b = (name: string, icon: IconType, color: string): Skill => ({ name, icon, color });
const g = (name: string): Skill => ({ name });

export const SKILL_TABS: { id: SkillTabId; label: string }[] = [
  { id: "ai", label: "AI & Agentic" },
  { id: "fe", label: "Frontend" },
  { id: "be", label: "Backend & Data" },
  { id: "ops", label: "Cloud & DevOps" },
];

export const SKILLS: Record<SkillTabId, SkillGroup[]> = {
  ai: [
    {
      title: "Models & LLMs",
      items: [
        b("OpenAI", SiOpenai, "#9397ab"),
        b("Claude — Sonnet", SiClaude, "#d97757"),
        b("Claude — Opus", SiClaude, "#d97757"),
        b("Claude — Haiku", SiClaude, "#d97757"),
      ],
    },
    {
      title: "Techniques & tooling",
      items: [
        g("Agentic AI"),
        g("RAG pipelines"),
        b("LangChain", SiLangchain, "#9184d9"),
        g("Vector databases"),
        g("Prompt engineering"),
        g("MCP servers"),
        g("Cursor AI"),
      ],
    },
  ],
  fe: [
    {
      title: "Core languages",
      items: [
        b("HTML", FaHtml5, "#E34F26"),
        b("CSS", FaCss3Alt, "#1572B6"),
        b("JavaScript", FaJs, "#F7DF1E"),
        b("TypeScript", SiTypescript, "#3178C6"),
      ],
    },
    {
      title: "UI libraries & frameworks",
      items: [
        b("React.js", FaReact, "#61DAFB"),
        b("Next.js", SiNextdotjs, "#9397ab"),
        b("Redux", SiRedux, "#764ABC"),
        b("Tailwind CSS", SiTailwindcss, "#38BDF8"),
        b("shadcn/ui", SiShadcnui, "#9397ab"),
        b("Ant Design", SiAntdesign, "#0170FE"),
        b("Material UI", SiMui, "#007FFF"),
        b("Framer Motion", SiFramer, "#b5abfc"),
        b("GraphQL", SiGraphql, "#E535AB"),
      ],
    },
  ],
  be: [
    {
      title: "Runtimes & frameworks",
      items: [
        b("Node.js", SiNodedotjs, "#339933"),
        b("Express.js", SiExpress, "#9397ab"),
        b("Spring Boot", SiSpringboot, "#6DB33F"),
        b("Hibernate", SiHibernate, "#59666C"),
        b("Prisma", SiPrisma, "#b5abfc"),
      ],
    },
    {
      title: "Databases & concepts",
      items: [
        b("PostgreSQL", SiPostgresql, "#4169E1"),
        b("MongoDB", SiMongodb, "#47A248"),
        b("MySQL", SiMysql, "#4479A1"),
        b("Redis", SiRedis, "#DC382D"),
        g("REST APIs"),
        g("Microservices"),
        g("JWT & RBAC"),
      ],
    },
  ],
  ops: [
    {
      title: "Cloud & containers",
      items: [
        b("AWS", FaAws, "#FF9900"),
        b("Docker", FaDocker, "#2496ED"),
        b("Kubernetes", SiKubernetes, "#326CE5"),
        b("Vercel", SiVercel, "#9397ab"),
      ],
    },
    {
      title: "CI/CD & collaboration",
      items: [
        b("GitHub Actions", SiGithubactions, "#2088FF"),
        g("Azure DevOps"),
        b("Jenkins", FaJenkins, "#D24939"),
        b("TurboRepo", SiTurborepo, "#EF4444"),
        b("Git", SiGit, "#F05032"),
        b("Jira", FaJira, "#0052CC"),
        b("Postman", SiPostman, "#FF6C37"),
      ],
    },
  ],
};
