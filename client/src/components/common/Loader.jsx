/**
 * Loader - Full-page loading spinner with Seerat Gold branding
 * Shows animated leaf icon and brand name during data loading
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream">
      {/* Spinning leaf icon */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
          scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="mb-6"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Leaf size={32} className="text-primary" />
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-display text-2xl font-bold text-primary"
      >
        Seerat Gold
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-2 text-sm font-body text-charcoal/50"
      >
        Loading premium spices...
      </motion.p>

      {/* Animated dots */}
      <div className="flex gap-1.5 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className="w-2 h-2 rounded-full bg-secondary"
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
