import { Database, Server } from "lucide-react";
import React from "react";
import {
  Card,
} from "../ui/Card";
interface ExperienceProps {
  theme: string;
}

const Experience = ({ theme }: ExperienceProps) => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Digital Government Committee",
      duration: "Nov 2024 - Present",
      description: [
        "Built scalable RESTful APIs using Node.js & Express.js.",
        "Optimized database queries in PostgreSQL.",
        "Implemented authentication with JWT & OAuth.",
      ],
      icon: <Server className="text-green-500 w-8 h-8" />,
    },
    {
      title: "Backend Intern",
      company: "Digital Government Committee",
      duration: "Aug - Nov 2024",
      description: [
        "Developed authentication systems using OAuth.",
        "Deployed microservices with Docker & Kubernetes.",
        "Worked with Redis caching for performance improvement.",
      ],
      icon: <Database className="text-blue-500 w-8 h-8" />,
    },
  ];
  return (
    <>
      <section className="w-full items-center justify-start">
      <h2 className="pl-6 text-2xl font-bold">Experience</h2>
        <div
          className={`w-full px-6 pt-3 pb-1 grid grid-cols-1 md:grid-cols-2 gap-6 bg-${theme} text-${theme}-foreground`}
        >
          {experiences.map((exp, index) => (
              <Card
                key={index}
                className={` p-6 rounded-xl shadow-none flex flex-col bg-${theme} text-${theme}-foreground ${
                  theme === "primary" ? "border-gray-600" : "border"
                }`}
              >
                <div className="flex items-center gap-4">
                  {exp.icon}
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {exp.company} ({exp.duration})
                </p>
                <ul className="mt-2 text-sm list-disc pl-4 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
        </div>
      </section>
    </>
  );
};

export { Experience };
