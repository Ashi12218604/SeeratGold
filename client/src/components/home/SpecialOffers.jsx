/**
 * SpecialOffers - Homepage special offers section
 * Vibrant gradient banner cards with offer details and CTAs
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock, Tag, Sparkles } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import WhatsAppButton from '../common/WhatsAppButton';
import { useAppContext } from '../../context/AppContext';

const OfferCard = ({ offer, index }) => {
  const { title, description, code, validTill, gradient, icon } = offer;

  const defaultGradients = [
    'from-primary to-primary-light',
    'from-secondary-dark to-secondary',
    'from-charcoal to-charcoal-light'
  ];
  const bgGradient = gradient || defaultGradients[index % defaultGradients.length];

  const defaultIcons = [<Gift key="gift" />, <Tag key="tag" />, <Sparkles key="sparkles" />];
  const displayIcon = icon || defaultIcons[index % defaultIcons.length];



  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${bgGradient} p-6 md:p-8 text-white shadow-lg`}
    >
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5">
        {/* Icon */}
        <div className="text-5xl flex-shrink-0">{displayIcon}</div>

        {/* Offer details */}
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className="text-white/80 font-body text-sm md:text-base mb-4">{description}</p>

          {/* Code & validity */}
          <div className="flex flex-wrap items-center gap-3">

            {validTill && (
              <span className="inline-flex items-center gap-1 text-white/70 text-xs font-body">
                <Clock size={12} />
                Valid till {new Date(validTill).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <WhatsAppButton variant="primary" className="!bg-white !text-primary hover:!bg-cream" />
        </div>
      </div>
    </motion.div>
  );
};

const SpecialOffers = () => {
  const { offers } = useAppContext();

  if (!offers || offers.length === 0) return null;

  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <SectionTitle
          title="Special Offers"
          subtitle="Don't miss out on these amazing deals. Grab them before they're gone!"
        />

        {/* Desktop stack */}
        <div className="hidden md:flex md:flex-col space-y-5">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {offers.map((offer, index) => (
            <div key={offer.id} className="flex-shrink-0 w-[85vw] snap-center">
              <OfferCard offer={offer} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
