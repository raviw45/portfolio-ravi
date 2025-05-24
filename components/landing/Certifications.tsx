"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../common/button";

const certifications = [
  {
    name: "Namaste React Course: Namastedev.com",
    image: "/certificates/certificate.webp",
  },
  {
    name: "Socon Application Testing",
    image: "/certificates/socon-app-testing.jpeg",
  },
  {
    name: "Udemy Jira Course",
    image: "/certificates/udemy-jira-certificate.jpg",
  },
  {
    name: "CDAC Course Completion",
    image: "/certificates/cdac-certificate.jpeg",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<null | (typeof certifications)[0]>(
    null
  );

  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="md:py-20 py-8 scroll-mt-20 overflow-x-hidden"
    >
      <div className="w-[95%] md:w-[85%] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => setSelected(cert)}
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white group-hover:shadow-lg">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain p-3 transition-all duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-indigo-600 font-semibold text-center text-sm sm:text-base">
                {cert.name}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white rounded-md shadow-lg w-[95vw] sm:w-[90vw] max-w-3xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[80vh] overflow-auto">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-t-md"
                />
              </div>
              <div className="p-4 text-center flex flex-col items-center">
                <p className="text-indigo-600 font-semibold">{selected.name}</p>
                <Button
                  onClick={() => setSelected(null)}
                  className="mt-4 text-sm text-center"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
