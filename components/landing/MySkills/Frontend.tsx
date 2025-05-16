"use client";

import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiAntdesign,
  SiMui,
  SiFramer,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactElement;
  group: "core" | "library";
};

const skills: Skill[] = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    group: "core",
  },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, group: "core" },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    group: "core",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    group: "core",
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-cyan-500" />,
    group: "library",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
    group: "library",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-sky-500" />,
    group: "library",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600" />,
    group: "library",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign className="text-pink-600" />,
    group: "library",
  },
  {
    name: "Material UI",
    icon: <SiMui className="text-blue-700" />,
    group: "library",
  },
  {
    name: "Shadcn",
    icon: <SiShadcnui className="text-emerald-600" />,
    group: "library",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-fuchsia-600" />,
    group: "library",
  },
];

const Frontend: React.FC = () => {
  const grouped = {
    core: skills.filter((s) => s.group === "core"),
    library: skills.filter((s) => s.group === "library"),
  };

  return (
    <section className="px-6 py-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 dark:text-gray-100">
        Frontend Skills
      </h2>

      {(["core", "library"] as const).map((group) => (
        <div key={group} className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300 text-center">
            {group === "core" ? "Core Languages" : "UI Libraries & Frameworks"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {grouped[group].map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-5 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out 
                  hover:scale-105 
                  hover:shadow-xl
                  hover:ring-4
                  hover:ring-indigo-300
                  dark:hover:ring-indigo-600
                  cursor-pointer ring-1 ring-indigo-200"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <div className="text-md font-semibold text-gray-900 dark:text-gray-100">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Frontend;
