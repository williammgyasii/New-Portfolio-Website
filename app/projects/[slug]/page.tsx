"use client";
import { useLoading } from "@/app/contexts/LoadingSpinnerProvider";
import { person } from "@/app/lib/content";
import { Projects } from "@/app/lib/projects";
import { capitalizeFirstLetter } from "@/app/utils/string.utils";
import AnimatedPillTags from "@/components/animated/AnimatedPill";
import CustomCarousel from "@/components/shared/CustomCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ProjectItem() {
  const { slug } = useParams();
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();
  console.log("Slug from params:", slug);

  const findProjectBySlug = useMemo(() => {
    return Projects.find((project) => project.slug === slug);
  }, [slug]);

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className={`transition-all duration-1000 ${
          startAnimation
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <AnimatedPillTags>Projects</AnimatedPillTags>
      </div>

      <div className="mt-10 flex flex-col space-y-4 w-full items-center justify-center">
        <h1 className="font-sans font-semibold mb-4 text-center">
          <span className="text-white/80 text-base">Building</span>
          <br />
          <span className="text-white text-4xl font-sans ">
            {findProjectBySlug?.name}
          </span>
          <br />
          <span className="text-white/80 text-base">
            {findProjectBySlug?.subline}
          </span>
        </h1>
        <div className="flex flex-row items-center rounded-xl px-2 py-1">
          <Avatar>
            <AvatarImage className="object-cover" src={person.avatar} />
            <AvatarFallback>WG</AvatarFallback>
          </Avatar>
          <span className="ml-3 text-sm md:text-base font-medium text-white">
            {capitalizeFirstLetter(person.name)}
          </span>
        </div>
      </div>

      <div className="w-full mt-5 md:px-0">
        <CustomCarousel withDots={false} />
      </div>

      <div className="md:w-[70%] mt-12 space-y-10">
        <div>
          <h2 className="text-white text-2xl font-sans font-semibold mb-3">
            Overview
          </h2>
          <p className="text-white text-sm md:text-base  font-semi-bold font-sans md:text-left mt-2 md:mt-0">
            {findProjectBySlug?.description}
          </p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-sans font-semibold mb-3">
            Key features
          </h2>
          <ul className="flex flex-wrap gap-2">
            {findProjectBySlug?.keyFeatures.map((feature, index) => (
              <li
                key={index}
                className=" w-full font-sans flex flex-row items-start justify-start text-white py-1 rounded-full text-sm md:text-base"
              >
                <span className="text-primary mr-2">•</span>
                <span>
                  <span className="font-sans text-white font-bold">
                    {feature?.title}
                  </span>
                  {feature?.description ? ` - ${feature.description}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white text-2xl font-sans font-semibold mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2 items-center">
            {findProjectBySlug?.technologies.map((tech, index) => (
              <div
                key={index}
                className="font-sans flex flex-row border bg-slate-500 px-2 py-1 items-start justify-start text-white rounded-full text-sm"
              >
                {tech.icon}
                <span className="ml-2 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-sans font-semibold mb-3">
            Challenges & Learnings
            <div className="flex flex-col md:flex-row md:gap-10 space-x-2 mt-2">
              <div>
                <h5 className="border-b border-b-white">Challenges</h5>
                <ul className="list-disc list-inside">
                  {findProjectBySlug?.challengesAndLearning?.challenges.map(
                    (challenge, index) => (
                      <li
                        key={index}
                        className="text-white text-sm md:text-sm font-sans md:text-left mt-2 md:mt-0"
                      >
                        {challenge}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mt-2 md:md-0">
                <h5 className="border-b border-b-white">Learnings</h5>
                <ul className="list-disc list-inside">
                  {findProjectBySlug?.challengesAndLearning?.learning.map(
                    (learning, index) => (
                      <li
                        key={index}
                        className="text-white text-xs md:text-sm font-sans md:text-left mt-2 md:mt-0"
                      >
                        {learning}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
