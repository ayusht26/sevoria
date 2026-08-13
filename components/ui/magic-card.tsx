"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion"

import { cn } from "@/lib/utils"

export interface MagicCardProps extends Omit<HTMLMotionProps<"div">, "mode"> {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientFrom?: string
  gradientTo?: string
  gradientColor?: string
  gradientOpacity?: number
  mode?: "gradient" | "orb"
  glowFrom?: string
  glowTo?: string
  glowAngle?: number
  glowSize?: number
  glowBlur?: number
  glowOpacity?: number
}

type ResetReason = "enter" | "leave" | "global" | "init"

export const MagicCard = React.forwardRef<HTMLDivElement, MagicCardProps>(
  function MagicCard(props, ref) {
    const {
      children,
      className,
      gradientSize = 250,
      gradientColor = "rgba(255, 255, 255, 0.08)",
      gradientOpacity = 0.8,
      gradientFrom = "#3C6B54",
      gradientTo = "#A97B33",
      mode = "gradient",
      glowFrom = "#3C6B54",
      glowTo = "#6FA98A",
      glowAngle = 90,
      glowSize = 420,
      glowBlur = 60,
      glowOpacity = 0.9,
      style,
      ...restProps
    } = props

    const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === "dark"

  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const orbX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbVisible = useSpring(0, { stiffness: 300, damping: 35 })

  const modeRef = useRef(mode)
  const glowOpacityRef = useRef(glowOpacity)
  const gradientSizeRef = useRef(gradientSize)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  useEffect(() => {
    glowOpacityRef.current = glowOpacity
  }, [glowOpacity])

  useEffect(() => {
    gradientSizeRef.current = gradientSize
  }, [gradientSize])

  const reset = useCallback(
    (reason: ResetReason = "leave") => {
      const currentMode = modeRef.current

      if (currentMode === "orb") {
        if (reason === "enter") orbVisible.set(glowOpacityRef.current)
        else orbVisible.set(0)
        return
      }

      const off = -gradientSizeRef.current
      mouseX.set(off)
      mouseY.set(off)
    },
    [mouseX, mouseY, orbVisible]
  )

  const isMobile = useCallback(() => {
    if (typeof window === "undefined") return false
    return window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isMobile()) return
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY, isMobile]
  )

  const handlePointerEnter = useCallback(() => {
    if (isMobile()) return
    reset("enter")
  }, [reset, isMobile])

  const handlePointerLeave = useCallback(() => {
    if (isMobile()) return
    reset("leave")
  }, [reset, isMobile])

  useEffect(() => {
    reset("init")
  }, [reset])

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) reset("global")
    }
    const handleBlur = () => reset("global")
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset("global")
    }

    window.addEventListener("pointerout", handleGlobalPointerOut)
    window.addEventListener("blur", handleBlur)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut)
      window.removeEventListener("blur", handleBlur)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [reset])

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative isolate overflow-hidden rounded-xl border border-transparent",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerEnter={handlePointerEnter}
        style={{
          ...style,
          background: useMotionTemplate`
            linear-gradient(var(--canvas-elevated, #0a0a0a) 0 0) padding-box,
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom},
              ${gradientTo},
              var(--hairline, #333333) 100%
            ) border-box
          `,
        }}
        {...restProps}
      >
        <div className="bg-canvas-elevated absolute inset-px z-20 rounded-[inherit]" />

        {mode === "gradient" && (
          <motion.div
            suppressHydrationWarning
            className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                  ${gradientColor},
                  transparent 100%
                )
              `,
              opacity: gradientOpacity,
            }}
          />
        )}

        {mode === "orb" && (
          <motion.div
            suppressHydrationWarning
            aria-hidden="true"
            className="pointer-events-none absolute z-30"
            style={{
              width: glowSize,
              height: glowSize,
              x: orbX,
              y: orbY,
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: 9999,
              filter: `blur(${glowBlur}px)`,
              opacity: orbVisible,
              background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
              mixBlendMode: isDarkTheme ? "screen" : "multiply",
              willChange: "transform, opacity",
            }}
          />
        )}
        <div className="relative z-40 h-full">{children}</div>
      </motion.div>
    )
  }
)
MagicCard.displayName = "MagicCard"
