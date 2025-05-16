import React from "react";

const AnimatedBlog = () => {
  return (
    <div className="absolute w-[250px] sm:w-[300px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[600px] animate-blob">
      <div
        className="absolute rounded-full bg-indigo-600 dark:bg-indigo-500 opacity-30 dark:opacity-40 blur-2xl"
        style={{
          width: 300,
          height: 300,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          animation: "pulse 8s infinite",
        }}
      />
      <div
        className="absolute rounded-full bg-purple-600 dark:bg-purple-500 opacity-30 dark:opacity-40 blur-2xl"
        style={{
          width: 250,
          height: 250,
          top: "40%",
          left: "40%",
          transform: "translate(-40%, -40%)",
          zIndex: 0,
          animation: "pulse 10s infinite 1s",
        }}
      />
    </div>
  );
};

export default AnimatedBlog;
