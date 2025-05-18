"use client";

import React from "react";
import { DiJava } from "react-icons/di";
import {
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiAuth0,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ReactElement;
};

const backendSkills: Skill[] = [
  { name: "Java", icon: <DiJava className="text-red-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
  { name: "Hibernate", icon: <SiHibernate className="text-gray-700" /> },
  {
    name: "NextAuth",
    icon: <SiAuth0 className="text-black dark:text-white" />,
  },
  { name: "Mongoose", icon: <SiMongodb className="text-green-500" /> },
  { name: "Prisma", icon: <SiPrisma className="text-blue-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
];

const dbmsSkills: Skill[] = [
  { name: "SQL", icon: <FaDatabase className="text-purple-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
];

const SkillGrid = ({
  title,
  skills,
  color,
}: {
  title: string;
  skills: Skill[];
  color: string;
}) => (
  <div className="w-full mb-12">
    {/* Section Title */}
    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-5 relative inline-block">
      {title}
      <span
        className={`absolute left-0 -bottom-2 w-20 h-1 bg-gradient-to-r ${color} rounded-full`}
      ></span>
    </h3>

    {/* Skill Cards Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-fadeInUp w-full">
      {skills.map(({ name, icon }) => (
        <div
          key={name}
          className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md dark:shadow-lg cursor-default group
                     hover:shadow-indigo-400/50 hover:scale-[1.08] transition-transform duration-300 ease-in-out ring-2 ring-indigo-200"
          title={name}
          tabIndex={0}
        >
          <div className="text-5xl sm:text-6xl text-center text-opacity-90 group-hover:text-opacity-100 drop-shadow-md">
            {icon}
          </div>
          <span className="mt-3 text-base font-semibold text-gray-700 dark:text-gray-300 select-none">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Backend: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-4 max-w-7xl mx-auto">
      {/* Backend Skills */}
      <SkillGrid
        title="Backend Skills"
        skills={backendSkills}
        color="from-indigo-400 to-fuchsia-600"
      />

      {/* DBMS Skills */}
      <SkillGrid
        title="DBMS Skills"
        skills={dbmsSkills}
        color="from-green-400 to-teal-500"
      />
    </section>
  );
};

export default Backend;
