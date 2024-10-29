"use client";

import React, { MutableRefObject, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type VariantCreator = (params?: AnimationParams) => Variants;

interface MotionProps {
  variant?: keyof typeof variantCreators;
  children?: ReactNode;
  className?: string;
  ref?: MutableRefObject<null>;
  animationParams?: AnimationParams;
  viewport?: { once: boolean; amount: number };
}

const Motion: React.FC<MotionProps> = ({
  variant = "fadeIn",
  children,
  className,
  ref,
  animationParams = {},
  viewport = { once: true, amount: 0.5 },
}) => {
  const createVariant = variantCreators[variant] as VariantCreator;
  const variants = createVariant(animationParams);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;

export interface AnimationParams {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  offset?: number;
  // Ajout des propriétés spring
  type?: "spring" | "tween";
  stiffness?: number;
  damping?: number;
  mass?: number;
  bounce?: number;
  restSpeed?: number;
  restDelta?: number;
}

const variantCreators = {
  // Fade In
  fadeIn: ({
    duration = 0.8,
    delay = 0.2,
    type = "tween",
  }: AnimationParams = {}): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        type,
      },
    },
  }),

  // Slide In Vertical (Top or Bottom)
  verticalSlideIn: ({
    delay = 0,
    offset = 50,
    type = "spring",
    stiffness = 100,
    damping = 12,
    mass = 1,
  }: AnimationParams = {}): Variants => ({
    hidden: { y: offset, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        type,
        stiffness,
        damping,
        mass,
      },
    },
  }),

  // Slide In Horizontal (Left or Right)
  horizontalSlideIn: ({
    delay = 0,
    offset = 50,
    type = "spring",
    stiffness = 100,
    damping = 12,
    mass = 1,
  }: AnimationParams = {}): Variants => ({
    hidden: { x: offset, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        type,
        stiffness,
        damping,
        mass,
      },
    },
  }),

  // Rotate In
  rotateIn: ({
    delay = 0,
    type = "spring",
    stiffness = 100,
    damping = 12,
    mass = 1,
  }: AnimationParams = {}): Variants => ({
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        delay,
        type,
        stiffness,
        damping,
        mass,
      },
    },
  }),
};
