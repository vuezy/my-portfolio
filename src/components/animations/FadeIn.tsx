/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, Variants, HTMLMotionProps } from "motion/react";

type FadeInElement = "div" | "button";
type FadeInDirection = "up" | "down" | "left" | "right" | "inplace";

function getOffset(direction: FadeInDirection) {
  switch (direction) {
    case "up": return { x: 0, y: 24 };
    case "down": return { x: 0, y: -24 };
    case "left": return { x: 40, y: 0 };
    case "right": return { x: -40, y: 0 };
    case "inplace": return { x: 0, y: 0 };
  }
}

function makeVariants(direction: FadeInDirection): Variants {
  const offset = getOffset(direction);
  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

interface FadeInProps<T extends FadeInElement> {
  as?: T;
  asChildAnimation?: boolean;
  direction?: FadeInDirection;
  onMount?: boolean;
}

export default function FadeIn<T extends FadeInElement>({
  as = "div" as T,
  asChildAnimation = false,
  direction = "up",
  onMount = false,
  transition,
  children,
  ...props
}: FadeInProps<T> & HTMLMotionProps<T>) {
  const Component = motion[as];
  const variants = makeVariants(direction);

  if (asChildAnimation) {
    return (
      <Component
        variants={variants}
        transition={{ duration: 0.3, delay: 0.15, ease: "easeOut", ...transition }}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  }

  const sharedProps = {
    variants,
    initial: "hidden",
    transition: { duration: 0.3, delay: 0, ease: "easeOut", ...transition },
    ...(props as any),
  };

  if (onMount) {
    return (
      <Component animate="visible" {...sharedProps}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...sharedProps}
    >
      {children}
    </Component>
  );
}