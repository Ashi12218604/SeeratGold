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
    <section id="story-section" className="relative w-full bg-charcoal-dark overflow-hidden pt-16 lg:pt-24 pb-0">
      
      {/* Section Header */}
      <div className="section-container mb-12 lg:mb-16">
        <div className="text-center">
          <span className="text-secondary font-body text-xs font-medium tracking-widest uppercase">
            Our Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            From Source to Kitchen
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>
      </div>

      <div className="section-container pb-16 lg:pb-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
          
          {/* Left Column: Text (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Stage icon & label in a row */}
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${currentStage.accent}20`, border: `1px solid ${currentStage.accent}40` }}
                  >
                    <Icon size={26} color={currentStage.accent} />
                  </div>
                  <span 
                    className="inline-block px-5 py-2 rounded-full text-xs font-body font-bold tracking-widest uppercase shadow-sm"
                    style={{ backgroundColor: `${currentStage.accent}15`, color: currentStage.accent, border: `1px solid ${currentStage.accent}30` }}
                  >
                    Stage 0{currentStage.id}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {currentStage.headline}
                </h3>

                {/* Description */}
                <p className="font-body text-lg text-white/70 leading-relaxed">
                  {currentStage.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Image (7 cols on lg) */}
          <div className="lg:col-span-7 relative">
            {/* Decorative background glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] blur-[120px] rounded-full pointer-events-none opacity-40 transition-colors duration-1000 hidden md:block"
              style={{ backgroundColor: currentStage.accent }}
            />
            
            {/* Image Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStage}
                  src={currentStage.image}
                  alt={currentStage.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Subtle overlay gradient to make it blend better */}
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-dark/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Bottom Navigation / Progress Area (Full Width) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
          
          {/* Play/Pause Toggle */}
          <button 
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full backdrop-blur-md"
            title={autoPlay ? "Pause Slideshow" : "Play Slideshow"}
          >
            {autoPlay ? <Pause size={16} className="group-hover:text-secondary" /> : <Play size={16} className="group-hover:text-secondary" />}
            <span className="text-sm font-body font-semibold tracking-widest uppercase">
              {autoPlay ? 'Auto-Playing' : 'Paused'}
            </span>
          </button>

          {/* Stage Indicators */}
          <div className="flex items-center gap-4 lg:gap-6 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(i);
                  setAutoPlay(false); // Stop autoplay if user manually clicks
                }}
                className="relative flex flex-col items-start gap-3 group min-w-[100px]"
              >
                <span className={`text-xs font-body font-semibold tracking-widest uppercase transition-colors whitespace-nowrap
                  ${i === activeStage ? 'text-secondary' : 'text-white/40 group-hover:text-white/80'}`}>
                  {stage.title}
                </span>
                
                {/* Progress Line */}
                <div className="w-full h-1.5 bg-white/10 overflow-hidden relative rounded-full">
                  {i === activeStage && (
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-secondary shadow-[0_0_10px_rgba(201,168,76,0.5)]"
                      initial={{ width: autoPlay ? "0%" : "100%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: autoPlay ? 6 : 0, 
                        ease: "linear" 
                      }}
                    />
                  )}
                  {i < activeStage && (
                    <div className="absolute top-0 left-0 h-full w-full bg-secondary/50" />
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
