import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-16 bg-cream min-h-screen">
      <Helmet>
        <title>About Us | Seerat Gold</title>
        <meta name="description" content="The story behind Seerat Gold and our commitment to authentic spices." />
      </Helmet>

      <div className="section-padding section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
          <p className="font-body text-lg text-charcoal-light leading-relaxed">
            Seerat Gold was born from a simple yet powerful belief: the true magic of Indian cooking lies in the purity of its spices. We set out on a journey to source the finest ingredients directly from their native regions, where soil, climate, and tradition combine to create unparalleled flavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <img src="/images/story/sourcing.png" alt="Sourcing Spices" className="rounded-3xl shadow-card w-full object-cover h-[400px]" />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <h2 className="font-display text-3xl font-bold text-primary mb-4">Pure by Origin</h2>
                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                    Every spice has a home—a place where it grows best. We travel to these specific regions to procure our raw materials. From the vibrant turmeric fields to the aromatic cardamom plantations, our commitment to origin ensures authenticity in every pack. Our spices are cultivated naturally, with absolutely no pesticides or harsh chemicals.
                </p>
                <h2 className="font-display text-3xl font-bold text-primary mb-4">Rich by Nature</h2>
                <p className="font-body text-charcoal-light leading-relaxed">
                    We believe in minimal intervention. Our cleaning and processing methods are designed to preserve the natural oils, colors, aromas, and incredible medical benefits of the spices. What reaches your kitchen is nature's true flavor, 100% free of artificial preservatives.
                </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
