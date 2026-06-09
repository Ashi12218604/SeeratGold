import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useProducts = () => {
  const { products, loading } = useContext(AppContext);

  const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug);
  };

  const getProductsByCategory = (categoryId) => {
    return products.filter(p => p.category === categoryId);
  };

  const searchProducts = (query) => {
    if (!query) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery)
    );
  };

  const featuredProducts = products.filter(p => p.isFeatured);

  return {
    products,
    loading,
    getProductBySlug,
    getProductsByCategory,
    searchProducts,
    featuredProducts
  };
};
