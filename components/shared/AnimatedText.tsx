"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  // Split by words, keep the spaces separate for natural wrapping
  const words = text.split(" ");

  // running char index so animation timing stays consistent across words
  let runningIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wi) => {
        const startIndex = runningIndex;
        const endIndex = startIndex + word.length;
        runningIndex = endIndex + 1; // +1 for the following space

        return (
          <span
            key={`w-${wi}`}
            className="inline-block break-keep whitespace-normal mr-[0.33ch] align-baseline"
          >
            {word.split("").map((char, ci) => {
              const idx = startIndex + ci;
              return (
                <span
                  key={`c-${wi}-${ci}`}
                  className={`inline-block transition-all duration-300 ${
                    idx < visibleChars
                      ? "opacity-100 blur-0 translate-x-0"
                      : "opacity-0 blur-sm translate-x-4"
                  }`}
                  style={{ transitionDelay: `${idx * 20}ms` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
