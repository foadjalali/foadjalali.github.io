"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import {
  Code,
  Cpu,
  Terminal,
  Monitor,
  Keyboard,
  Mouse,
  Braces,
} from "lucide-react";

const ICONS = [Code, Cpu, Terminal, Monitor, Keyboard, Braces];

const WORDS = [
  "JavaScript",
  "Python",
  "Go",
  "Rust",
  "PHP",
  "Laravel",
  "C++",
  "TypeScript",
  "map()",
  "reduce()",
  "filter()",
  "async",
  "await",
  "class",
  "function",
  "props",
  "state",
  "lambda",
  "callback",
  "forEach",
  "try/catch",
];

export const BackgroundLines = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-[20rem] md:h-screen w-full overflow-hidden bg-black text-white",
        className
      )}
    >
      <FloatingElements />
      {children}
    </div>
  );
};

const generateRandomPosition = () => ({
  top: Math.random() * 100 + "%",
  left: Math.random() * 100 + "%",
});

const FloatingElements = () => {
  const totalElements = 30;
  const combined = Array.from({ length: totalElements }).map((_, i) => {
    if (i % 2 === 0) {
      const Icon = ICONS[i % ICONS.length];
      return {
        type: "icon" as const,
        component: <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-100" />,
      };
    } else {
      const text = WORDS[i % WORDS.length];
      return {
        type: "text" as const,
        component: (
          <span className="text-sm md:text-md text-gray-100 font-mono tracking-wide">
            {text}
          </span>
        ),
      };
    }
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {combined.map((item, i) => {
        const { top, left } = generateRandomPosition();
        return (
          <motion.div
            key={i}
            className="absolute opacity-30"
            style={{ top, left }}
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              y: [30, 0, 30],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {item.component}
          </motion.div>
        );
      })}
    </div>
  );
};
