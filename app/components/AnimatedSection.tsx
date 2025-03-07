'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideLeft' | 'slideUp';
}

export function AnimatedSection({ children, className = '', animation = 'fadeIn' }: AnimatedSectionProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className={className}
      {...animations[animation]}
    >
      {children}
    </motion.div>
  );
}