import confetti from 'canvas-confetti';

// Mulher Plena refined brand colors: Rosewood, Warm Gold, Soft Rose, Mint Grace
const BRAND_COLORS = [
  '#b84d66', // Rosewood primary
  '#e28299', // Soft Rosewood
  '#d4af37', // Warm Gold
  '#f6d860', // Light Gold
  '#f43f5e', // Rose accent
  '#10b981', // Emerald faith
  '#fbbf24', // Amber
];

/**
 * Fires an elegant confetti celebration animation when a devotional is marked as read.
 * @param isFirstEver - Whether this is the user's very first devotional ever completed.
 * @param isAllCompleted - Whether the user has now completed all 50 devotionals.
 */
export function fireDevotionalConfetti(isFirstEver = false, isAllCompleted = false) {
  // Respect user preference for reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (isAllCompleted) {
    // Grand Finale: continuous celebratory fireworks over 2.5 seconds
    const duration = 2500;
    const end = Date.now() + duration;

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: BRAND_COLORS,
        disableForReducedMotion: true,
      });
    }, 250);
    return;
  }

  if (isFirstEver) {
    // First Devotional Ever Celebration: double cannon salute
    // Center burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65, x: 0.5 },
      colors: BRAND_COLORS,
      disableForReducedMotion: true,
      scalar: 1.1,
    });

    // Left cannon
    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors: BRAND_COLORS,
        disableForReducedMotion: true,
      });
    }, 150);

    // Right cannon
    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors: BRAND_COLORS,
        disableForReducedMotion: true,
      });
    }, 300);
    return;
  }

  // Standard devotional completion: A balanced, graceful burst of joy
  confetti({
    particleCount: 45,
    spread: 60,
    origin: { y: 0.7, x: 0.5 },
    colors: BRAND_COLORS,
    disableForReducedMotion: true,
    scalar: 0.95,
    ticks: 200,
  });

  // Soft secondary sparkle
  setTimeout(() => {
    confetti({
      particleCount: 25,
      spread: 80,
      origin: { y: 0.68, x: 0.5 },
      colors: ['#d4af37', '#f6d860', '#e28299'],
      disableForReducedMotion: true,
      scalar: 0.8,
    });
  }, 180);
}
