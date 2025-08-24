"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const images = [
  "/images/modern-web-design-dashboard.png",
  "/images/mobile-app-interface.png",
  "/images/e-commerce-website-layout.png",
  "/images/portfolio-website-design.png",
];

export default function CustomCarousel({
  withDots = true,
}: {
  withDots?: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToPrevious = () => {
    api?.scrollPrev();
  };

  const scrollToNext = () => {
    api?.scrollNext();
  };

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative group">
        <Carousel
          setApi={setApi}
          className="w-full "
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[3/2] md:aspect-[4/2] overflow-hidden rounded-lg">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={scrollToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={scrollToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </Carousel>

        {withDots && (
          <div className="flex justify-center items-center space-x-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-0.5 transition-all duration-300 ${
                  index === current - 1
                    ? "w-8 bg-white"
                    : "w-4 bg-white/40 border-dashed border-t border-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
