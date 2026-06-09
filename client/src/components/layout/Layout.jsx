import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col pt-8">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;

