import AboutMe from "@/components/landing/AboutMe";
import Certifications from "@/components/landing/Certifications";
import ContactMe from "@/components/landing/ContactMe";
import ExperienceTimeline from "@/components/landing/Experience";
import Hero from "@/components/landing/Hero";
import ProjectsShowcase from "@/components/landing/Projects";
import SceneBg from "@/components/landing/SceneBg";
import Services from "@/components/landing/Services";
import Skills from "@/components/landing/Skills";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import Writing from "@/components/landing/Writing";
import React from "react";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <SceneBg />
      <div className="relative z-[1]">
        <Hero />
        <Stats />
        <AboutMe />
        <Services />
        <Skills />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <Certifications />
        <Writing />
        <Testimonials />
        <ContactMe />
      </div>
    </div>
  );
};

export default page;
