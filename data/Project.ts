import { FaReact, FaJava, FaAws, FaBoxOpen } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiCloudinary,
  SiRazorpay,
  SiThymeleaf,
  SiSpringsecurity,
  SiDocker,
  SiAuth0,
  SiFramer,
} from "react-icons/si";
export const skillColors: Record<string, string> = {
  FaReact: "#61DAFB",
  SiNextdotjs: "#000000",
  SiNodedotjs: "#339933",
  SiRedux: "#764ABC",
  FaJava: "#007396",
  SiSpringboot: "#6DB33F",
  FaAws: "#FF9900",
  SiCloudinary: "#3300FF",
  SiRazorpay: "#002970",
  SiSpringsecurity: "#6DB33F",
  SiDocker: "#2496ED",
  SiAuth0: "#EB5424",
  SiFramer: "#0055FF",
  SiThymeleaf: "#005F0F",
  FaBoxOpen: "#a87b32",
};
export const projects = [
  {
    title: "Portfolio: Ravikant Waghmare",
    description:
      "A modern and animated portfolio built with Next.js and Framer Motion to showcase my skills, projects, and contact info.",
    images: [
      "/image/portfolio.png",
      "/image/portfolio1.png",
      "/image/portfolio2.png",
    ],
    github: "https://github.com/raviw45/portfolio-ravi",
    liveDemo: "https://ravikantwaghmare.info",
    skills: [SiNextdotjs, FaReact, SiFramer],
  },
  {
    title: "Swiggy Real API Integration",
    description:
      "Integration of Swiggy’s real-time APIs into a custom React.js frontend using Parcel bundler. ⚠️ Note: Use a CORS browser extension to run this project locally.",
    images: ["/image/swiggy1.png", "/image/swiggy2.png", "/image/swiggy3.png"],
    github: "https://github.com/raviw45/swiggy-ui-clone",
    liveDemo: "https://swiggy-ui-project.vercel.app/",
    skills: [FaReact, FaBoxOpen],
  },
  {
    title: "Mediastock: Image Storage App",
    description:
      "Next.js app with secure auth (NextAuth), Cloudinary image storage, Razorpay payment integration, and server-side rendering.",
    images: [
      "/image/mediastock.png",
      "/image/mediastock1.png",
      "/image/mediastock2.png",
      "/image/mediastock3.png",
    ],
    github: "https://github.com/raviw45/image-comm",
    liveDemo: "https://mediastock.vercel.app/",
    skills: [SiNextdotjs, SiCloudinary, SiRazorpay, FaAws, SiAuth0],
  },
  {
    title: "ISP Static Website for Lead Generation",
    description:
      "A modern static website for an Internet Service Provider company built using Next.js and Framer Motion. Designed to collect customer leads for real-time applications.",
    images: [
      "/image/w2c1.png",
      "/image/w2c2.png",
      "/image/w2c3.png",
      "/image/w2c4.png",
    ],
    github: "https://github.com/raviw45/wired2communication",
    liveDemo: "https://www.wired2communication.com/",
    skills: [SiNextdotjs, SiFramer],
  },
  {
    title: "Contact Manager: Secure Contact Management",
    description:
      "Spring Boot app with Thymeleaf front-end, Spring Security for auth, Hibernate, PostgreSQL, Dockerized deployment.",
    images: ["/image/contactmanager.png"],
    github: "https://github.com/raviw45/contact-manager",
    liveDemo: "https://contact-manager-0ro5.onrender.com/",
    skills: [FaJava, SiSpringboot, SiThymeleaf, SiSpringsecurity, SiDocker],
  },
];
