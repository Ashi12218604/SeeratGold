import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, Droplets, Cog, Package, Heart, Play, Pause, ChevronRight } from 'lucide-react';

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
    image: '/images/story/packaging.png',
    icon: Package,
    color: '#A88B3A',
    accent: '#C9A84C',
  },
  {
    id: 5,
    title: 'Kitchen',
    titleHi: 'आपकी रसोई',
    headline: 'Taste the Difference',
    description: 'The authentic taste from the source reaches every kitchen through Seerat Gold — bringing families together over flavorful meals.',
    image: '/images/story/kitchen.png',
    icon: Heart,
    color: '#A0522D',
    accent: '#C0724D',
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
    <section id="story-section" className="relative w-full min-h-screen flex flex-col bg-charcoal-dark overflow-hidden">
      
      {/* Full Page Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeStage}
          src={currentStage.image}
          alt={currentStage.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Dark Overlays for Text Readability */}
      <div className="absolute inset-0 bg-black/30" /> {/* Base darkness */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/80 to-transparent w-full md:w-3/4 lg:w-2/3" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/40 to-transparent sm:hidden" />

      {/* Content Container */}
      <div className="section-container relative z-10 w-full flex-1 flex flex-col justify-between pt-24 pb-12">
        
        {/* Main Content (Vertically Centered) */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl mt-12 md:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Stage icon & label */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md"
                  style={{ backgroundColor: `${currentStage.accent}30`, border: `1px solid ${currentStage.accent}50` }}
                >
                  <Icon size={26} color={currentStage.accent} />
                </div>
                <span 
                  className="inline-block px-5 py-2 rounded-full text-sm font-body font-bold tracking-widest uppercase backdrop-blur-md shadow-lg"
                  style={{ backgroundColor: `${currentStage.accent}20`, color: currentStage.accent, border: `1px solid ${currentStage.accent}40` }}
                >
                  Stage 0{currentStage.id}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {currentStage.headline}
              </h3>

              {/* Description */}
              <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
                {currentStage.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation / Progress Area */}
        <div className="w-full mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/20 backdrop-blur-sm rounded-3xl px-2 md:px-6">
          
          {/* Play/Pause Toggle */}
          <button 
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group bg-black/20 hover:bg-black/40 px-6 py-3 rounded-full backdrop-blur-md"
            title={autoPlay ? "Pause Slideshow" : "Play Slideshow"}
          >
            {autoPlay ? <Pause size={16} className="text-secondary" /> : <Play size={16} className="text-secondary" />}
            <span className="text-sm font-body font-semibold tracking-widest uppercase drop-shadow-md">
              {autoPlay ? 'Auto-Playing' : 'Paused'}
            </span>
          </button>

          {/* Stage Indicators */}
          <div className="flex items-center gap-4 lg:gap-8 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(i);
                  setAutoPlay(false);
                }}
                className="relative flex flex-col items-start gap-3 group min-w-[100px]"
              >
                <span className={`text-sm font-body font-bold tracking-widest uppercase transition-colors whitespace-nowrap drop-shadow-md
                  ${i === activeStage ? 'text-secondary' : 'text-white/60 group-hover:text-white'}`}>
                  {stage.title}
                </span>
                
                {/* Progress Line */}
                <div className="w-full h-2 bg-black/40 overflow-hidden relative rounded-full backdrop-blur-sm">
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
  );
};

export default StoryJourney;
