"use client";;
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export const TextReveal = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    (<div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-5xl items-center bg-transparent"
        }>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-sm font-bold text-black/20 dark:text-white/20  md:text-4xl text-justify"
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              (<Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>)
            );
          })}
        </p>
      </div>
    </div>)
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    (<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"}>
        {children}
      </motion.span>
    </span>)
  );
};
