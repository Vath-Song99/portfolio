import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/Carousel";

interface ExperienceProps {
  theme: string;
}

const Experience = ({ theme }: ExperienceProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <section>
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>{current} {theme} {count}</CarouselItem>
            <CarouselItem>{current} {theme}</CarouselItem>
            <CarouselItem>{current} {theme}</CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
};

export { Experience };
