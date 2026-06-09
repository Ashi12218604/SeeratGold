import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import StoryJourney from '../components/home/StoryJourney';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ComboPacks from '../components/home/ComboPacks';
import SpecialOffers from '../components/home/SpecialOffers';
import WhySeeratGold from '../components/home/WhySeeratGold';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Seerat Gold | Pure by Origin. Rich by Nature.</title>
        <meta name="description" content="Premium authentic Indian spices sourced from their native regions." />
      </Helmet>
      
      <HeroSection />
      <StoryJourney />
      <CategoriesSection />
      <FeaturedProducts />
      <ComboPacks />
      <SpecialOffers />
      <WhySeeratGold />
      <ContactSection />
    </>
  );
};

export default HomePage;
