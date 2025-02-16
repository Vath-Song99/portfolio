import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/Avatar";

interface DescriptionProps {
  theme: string;
}

const Description = ({ theme }: DescriptionProps) => {
  return (
    <>
      <section className="w-full flex items-center justify-center ">
        <Card
          className={`w-full flex items-center justify-between  border-none p-0 bg-${theme} text-${theme}-foreground ${
            theme === "secondary" ? "shadow-sm" : ""
          }`}
        >
          <CardHeader>
            <CardTitle>Smoeury Songvat</CardTitle>
            <CardDescription>Backend Developer</CardDescription>
          </CardHeader>
          <CardContent className="p-0 relative">
            <Avatar className="w-16 h-16 hover:bg-slate-400">
              <AvatarImage src="https://avatars.githubusercontent.com/u/139366956?v=4" />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <span className="size-4 absolute right-0 bottom-0 rounded-full border border-background bg-green-300"></span>
          </CardContent>
        </Card>
      </section>
      <section className="w-full flex items-center justify-center">
        <article className="px-6 text-wrap text-xl font-mono">
          Passionate about building efficient, scalable solutions that drive
          seamless digital experiences.
          <span className="text-slate-400">
            Focused on performance, reliability, and clean code, with a
            problem-solving mindset and a commitment to continuous learning and
            innovation.
          </span>
        </article>
      </section>
    </>
  );
};

export { Description };
