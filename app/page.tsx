import AboutMe from "@/components/landing/AboutMe";
import ContactMe from "@/components/landing/ContactMe";
import Hero from "@/components/landing/Hero";
import Skills from "@/components/landing/Skills";
import Testimonials from "@/components/landing/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <Hero />
      <AboutMe />
      <Skills />
      <Testimonials />
      <ContactMe />
    </div>
  );
};

export default page;
