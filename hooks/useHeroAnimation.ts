"use client"

import * as React from "react"
import anime from "animejs"

export function useHeroAnimation(
  containerRef: React.RefObject<HTMLDivElement | null>,
  blob1Ref: React.RefObject<HTMLDivElement | null>,
  blob2Ref: React.RefObject<HTMLDivElement | null>,
  blob3Ref: React.RefObject<HTMLDivElement | null>
) {
  React.useEffect(() => {
    if (!containerRef.current) return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      // Set sub-elements directly to visible opacity without motion
      const elements = containerRef.current.querySelectorAll(".hero-animate-item")
      elements.forEach((el) => {
        ;(el as HTMLElement).style.opacity = "1"
        ;(el as HTMLElement).style.transform = "translateY(0px) scale(1)"
      })
      return
    }

    // 1. Entrance Animation Sequence using Anime.js
    const timeline = anime.timeline({
      easing: "easeOutCubic",
    })

    timeline
      .add({
        targets: containerRef.current.querySelector(".hero-eyebrow"),
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
      })
      .add(
        {
          targets: containerRef.current.querySelector(".hero-headline"),
          translateY: [24, 0],
          opacity: [0, 1],
          duration: 600,
        },
        "-=350"
      )
      .add(
        {
          targets: containerRef.current.querySelector(".hero-subheadline"),
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 500,
        },
        "-=400"
      )
      .add(
        {
          targets: containerRef.current.querySelectorAll(".hero-cta-item"),
          translateY: [16, 0],
          scale: [0.96, 1],
          opacity: [0, 1],
          delay: anime.stagger(100),
          duration: 450,
        },
        "-=350"
      )
      .add(
        {
          targets: containerRef.current.querySelector(".hero-stats"),
          translateY: [16, 0],
          opacity: [0, 1],
          duration: 500,
        },
        "-=300"
      )

    // 2. Continuous Ambient Mesh Gradient Blob Animations
    let blob1Anim: anime.AnimeInstance | null = null
    let blob2Anim: anime.AnimeInstance | null = null
    let blob3Anim: anime.AnimeInstance | null = null

    if (blob1Ref.current) {
      blob1Anim = anime({
        targets: blob1Ref.current,
        translateX: [-40, 40],
        translateY: [-30, 30],
        scale: [1, 1.15],
        duration: 9000,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      })
    }

    if (blob2Ref.current) {
      blob2Anim = anime({
        targets: blob2Ref.current,
        translateX: [50, -30],
        translateY: [20, -40],
        scale: [1.1, 0.9],
        duration: 12000,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      })
    }

    if (blob3Ref.current) {
      blob3Anim = anime({
        targets: blob3Ref.current,
        translateX: [-20, 35],
        translateY: [35, -20],
        scale: [0.95, 1.2],
        duration: 10000,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      })
    }

    return () => {
      timeline.pause()
      blob1Anim?.pause()
      blob2Anim?.pause()
      blob3Anim?.pause()
    }
  }, [containerRef, blob1Ref, blob2Ref, blob3Ref])
}
