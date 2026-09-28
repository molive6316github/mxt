"use client";

import * as m from "motion/react-m";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article" | "section";
};

/** Fades + lifts its children in the first time they scroll into view. */
export default function Reveal({ children, className, style, delay = 0, y = 28, as = "div" }: Props) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
