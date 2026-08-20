export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  liveDemo: string;
};

export const projects: Project[] = [
  {
    title: "Personal portfolio",
    description:
      "This site's predecessor — an animated Next.js portfolio with dark mode, a blog engine, contact mailer and SEO-tuned static generation.",
    image: "/image/portfolio.png",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/raviw45/portfolio-ravi",
    liveDemo: "https://ravikantwaghmare.info",
  },
  {
    title: "Mediastock — image storage app",
    description:
      "Next.js app with NextAuth authentication, Cloudinary media storage, Razorpay payments and server-side rendering.",
    image: "/image/mediastock.png",
    tags: ["Next.js", "Cloudinary", "Razorpay"],
    github: "https://github.com/raviw45/image-comm",
    liveDemo: "https://mediastock.vercel.app/",
  },
  {
    title: "ISP lead-generation website",
    description:
      "Static marketing site for an internet service provider, built in Next.js with Framer Motion and a lead-capture flow feeding live applications.",
    image: "/image/w2c1.png",
    tags: ["Next.js", "Framer Motion"],
    github: "https://github.com/raviw45/wired2communication",
    liveDemo: "https://www.wired2communication.com/",
  },
  {
    title: "Contact Manager",
    description:
      "Spring Boot application with Thymeleaf views, Spring Security authentication, Hibernate over PostgreSQL and a Dockerised deployment.",
    image: "/image/contactmanager.png",
    tags: ["Java", "Spring Boot", "Docker"],
    github: "https://github.com/raviw45/contact-manager",
    liveDemo: "https://contact-manager-0ro5.onrender.com/",
  },
  {
    title: "Live food-delivery API integration",
    description:
      "React front end bundled with Parcel, consuming real-time restaurant APIs with client-side routing, shimmer states and cart handling.",
    image: "/image/swiggy1.png",
    tags: ["React", "Parcel"],
    github: "https://github.com/raviw45/swiggy-ui-clone",
    liveDemo: "https://swiggy-ui-project.vercel.app/",
  },
];
