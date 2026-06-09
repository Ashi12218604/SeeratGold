/**
 * WhySeeratGold - USP showcase section
 * Visually rich cards with colored backgrounds, large icons, and animated counters
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Sparkles, Package, Heart } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const usps = [
  {
    icon: Leaf,
    title: 'Authentic Sourcing',
    description: 'Directly from native growing regions across India, ensuring the purest origin for every spice.',
    image: '/images/story/sourcing.png',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Handpicked and carefully selected to meet the highest standards of taste and purity.',
    image: '/images/story/cleaning.png',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Processing',
    description: 'Modern, clean facilities with rigorous quality control at every stage.',
    image: '/images/story/processing.png',
  },
  {
    icon: Package,
    title: 'Fresh Packaging',
    description: 'Sealed to lock in flavor, aroma, and freshness from our facility to your kitchen.',
    image: '/images/story/packaging.png',
  },
  {
    icon: Heart,
    title: 'Consistent Taste',
    description: 'Same great flavor every time, because your recipes deserve dependable spices.',
    image: '/images/story/kitchen.png',
  },
];

const WhySeeratGold = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-cream-dark">
      <div className="section-container">
        <SectionTitle
          title="Why Seerat Gold?"
          subtitle="What makes our spices special — from farm to your kitchen."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-12 items-center">
          {/* Left: Dynamic Image Display */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
            {usps.map((usp, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={usp.title}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.05,
                    zIndex: isActive ? 10 : 0
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={usp.image}
                    alt={usp.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Premium dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <usp.icon size={56} className="text-secondary mb-4 opacity-90" strokeWidth={1.5} />
                    <h3 className="font-display text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">
                      {usp.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive List */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3 md:gap-5">
            {usps.map((usp, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={usp.title}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-500 border-l-4 relative overflow-hidden ${
                    isActive
                      ? 'bg-white shadow-card border-secondary translate-x-2 lg:translate-x-4'
                      : 'bg-transparent border-transparent hover:bg-white/40'
                  }`}
                >
                  <div className="relative z-10">
                    <h4
                      className={`text-xl md:text-2xl font-display font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-charcoal/70'
                      }`}
                    >
                      {usp.title}
                    </h4>
                    <p
                      className={`font-body text-sm md:text-base leading-relaxed transition-all duration-300 ${
                        isActive ? 'text-charcoal opacity-100 max-h-40' : 'text-charcoal/50 max-h-0 lg:max-h-40 opacity-0 lg:opacity-100 overflow-hidden'
                      }`}
                    >
                      {usp.description}
                    </p>
                  </div>
                  
                  {/* Subtle active background effect */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-50 pointer-events-none"
                      initial={false}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySeeratGold;
