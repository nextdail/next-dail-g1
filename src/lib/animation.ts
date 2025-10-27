/**
 * Framer Motion animation variants
 * These preserve the smooth animations from your original design
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] },
};

export const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
};

export const slideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
};

/**
 * 3D card tilt effect configuration
 */
export const cardTilt3D = {
  perspective: 1000,
  rotateXMultiplier: 0.05,
  rotateYMultiplier: 0.05,
  maxRotation: 10,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
};

/**
 * Parallax scrolling configuration
 */
export const parallaxConfig = {
  speed: {
    slow: 0.3,
    medium: 0.5,
    fast: 0.7,
  },
};

/**
 * Counter animation configuration
 */
export const counterAnimation = {
  duration: 2,
  ease: 'easeOut',
};
