import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/Card";
import Image from "next/image";
interface EducationProps {
  theme: string;
}

const Education = ({ theme }: EducationProps) => {
  return (
    <>
      <section className="w-full flex items-center justify-start">
        <Card
          className={`w-full max-w-lg border-none shadow-none rounded-2xl bg-${theme} text-${theme}-foreground`}
        >
          <CardHeader className="flex flex-col items-start space-y-2">
            <CardTitle className="text-2xl font-bold">Education</CardTitle>
            <CardDescription className="text-sm opacity-80">
              My academic background and qualifications.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/a/a2/RUPP_logo.PNG"
                alt="University Logo"
                className="w-16 h-16 rounded-lg object-cover"
                width={200}
                height={200}
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm opacity-80">
                  RUPP University (2022 - 2026)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="https://sabaicode.com/sabaicode.jpg"
                alt="Certification"
                className="w-16 h-16 rounded-lg object-cover"
                width={200}
                height={200}
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Full Stack Web Development Certification
                </h3>
                <p className="text-sm opacity-80">Sabaicode (2023 - 2024)</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="w-full flex items-center justify-center">
            <button
              className="text-xs opacity-50 hover:underline "
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1lk1A--i3l8r0ErDAu_sXxsCEYHUtnQH6/view?usp=sharing",
                  "_blank"
                )
              }
            >
              View Certificates
            </button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export { Education };
