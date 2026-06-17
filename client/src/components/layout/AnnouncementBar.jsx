import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="bg-charcoal-dark text-white text-xs font-body font-medium tracking-wide py-2 overflow-hidden w-full fixed top-0 z-[60]">
      {/* The inline style here overrides any reduced-motion settings to ensure it always moves */}
      <div 
        className="animate-marquee-scroll flex gap-12 whitespace-nowrap px-6"
        style={{ animationDuration: '25s', animationIterationCount: 'infinite' }}
      >
        <span>🎁 Flat 15% Off on all individual spice orders</span>
        <span>🏷️ Extra 5% Off on all combo packs</span>
        <span>✨ Free Trial Kit (worth Rs. 149) on orders above Rs. 999!</span>
        <span>🎁 Flat 15% Off on all individual spice orders</span>
        <span>🏷️ Extra 5% Off on all combo packs</span>
        <span>✨ Free Trial Kit (worth Rs. 149) on orders above Rs. 999!</span>
        <span>🎁 Flat 15% Off on all individual spice orders</span>
        <span>🏷️ Extra 5% Off on all combo packs</span>
        <span>✨ Free Trial Kit (worth Rs. 149) on orders above Rs. 999!</span>
        <span>🎁 Flat 15% Off on all individual spice orders</span>
        <span>🏷️ Extra 5% Off on all combo packs</span>
        <span>✨ Free Trial Kit (worth Rs. 149) on orders above Rs. 999!</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
