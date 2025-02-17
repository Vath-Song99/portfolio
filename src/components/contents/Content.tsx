import React from "react";
import { Description } from "./Description";
import { motion } from "motion/react";

interface ContentProps {
  theme: string;
}

const Content = ({ theme }: ContentProps) => {
  return (
    <main className="min-h-screen py-16 md:py-32 px-6 sm:px-0 justify-start items-center max-w-xl mx-auto flex w-full flex-col gap-3">
      <motion.div
         initial={{ opacity: 0, y: 30 }} // Slightly less offset for a smoother start
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -30 }} // Reduced offset on exit
         transition={{
           duration: 0.8, // Extended duration for a softer animation
           ease: [0.43, 0.13, 0.23, 0.96] // Custom easing curve for smooth transitions
         }}
      >
        <Description theme={theme}></Description>
      </motion.div>
    </main>
  );
};

export { Content };
