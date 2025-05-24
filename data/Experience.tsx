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
      "Built secure REST APIs using Spring Boot, Spring Security, and Hibernate.",
      "Developed responsive UIs with React.js, Next.js, and managed state using Redux & React Query.",
      "Integrated Kafka and Redis for real-time processing and performance optimization.",
      "Deployed scalable apps on AWS (EC2, ECS, ECR, Amplify) using Docker and Jenkins CI/CD.",
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
      "Created dynamic UIs with React.js, Redux, and Tailwind CSS for cross-browser compatibility.",
      "Built modern landing pages with responsive design and pixel-perfect implementation.",
      "Followed security best practices to prevent XSS/CSRF and improve frontend performance.",
      "Collaborated on projects using Git, GitHub, and Jira in an agile environment.",
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
