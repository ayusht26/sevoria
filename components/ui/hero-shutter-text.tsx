"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTextProps {
  text?: string;
  className?: string;
  textSizeClass?: string;
  triggerOnHover?: boolean;
}

export default function HeroText({
  text = "Seviora",
  className = "",
  textSizeClass = "text-xl font-semibold tracking-tight",
  triggerOnHover = true,
}: HeroTextProps) {
  const [count, setCount] = useState(0);
  const characters = text.split("");

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      setCount((c) => c + 1);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={cn(
        "relative inline-flex items-center justify-center cursor-pointer select-none overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          className="inline-flex items-center justify-center relative"
        >
          {characters.map((char, i) => (
            <div
              key={i}
              className="relative overflow-hidden group inline-block"
            >
              {/* Main Character */}
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.04 + 0.1, duration: 0.4 }}
                className={cn("text-ink leading-none font-semibold tracking-tight inline-block", textSizeClass)}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Top Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: "easeInOut",
                }}
                className={cn(
                  "absolute inset-0 leading-none font-semibold tracking-tight text-cyan z-10 pointer-events-none inline-block",
                  textSizeClass
                )}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
              >
                {char}
              </motion.span>

              {/* Middle Slice Layer */}
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "-100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04 + 0.08,
                  ease: "easeInOut",
                }}
                className={cn(
                  "absolute inset-0 leading-none font-semibold tracking-tight text-white z-10 pointer-events-none inline-block",
                  textSizeClass
                )}
                style={{
                  clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                }}
              >
                {char}
              </motion.span>

              {/* Bottom Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04 + 0.15,
                  ease: "easeInOut",
                }}
                className={cn(
                  "absolute inset-0 leading-none font-semibold tracking-tight text-link z-10 pointer-events-none inline-block",
                  textSizeClass
                )}
                style={{
                  clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                }}
              >
                {char}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
