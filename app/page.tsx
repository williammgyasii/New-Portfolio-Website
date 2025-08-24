"use client";

import ParallaxContainer from "@/components/shared/ParallaxContainer";
import { ThemeToggle } from "@/components/shared/Theme-Toggle";
import { useLoading } from "@/app/contexts/LoadingSpinnerProvider";
import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import AnimatedPillTags from "@/components/animated/AnimatedPill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { person } from "./lib/content";
import Link from "next/link";
import { TextGradientScroll } from "@/components/animated/TextGradientScroll";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import CustomCarousel from "@/components/shared/CustomCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  const missionStatement = `I'm William, a full-stack developer passionate about building intelligent applications that solve real problems.  
From designing efficient backend architectures to crafting elegant frontend experiences, I focus on creating solutions that are both powerful and intuitive.`;

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

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
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-3 justify-center text-center">
        {/* Navigation Pills */}
        <div
          className={`flex items-center justify-center w-full  transition-all duration-1000 ${
            startAnimation
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <AnimatedPillTags>Featured Work</AnimatedPillTags>
        </div>

        <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold font-sans mb-3 text-white leading-tight whitespace-normal break-words">
          <div style={{ visibility: startAnimation ? "visible" : "hidden" }}>
            <AnimatedText text="Transforming complex ideas into" delay={200} />
            <br className="hidden" />
            <AnimatedText text="scalable applications." delay={1500} />
          </div>
        </h1>

        <div className="text-lg sm:text-xl text-white/70 max-w-2xl mb-5 mx-auto leading-relaxed">
          <div style={{ visibility: startAnimation ? "visible" : "hidden" }}>
            <TextGradientScroll
              text={missionStatement}
              className="text-md md:text-xl text-center lg:text-2xl font-normal text-white/15"
              type="letter"
              textOpacity="strong"
            />
          </div>
        </div>

        <Link
          href="/about"
          className={`flex items-center justify-center transition-all px-2 py-1 rounded-full duration-1000 delay-[1000ms] ${
            startAnimation
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <AnimatedPillTags withDot={false}>
            <Avatar>
              <AvatarImage className="object-cover" src={person.avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span className="text-white/80 text-sm font-medium ">
              About — William Gyasi
            </span>
          </AnimatedPillTags>
        </Link>
      </div>

      <div className="w-full mt-5">
        <div className="flex flex-col w-full">
          <CustomCarousel />
          <div className="flex w-full flex-col md:flex-row md:gap-10 space-x-2 mt-6">
            <h1 className="text-white font-medium font-sans text-center text-2xl">
              ShepherdStream
              <p className="text-sm max-w-80 mx-auto">
                A Secure Streaming Portal for Church Communities
              </p>
            </h1>
            <div className="flex flex-col  md:items-start">
              <p className="text-white/70 text-sm md:text-base max-w-2xl font-semi-bold font-sans text-center md:text-left mt-2 md:mt-0">
                Deliver sermons privately, safeguard your church’s content with
                watermarked streams, and track member engagement with detailed
                viewing insights — all in one secure portal.
              </p>
              <Button
                variant={"default"}
                className="text-sky-600 hover:text-white cursor-pointer bg-transparent transition-all group"
                onClick={() => router.push("/projects/shepherdstream")}
              >
                Show Project
                <ArrowRight className="group-hover:flex hidden " />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
