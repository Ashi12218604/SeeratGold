import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, Droplets, Cog, Package, Heart, Play, Pause, ChevronRight, ShoppingBag } from 'lucide-react';

const stages = [
  {
    id: 1,
    title: 'Sourcing',
    titleHi: 'संग्रहण',
    headline: 'From Sacred Soil',
    description: 'Seerat Gold directly sources raw spices from their native regions — where they naturally grow best and develop their most authentic flavor.',
    image: '/images/story/sourcing.png',
    icon: Sprout,
    color: '#40916C',
    accent: '#74C399',
  },
  {
    id: 2,
    title: 'Cleaning',
    titleHi: 'सफ़ाई',
    headline: 'Carefully Chosen',
    description: 'Every spice is meticulously cleaned and inspected by hand to remove impurities — preserving its natural quality and purity.',
    image: '/images/story/cleaning.png',
    icon: Droplets,
    color: '#2D6A4F',
    accent: '#52B788',
  },
  {
    id: 3,
    title: 'Processing',
    titleHi: 'प्रसंस्करण',
    headline: 'Crafted with Precision',
    description: 'Spices are processed using modern techniques that preserve their aroma, vibrant color, freshness, and original taste.',
    image: '/images/story/processing.png',
    icon: Cog,
    color: '#1B4332',
    accent: '#40916C',
  },
  {
    id: 4,
    title: 'Packaging',
    titleHi: 'पैकेजिंग',
    headline: 'Sealed Fresh',
    description: 'Freshness and quality are carefully locked in through hygienic, airtight packaging — ensuring every pinch tastes as nature intended.',
    image: '/images/combos/tadka-combo.jpeg',
    icon: Package,
    color: '#A88B3A',
    accent: '#C9A84C',
    objectPosition: 'center 60%',
  },
  {
    id: 5,
    title: 'Our Range',
    titleHi: 'उत्पाद',
    headline: 'Premium Spices',
    description: 'Explore our authentic collection of spices, carefully curated for every Indian kitchen.',
    image: '/images/combos/all-purpose.jpeg',
    icon: ShoppingBag,
    color: '#876E2E',
    accent: '#A88B3A',
    objectPosition: 'center 60%',
  },
  {
    id: 6,
    title: 'Kitchen',
    titleHi: 'आपकी रसोई',
    headline: 'Taste the Difference',
    description: 'The authentic taste from the source reaches every kitchen through Seerat Gold — bringing families together over flavorful meals.',
    image: '/images/story/kitchen.png',
    icon: Heart,
    color: '#A0522D',
    accent: '#C0724D',
    objectPosition: 'center 15%',
  },
];

const StoryJourney = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance logic
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentStage = stages[activeStage];
  const Icon = currentStage.icon;

  return (
    <div className="w-full px-4 md:px-8 py-8 md:py-12 bg-transparent z-10 relative">
      <section id="story-section" className="relative w-full max-w-6xl mx-auto md:h-[600px] flex flex-col bg-charcoal-dark overflow-hidden pt-12 md:pt-0 rounded-2xl md:rounded-3xl shadow-2xl">
      
      {/* ---------------- MOBILE LAYOUT ---------------- */}
      {/* Mobile Section Header */}
      <div className="md:hidden section-container px-3 mb-4 text-center z-20">
        <span className="text-secondary font-body text-[10px] font-bold tracking-widest uppercase drop-shadow-md">
          Our Journey
        </span>
        <h2 className="font-display text-2xl font-bold text-white mt-1 drop-shadow-lg">
          From Source to Kitchen
        </h2>
        <div className="w-10 h-0.5 bg-gradient-gold mt-2 mx-auto rounded-full" />
      </div>

      {/* Mobile Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video md:hidden px-3 mb-4 z-20">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeStage}
              src={currentStage.image}
              alt={currentStage.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: currentStage.objectPosition || 'center' }}
            />
          </AnimatePresence>
          {/* Subtle fade at the bottom of the mobile image */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* ---------------- DESKTOP LAYOUT ---------------- */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeStage}
            src={currentStage.image}
            alt={currentStage.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: currentStage.objectPosition || 'center' }}
          />
        </AnimatePresence>
        
        {/* Dark Overlays for Text Readability on Desktop */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/80 to-transparent w-3/4 lg:w-2/3 pointer-events-none" />
      </div>

      {/* Smooth Transition Top Gradient (Desktop only) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-charcoal-dark via-charcoal-dark/90 to-transparent z-10 pointer-events-none" />

      {/* Content Container (Shared) */}
      <div className="section-container relative z-20 w-full h-full flex flex-col pt-0 md:pt-16 pb-8 md:pb-8">
        
        {/* Desktop Section Header (Hidden on Mobile) */}
        <div className="hidden md:block w-full mb-8">
          <span className="text-secondary font-body text-xs font-bold tracking-widest uppercase drop-shadow-md">
            Our Journey
          </span>
          <h2 className="font-display text-3xl font-bold text-white mt-2 drop-shadow-lg">
            From Source to Kitchen
          </h2>
          <div className="w-12 h-1 bg-gradient-gold mt-4 rounded-full" />
        </div>

        {/* Main Content (Vertically Centered) */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Stage icon & label */}
              <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-8">
                <div 
                  className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl flex items-center justify-center backdrop-blur-md"
                  style={{ backgroundColor: `${currentStage.accent}30`, border: `1px solid ${currentStage.accent}50` }}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" color={currentStage.accent} />
                </div>
                <span 
                  className="inline-block px-3 py-1 md:px-5 md:py-2 rounded-full text-[10px] md:text-sm font-body font-bold tracking-widest uppercase backdrop-blur-md shadow-lg"
                  style={{ backgroundColor: `${currentStage.accent}20`, color: currentStage.accent, border: `1px solid ${currentStage.accent}40` }}
                >
                  Stage 0{currentStage.id}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight drop-shadow-lg">
                {currentStage.headline}
              </h3>

              {/* Description */}
              <p className="font-body text-sm md:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-md max-w-lg">
                {currentStage.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation / Progress Area */}
        <div className="w-full mt-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-4 md:pt-6 border-t border-white/20 backdrop-blur-sm rounded-xl md:rounded-3xl px-2 md:px-6">
          
          {/* Play/Pause Toggle */}
          <button 
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-2 md:gap-3 text-white/80 hover:text-white transition-colors group bg-black/20 hover:bg-black/40 px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-md"
            title={autoPlay ? "Pause Slideshow" : "Play Slideshow"}
          >
            {autoPlay ? <Pause size={16} className="text-secondary" /> : <Play size={16} className="text-secondary" />}
            <span className="text-xs md:text-sm font-body font-semibold tracking-widest uppercase drop-shadow-md">
              {autoPlay ? 'Auto-Playing' : 'Paused'}
            </span>
          </button>

          {/* Stage Indicators */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-8 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(i);
                  setAutoPlay(false);
                }}
                className="relative flex flex-col items-start gap-1.5 md:gap-3 group min-w-[70px] md:min-w-[100px]"
              >
                <span className={`text-[10px] md:text-sm font-body font-bold tracking-widest uppercase transition-colors whitespace-nowrap drop-shadow-md
                  ${i === activeStage ? 'text-secondary' : 'text-white/60 group-hover:text-white'}`}>
                  {stage.title}
                </span>
                
                {/* Progress Line */}
                <div className="w-full h-1 md:h-2 bg-black/40 overflow-hidden relative rounded-full backdrop-blur-sm">
                  {i === activeStage && (
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-secondary shadow-[0_0_10px_rgba(201,168,76,0.8)]"
                      initial={{ width: autoPlay ? "0%" : "100%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: autoPlay ? 6 : 0, 
                        ease: "linear" 
                      }}
                    />
                  )}
                  {i < activeStage && (
                    <div className="absolute top-0 left-0 h-full w-full bg-secondary/70" />
                  )}
                </div>
              </button>
            ))}
          </div>
          
        </div>

      </div>
      </section>
    </div>
  );
};

export default StoryJourney;
