'use client'

import { HTMLMotionProps, motion, Transition, useReducedMotion, Variants } from "motion/react";

const variants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0%)" },
  visible: { clipPath: "inset(0 0% 0 0%)" },
};

export interface WipeInProps extends HTMLMotionProps<"div"> {
  asChildAnimation?: boolean;
}

export default function WipeIn({ asChildAnimation = false, transition, ...props }: WipeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const reducedTransition: Transition = { duration: 0.00001 };

  if (asChildAnimation) {
    return (
      <motion.div
        variants={variants}
        transition={shouldReduceMotion ? reducedTransition : { duration: 0.3, delay: 0.15, ease: "easeOut", ...transition }}
        {...props}
      />
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={shouldReduceMotion ? reducedTransition : { duration: 0.3, delay: 0, ease: "easeOut", ...transition }}
      {...props}
    />
  );
}