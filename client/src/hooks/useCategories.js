import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useCategories = () => {
  const { categories, loading } = useContext(AppContext);

  const getCategoryBySlug = (slug) => {
    return categories.find(c => c.slug === slug);
  };

  return {
    categories,
    loading,
    getCategoryBySlug
  };
};
