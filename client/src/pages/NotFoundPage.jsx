import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
           <span className="font-display font-bold text-4xl text-primary">404</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="font-body text-charcoal-light mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
