/**
 * Site-wide constants for Seerat Gold
 * Central source of truth for navigation, categories, and site metadata
 */

// Site metadata
export const SITE_NAME = 'Seerat Gold';
export const SITE_TAGLINE = 'Pure by Origin. Rich by Nature.';
export const SITE_DESCRIPTION = 'Premium quality spices sourced directly from native growing regions. Experience the authentic taste of India with Seerat Gold.';

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Combos', path: '/combos' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// Product categories
export const CATEGORIES = [
  {
    id: 'whole-spices',
    name: 'Whole Spices',
    slug: 'whole-spices',
    description: 'Handpicked whole spices that retain their full aroma and potency.',
    productCount: 8,
    image: '/images/categories/placeholder.png',
  },
  {
    id: 'bestsellers',
    name: 'Bestsellers',
    slug: 'bestsellers',
    description: 'Our most loved and highly rated products.',
    productCount: 3,
    image: '/images/categories/placeholder.png',
  },
  {
    id: 'essentials',
    name: 'Essentials',
    slug: 'essentials',
    description: 'Everyday spices that form the heart of Indian cooking.',
    productCount: 6,
    image: '/images/categories/placeholder.png',
  },
  {
    id: 'specials',
    name: 'Specials',
    slug: 'specials',
    description: 'Specialty spices and powders for that extra flavor.',
    productCount: 6,
    image: '/images/categories/placeholder.png',
  },
];

// Product Inventory
export const PRODUCTS = [
  // Whole Spices
  { id: 1, name: 'Jeera (Whole)', slug: 'jeera-whole', category: 'whole-spices', image: '/images/products/jeera.png' },
  { id: 2, name: 'Ajwain', slug: 'ajwain', category: 'whole-spices', image: '/images/products/ajwain.jpg' },
  { id: 3, name: 'Saunf Moti', slug: 'saunf-moti', category: 'whole-spices', image: '/images/products/saunf.jpg' },
  { id: 4, name: 'Laung', slug: 'laung', category: 'whole-spices', image: '/images/products/laung.png' },
  { id: 5, name: 'Elaichi', slug: 'elaichi', category: 'whole-spices', image: '/images/products/elaichi.png' },
  { id: 6, name: 'Black Pepper (Whole)', slug: 'black-pepper-whole', category: 'whole-spices', image: '/images/products/kali-mirch.png' },
  { id: 7, name: 'Methi Dana', slug: 'methi-dana', category: 'whole-spices', image: '/images/products/methi-dana.jpg' },
  { id: 8, name: 'Garam Masala (Whole)', slug: 'garam-masala-whole', category: 'whole-spices', image: '/images/products/placeholder.png' },

  // Bestsellers
  { id: 9, name: 'Hing Bandhani', slug: 'hing-bandhani', category: 'bestsellers', image: '/images/products/placeholder.png' },
  { id: 10, name: 'Hing Raw', slug: 'hing-raw', category: 'bestsellers', image: '/images/products/placeholder.png' },
  { id: 11, name: 'Kasuri Methi', slug: 'kasuri-methi', category: 'bestsellers', image: '/images/products/kasuri-methi.png' },

  // Essentials
  { id: 12, name: 'Haldi Powder', slug: 'haldi-powder', category: 'essentials', image: '/images/products/turmeric.png' },
  { id: 13, name: 'Dhania Powder', slug: 'dhania-powder', category: 'essentials', image: '/images/products/corriander-powder.png' },
  { id: 14, name: 'Mirch Powder', slug: 'mirch-powder', category: 'essentials', image: '/images/products/mirchi.png' },
  { id: 15, name: 'Kuti Mirch Powder', slug: 'kuti-mirch-powder', category: 'essentials', image: '/images/products/kuti-mirch.jpg' },
  { id: 16, name: 'Garam Masala', slug: 'garam-masala', category: 'essentials', image: '/images/products/garam-masala.png' },
  { id: 17, name: 'Sabji Masala', slug: 'sabji-masala', category: 'essentials', image: '/images/products/sabji-masala.png' },

  // Specials
  { id: 18, name: 'Amchur Powder', slug: 'amchur-powder', category: 'specials', image: '/images/products/dry-mango-powder.png' },
  { id: 19, name: 'Jeera Powder', slug: 'jeera-powder', category: 'specials', image: '/images/products/jeera-powder.png' },
  { id: 20, name: 'Kashmiri Mirch', slug: 'kashmiri-mirch', category: 'specials', image: '/images/products/kasmiri-mirch.png' },
  { id: 21, name: 'Dry Ginger', slug: 'dry-ginger', category: 'specials', image: '/images/products/ginger-powder.png' },
  { id: 22, name: 'Black Pepper (Powder)', slug: 'black-pepper-powder', category: 'specials', image: '/images/products/black-pepper.png' },
  { id: 23, name: 'Saunf Powder', slug: 'saunf-powder', category: 'specials', image: '/images/products/saunf-powder.jpg' },
];

// Demo combo packs
export const COMBOS = [
  {
    id: 'everyday-essentials',
    name: 'Everyday Essentials Combo',
    slug: 'everyday-essentials',
    description: 'The fundamental spices for every Indian kitchen.',
    image: '/images/combos/everyday_essentials.jpg',
    products: ['Haldi Powder', 'Dhania Powder', 'Mirch Powder', 'Garam Masala'],
    price: 299,
    mrp: 400,
    savings: 101,
  },
  {
    id: 'tadka-combo',
    name: 'Tadka Combo',
    slug: 'tadka-combo',
    description: 'Perfect for the ultimate tempering and finishing flavors.',
    image: '/images/combos/tadka-combo.jpg',
    products: ['Hing Raw', 'Kashmiri Mirch', 'Jeera (Whole)'],
    price: 349,
    mrp: 450,
    savings: 101,
  },
  {
    id: 'punjabi-combo',
    name: 'Punjabi Combo',
    slug: 'punjabi-combo',
    description: 'Authentic flavors for rich Punjabi dishes.',
    image: '/images/combos/punjabi.jpg',
    products: ['Mirch Powder', 'Amchur Powder', 'Dhania Powder', 'Jeera (Whole)'],
    price: 399,
    mrp: 500,
    savings: 101,
  },
  {
    id: 'trio-combo',
    name: 'Trio Combo',
    slug: 'trio-combo',
    description: 'The classic Indian spice trinity.',
    image: '/images/combos/triocombo.jpg',
    products: ['Haldi Powder', 'Dhania Powder', 'Mirch Powder'],
    price: 199,
    mrp: 250,
    savings: 51,
  },
  {
    id: 'all-purpose-masala',
    name: 'All Purpose Masala',
    slug: 'all-purpose-masala',
    description: 'Versatile blended masalas for everyday cooking.',
    image: '/images/combos/allpurpose.jpg',
    products: ['Sabji Masala', 'Garam Masala'],
    price: 149,
    mrp: 180,
    savings: 31,
  },
];

// Contact info
export const CONTACT_INFO = {
  phone: '+91 92585 65788',
  whatsapp: '+91 92585 65788',
  whatsappLink: 'https://wa.me/message/3SAEESWTZ7RWP1',
  email: 'snvlaghudyog01@gmail.com',
  address: 'Seerat Gold, Bhandari Bagh, Dehradun, Uttarakhand 248001',
  mapQuery: 'Garg Departmental Store, Bhandari Bagh, Dehradun, Uttarakhand 248001',
  workingHours: 'Mon - Sat: 10:00 AM - 8:00 PM',
};

// Social links (demo)
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/seeratgold',
  facebook: 'https://facebook.com/seeratgold',
  youtube: 'https://youtube.com/@seeratgold',
};
