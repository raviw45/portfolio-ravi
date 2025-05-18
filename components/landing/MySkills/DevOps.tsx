"use client";

import React from "react";
import { FaDocker, FaAws, FaJenkins, FaJira } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

type DevOpsSkill = {
  name: string;
  icon: React.ReactElement<{ color?: string }>;
  description?: string;
  color: string;
};

const devOpsSkills: DevOpsSkill[] = [
  {
    name: "Docker",
    icon: <FaDocker />,
    description: "Containerization platform",
    color: "#2563EB",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    description: "Container orchestration",
    color: "#1E40AF",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    description: "CI/CD automation",
    color: "#B91C1C",
  },
  {
    name: "Jira",
    icon: <FaJira />,
    description: "Project & issue tracking",
    color: "#1E40AF",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    description: "Cloud platform (ECR, EC2, ECS, Amplify, Route53)",
    color: "#EA580C",
  },
];

const DevOps: React.FC = () => {
  const itemCount = devOpsSkills.length;

  const getRadius = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 400) return 90;
      if (window.innerWidth < 640) return 120;
      return 140;
    }
    return 140;
  };

  const [radius, setRadius] = React.useState(getRadius());
  const center = radius + 10;

  React.useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-6 max-w-md mx-auto">
      <h2 className="text-center text-4xl font-extrabold mb-18 text-gray-900 dark:text-gray-100">
        DevOps Skills
      </h2>

      <div
        className="relative mx-auto rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-300 dark:from-indigo-900 dark:to-indigo-700"
        style={{ width: 2 * center, height: 2 * center }}
      >
        {/* Central label */}
        <div
          className="absolute rounded-full bg-white dark:bg-gray-900 shadow-xl
            flex flex-col items-center justify-center
            w-32 h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            text-indigo-700 dark:text-indigo-300 font-bold text-lg"
        >
          <FaAws className="text-6xl mb-2" color="#EA580C" />
          DevOps
        </div>

        {/* Circular items */}
        {devOpsSkills.map(({ name, icon, description, color }, i) => {
          const angle = (360 / itemCount) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);

          return (
            <div
              key={name}
              className="absolute flex flex-col items-center w-28 sm:w-32 select-none"
              style={{
                left: x - 56,
                top: y - 56,
              }}
            >
              <div
                className="relative rounded-full p-5 shadow-lg cursor-pointer
                  flex items-center justify-center text-4xl
                  transition-transform duration-300
                  bg-white dark:bg-gray-900
                  hover:scale-110 group"
                style={{
                  boxShadow: `0 0 15px 3px ${color}55`,
                }}
              >
                {React.cloneElement(icon, { color: color })}

                {description && (
                  <div
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                      px-3 py-1 rounded-md text-xs whitespace-nowrap
                      bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900
                      opacity-0 pointer-events-none
                      transition-opacity duration-300
                      group-hover:opacity-100"
                    style={{ zIndex: 50 }}
                  >
                    {description}
                    <svg
                      className="absolute top-full left-1/2 -translate-x-1/2"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L5 5L10 0H0Z" fill="currentColor" />
                    </svg>
                  </div>
                )}
              </div>

              <h3
                className="mt-3 text-center font-semibold
                  text-gray-900 dark:text-gray-100"
              >
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevOps;
