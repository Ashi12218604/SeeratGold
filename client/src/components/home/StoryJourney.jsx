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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text & Navigation (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[480px]">
            {/* Content Area */}
            <div className="w-full py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Stage icon & label in a row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${currentStage.accent}30` }}
                    >
                      <Icon size={24} color={currentStage.accent} />
                    </div>
                    <span 
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase"
                      style={{ backgroundColor: `${currentStage.accent}25`, color: currentStage.accent }}
                    >
                      Stage 0{currentStage.id}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                    {currentStage.headline}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                    {currentStage.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation/Progress Area */}
            <div className="w-full pt-8 flex items-center justify-between">
              {/* Play/Pause Toggle */}
              <button 
                onClick={() => setAutoPlay(!autoPlay)}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full backdrop-blur-md"
                title={autoPlay ? "Pause Slideshow" : "Play Slideshow"}
              >
                {autoPlay ? <Pause size={14} className="group-hover:text-secondary" /> : <Play size={14} className="group-hover:text-secondary" />}
                <span className="text-xs font-body tracking-widest uppercase hidden sm:block">
                  {autoPlay ? 'Auto' : 'Paused'}
                </span>
              </button>

              {/* Stage Indicators */}
              <div className="flex items-center gap-2 lg:gap-3">
                {stages.map((stage, i) => (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setActiveStage(i);
                      setAutoPlay(false); // Stop autoplay if user manually clicks
                    }}
                    className="relative flex flex-col items-center gap-2 group"
                  >
                    <span className={`text-[10px] font-body tracking-widest uppercase hidden md:block transition-colors
                      ${i === activeStage ? 'text-secondary' : 'text-white/40 group-hover:text-white/70'}`}>
                      {stage.title}
                    </span>
                    
                    {/* Progress Line */}
                    <div className="w-8 lg:w-14 h-1.5 bg-white/20 overflow-hidden relative rounded-full">
                      {i === activeStage && (
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-secondary"
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

          {/* Right Column: Image (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 bg-charcoal/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStage}
                  src={currentStage.image}
                  alt={currentStage.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryJourney;
