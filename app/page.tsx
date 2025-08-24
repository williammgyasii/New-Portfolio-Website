"use client";

import ParallaxContainer from "@/components/shared/ParallaxContainer";
import { ThemeToggle } from "@/components/shared/Theme-Toggle";
import { useLoading } from "@/app/contexts/LoadingSpinnerProvider";
import { useEffect, useState } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import AnimatedPillTags from "@/components/animated/AnimatedPill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { person } from "./lib/content";
import Link from "next/link";
import { TextGradientScroll } from "@/components/animated/TextGradientScroll";

export default function HomePage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();
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

  return (
    <ParallaxContainer speed={0.1}>
      <section className="min-h-screen flex flex-col items-center">
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
              <AnimatedText
                text="Transforming complex ideas into"
                delay={200}
              />
              <br className="block sm:hidden" />
              <AnimatedText text=" scalable applications." delay={1500} />
            </div>
          </h1>

          <div className="text-lg sm:text-xl text-white/70 max-w-3xl mb-5 mx-auto leading-relaxed">
            <div style={{ visibility: startAnimation ? "visible" : "hidden" }}>
              <TextGradientScroll
                text={missionStatement}
                className="text-md md:text-xl text-center lg:text-2xl font-normal text-gray-800"
                type="word"
                textOpacity="soft"
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
      </section>
    </ParallaxContainer>
  );
}
