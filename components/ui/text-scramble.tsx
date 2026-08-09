"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const UPPER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER_CHARS = "abcdefghijklmnopqrstuvwxyz"

interface TextScrambleProps {
  text: string
  className?: string
  textClassName?: string
  scrambleColor?: string
}

export function TextScramble({
  text,
  className = "",
  textClassName = "",
  scrambleColor = "text-link",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)

  const getRandomChar = (targetChar: string) => {
    if (targetChar === " ") return " "
    if (targetChar >= "A" && targetChar <= "Z") {
      return UPPER_CHARS[Math.floor(Math.random() * UPPER_CHARS.length)]
    }
    if (targetChar >= "a" && targetChar <= "z") {
      return LOWER_CHARS[Math.floor(Math.random() * LOWER_CHARS.length)]
    }
    return targetChar
  }

  const scramble = useCallback(() => {
    setIsScrambling(true)
    frameRef.current = 0
    const duration = text.length * 3

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      frameRef.current++

      const progress = frameRef.current / duration
      const revealedLength = Math.floor(progress * text.length)

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (i < revealedLength) return text[i]
          return getRandomChar(text[i])
        })
        .join("")

      setDisplayText(newText)

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 30)
  }, [text])

  const handleMouseEnter = () => {
    scramble()
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <span
      className={cn("inline-flex items-center cursor-pointer select-none shrink-0", className)}
      onMouseEnter={handleMouseEnter}
    >
      <span className={cn("inline-flex items-center whitespace-nowrap", textClassName)}>
        {displayText.split("").map((char, i) => (
          <span
            key={i}
            className={cn(
              "inline-block transition-colors duration-150",
              isScrambling && char !== text[i] ? scrambleColor : "text-ink"
            )}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  )
}
