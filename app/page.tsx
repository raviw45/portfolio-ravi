import AboutMe from "@/components/landing/AboutMe";
import Certifications from "@/components/landing/Certifications";
import ContactMe from "@/components/landing/ContactMe";
import ExperienceTimeline from "@/components/landing/Experience";
import Hero from "@/components/landing/Hero";
import ProjectsShowcase from "@/components/landing/Projects";
import Skills from "@/components/landing/Skills";
import Testimonials from "@/components/landing/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <Hero />
      <AboutMe />
      <Skills />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <Certifications />
      <Testimonials />
      <ContactMe />
    </div>
  );
};

export default page;
