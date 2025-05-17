import { FaBriefcase, FaJava, FaReact, FaAws } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiApachekafka,
  SiRedis,
  SiNodedotjs,
} from "react-icons/si";
export const timelineData = [
  {
    title: "Software Engineer",
    company: "Vionsys IT Solutions India Pvt. Ltd.",
    date: "April 2024 – Present",
    location: "Pune, India",
    icon: <FaBriefcase className="text-white text-lg" />,
    points: [
      "Built secure REST APIs with Spring Boot & Hibernate.",
      "Created responsive UIs with React.js & Next.js.",
      "Integrated Kafka, Redis, and AWS for scale & performance.",
    ],
    skills: [
      { Icon: FaReact, color: "#61DAFB" },
      { Icon: SiNextdotjs, color: "#000000" },
      { Icon: SiNodedotjs, color: "#339933" },
      { Icon: FaJava, color: "#007396" },
      { Icon: SiSpringboot, color: "#6DB33F" },
      { Icon: SiApachekafka, color: "#231F20" },
      { Icon: SiRedis, color: "#DC382D" },
      { Icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    title: "Web Development Intern",
    company: "Vionsys IT Solutions India Pvt. Ltd.",
    date: "Feb 2024 – April 2024",
    location: "Pune, India",
    icon: <FaBriefcase className="text-white text-lg" />,
    points: [
      "Developed dynamic UIs using React, Redux & Tailwind.",
      "Enhanced performance and security with best practices.",
      "Built pixel-perfect cross-browser UI components.",
    ],
    skills: [
      { Icon: FaReact, color: "#61DAFB" },
      { Icon: SiNextdotjs, color: "#000000" },
      { Icon: SiNodedotjs, color: "#339933" },
      { Icon: SiRedux, color: "#764ABC" },
      { Icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
];
