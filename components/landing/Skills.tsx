"use client";

import React, { useState } from "react";
import Frontend from "./MySkills/Frontend";
import Backend from "./MySkills/Backend";

import DevOps from "./MySkills/DevOps";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 1, name: "Frontend", component: <Frontend /> },
    { id: 2, name: "Backend", component: <Backend /> },
    { id: 3, name: "DevOps", component: <DevOps /> },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="md:py-20 py-8 scroll-mt-20"
    >
      <div className="w-[95%] md:w-[85%] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                index === activeTab
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="transition-all duration-500">{ActiveTabComponent}</div>
      </div>
    </section>
  );
};

export default Skills;
