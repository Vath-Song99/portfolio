import React from "react";

interface ExperienceProps {
  theme: string;
}

const Experience = ({ theme }: ExperienceProps) => {
  return (
    <>
      <section>{theme}</section>
    </>
  );
};

export { Experience };
