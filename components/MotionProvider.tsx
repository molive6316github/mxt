"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

// LazyMotion + the `m` components keep the animation bundle small;
// reducedMotion="user" honours the OS "reduce motion" setting everywhere.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
