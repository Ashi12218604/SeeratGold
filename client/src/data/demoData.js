// demoData.js
export const demoCategories = [
  {
    id: 'ground-spices',
    name: 'Ground Spices',
    slug: 'ground-spices',
    description: 'Authentic Indian masalas, ground to perfection.',
    image: '/images/categories/ground-spices.png'
  },
  {
    id: 'whole-spices',
    name: 'Whole Spices',
    slug: 'whole-spices',
    description: 'Pure, unadulterated whole spices direct from the source.',
    image: '/images/categories/whole-spices.png'
  },
  {
    id: 'blended-masalas',
    name: 'Blended Masalas',
    slug: 'blended-masalas',
    description: 'Perfectly balanced blends for your favorite dishes.',
    image: '/images/categories/blended-masalas.png'
  },
  {
    id: 'premium-spices',
    name: 'Premium Spices',
    slug: 'premium-spices',
    description: 'The finest selection of rare and premium spices.',
    image: '/images/categories/premium-spices.png'
  }
];

export const demoProducts = [
  // --- GROUND SPICES (from Excel price list) ---
  {
    id: 'p1',
    name: 'Jeera Powder',
    slug: 'jeera-powder',
    category: 'ground-spices',
    description: 'Premium roasted cumin powder for enhanced flavor.',
    image: '/images/products/jeera-powder.png',
    weightOptions: [{ weight: '50g', price: 46 }, { weight: '100g', price: 86 }],
    isFeatured: true,
    tags: ['essential', 'cumin']
  },
  {
    id: 'p2',
    name: 'Amchur Powder',
    slug: 'amchur-powder',
    category: 'ground-spices',
    description: 'Tangy dry mango powder, perfect for adding a sour kick.',
    image: '/images/products/dry-mango-powder.png',
    weightOptions: [{ weight: '50g', price: 46 }, { weight: '100g', price: 88 }],
    isFeatured: false,
    tags: ['tangy', 'mango']
  },
  {
    id: 'p3',
    name: 'Kashmiri Mirch',
    slug: 'kashmiri-mirch',
    category: 'ground-spices',
    description: 'Vibrant red color with a mild, sweet heat.',
    image: '/images/products/kasmiri-mirch.png',
    weightOptions: [{ weight: '50g', price: 68 }, { weight: '100g', price: 130 }],
    isFeatured: true,
    tags: ['mild', 'color', 'chilli']
  },
  {
    id: 'p4',
    name: 'Ginger Powder',
    slug: 'ginger-powder',
    category: 'ground-spices',
    description: 'Warm and spicy dry ginger powder.',
    image: '/images/products/ginger-powder.png',
    weightOptions: [{ weight: '50g', price: 46 }, { weight: '100g', price: 88 }],
    isFeatured: false,
    tags: ['warm', 'spice']
  },
  {
    id: 'p5',
    name: 'Black Pepper',
    slug: 'black-pepper',
    category: 'ground-spices',
    description: 'Finely ground sharp and biting black pepper.',
    image: '/images/products/black-pepper.png',
    weightOptions: [{ weight: '50g', price: 104 }, { weight: '100g', price: 205 }],
    isFeatured: true,
    tags: ['sharp', 'essential']
  },
  {
    id: 'p6',
    name: 'Saunf Powder',
    slug: 'saunf-powder',
    category: 'ground-spices',
    description: 'Sweet and aromatic fennel powder.',
    image: '/images/products/saunf-powder.jpeg',
    weightOptions: [{ weight: '50g', price: 43 }, { weight: '100g', price: 80 }],
    isFeatured: false,
    tags: ['sweet', 'fennel']
  },
  {
    id: 'p7',
    name: 'Sabji Masala',
    slug: 'sabji-masala',
    category: 'blended-masalas',
    description: 'A perfect everyday blend for mixed vegetable dishes.',
    image: '/images/products/sabji-masala.png',
    weightOptions: [{ weight: '50g', price: 47 }, { weight: '100g', price: 87 }],
    isFeatured: true,
    tags: ['blend', 'everyday']
  },
  {
    id: 'p8',
    name: 'Garam Masala',
    slug: 'garam-masala',
    category: 'blended-masalas',
    description: 'A robust and warm blend of whole spices.',
    image: '/images/products/garam-masala.png',
    weightOptions: [{ weight: '50g', price: 66 }, { weight: '100g', price: 126 }],
    isFeatured: true,
    tags: ['blend', 'warm']
  },
  {
    id: 'p9',
    name: 'Haldi Powder',
    slug: 'haldi-powder',
    category: 'ground-spices',
    description: 'Pure, rich yellow turmeric powder with high curcumin content.',
    image: '/images/products/turmeric.png',
    weightOptions: [{ weight: '50g', price: 30 }, { weight: '100g', price: 55 }, { weight: '200g', price: 104 }, { weight: '500g', price: 250 }],
    isFeatured: true,
    tags: ['essential', 'turmeric']
  },
  {
    id: 'p10',
    name: 'Dhania Powder',
    slug: 'dhania-powder',
    category: 'ground-spices',
    description: 'Freshly ground coriander seeds for a citrusy, earthy flavor.',
    image: '/images/products/corriander-powder.png',
    weightOptions: [{ weight: '50g', price: 28 }, { weight: '100g', price: 50 }, { weight: '200g', price: 90 }, { weight: '500g', price: 215 }],
    isFeatured: true,
    tags: ['essential', 'coriander']
  },
  {
    id: 'p11',
    name: 'Mirch Powder',
    slug: 'mirch-powder',
    category: 'ground-spices',
    description: 'Hot and spicy red chilli powder.',
    image: '/images/products/mirchi.png',
    weightOptions: [{ weight: '50g', price: 36 }, { weight: '100g', price: 68 }, { weight: '200g', price: 128 }, { weight: '500g', price: 315 }],
    isFeatured: false,
    tags: ['hot', 'chilli']
  },
  {
    id: 'p12',
    name: 'Kuti Mirch',
    slug: 'kuti-mirch',
    category: 'ground-spices',
    description: 'Coarsely crushed red chillies for texture and heat.',
    image: '/images/products/kuti-mirch.jpeg',
    weightOptions: [{ weight: '50g', price: 36 }, { weight: '100g', price: 68 }, { weight: '200g', price: 128 }, { weight: '500g', price: 315 }],
    isFeatured: false,
    tags: ['crushed', 'hot', 'chilli']
  },

  // --- WHOLE SPICES ---
  {
    id: 'p13',
    name: 'Jeera (Whole)',
    slug: 'jeera-whole',
    category: 'whole-spices',
    description: 'Premium whole cumin seeds with robust earthy flavor.',
    image: '/images/products/jeera.png',
    weightOptions: [{ weight: '50g', price: 35 }, { weight: '100g', price: 65 }],
    isFeatured: false,
    tags: ['whole', 'cumin']
  },
  {
    id: 'p14',
    name: 'Laung',
    slug: 'laung',
    category: 'whole-spices',
    description: 'Strong, pungent whole cloves.',
    image: '/images/products/laung.png',
    weightOptions: [{ weight: '25g', price: 80 }],
    isFeatured: false,
    tags: ['whole', 'cloves', 'strong']
  },
  {
    id: 'p15',
    name: 'Elaichi',
    slug: 'elaichi',
    category: 'premium-spices',
    description: 'Premium green cardamom pods, sweet and aromatic.',
    image: '/images/products/elaichi.png',
    weightOptions: [{ weight: '25g', price: 188 }],
    isFeatured: true,
    tags: ['premium', 'whole', 'cardamom']
  },
  {
    id: 'p16',
    name: 'Kali Mirch (Whole)',
    slug: 'kali-mirch-whole',
    category: 'whole-spices',
    description: 'Sharp, unadulterated whole black peppercorns.',
    image: '/images/products/kali-mirch.png',
    weightOptions: [{ weight: '50g', price: 108 }],
    isFeatured: false,
    tags: ['whole', 'pepper']
  },
  {
    id: 'p17',
    name: 'Tej Patta',
    slug: 'tej-patta',
    category: 'whole-spices',
    description: 'Aromatic Indian bay leaves.',
    image: '/images/products/tejpata.png',
    weightOptions: [{ weight: '25g', price: 24 }],
    isFeatured: false,
    tags: ['whole', 'leaves']
  },
  {
    id: 'p18',
    name: 'Kasuri Methi',
    slug: 'kasuri-methi',
    category: 'whole-spices',
    description: 'Dried fenugreek leaves for a rich, savory aroma.',
    image: '/images/products/kasuri-methi.png',
    weightOptions: [{ weight: '25g', price: 25 }, { weight: '50g', price: 46 }, { weight: '100g', price: 84 }],
    isFeatured: true,
    tags: ['leaves', 'fenugreek']
  },
  {
    id: 'p19',
    name: 'Methi Dana',
    slug: 'methi-dana',
    category: 'whole-spices',
    description: 'Bitter yet flavorful whole fenugreek seeds.',
    image: '/images/products/methi-dana.jpg',
    weightOptions: [{ weight: '50g', price: 16 }, { weight: '100g', price: 28 }],
    isFeatured: false,
    tags: ['whole', 'fenugreek']
  },
  {
    id: 'p20',
    name: 'Ajwain',
    slug: 'ajwain',
    category: 'whole-spices',
    description: 'Aromatic carom seeds known for digestion benefits.',
    image: '/images/products/ajwain.jpg',
    weightOptions: [{ weight: '50g', price: 42 }, { weight: '100g', price: 80 }],
    isFeatured: false,
    tags: ['whole', 'carom']
  },
  {
    id: 'p21',
    name: 'Saunf (Whole)',
    slug: 'saunf',
    category: 'whole-spices',
    description: 'Sweet and fragrant whole fennel seeds.',
    image: '/images/products/saunf.jpg',
    weightOptions: [{ weight: '100g', price: 80 }],
    isFeatured: false,
    tags: ['whole', 'fennel']
  },
  {
    id: 'p22',
    name: 'Kalaunji',
    slug: 'kalaunji',
    category: 'whole-spices',
    description: 'Nigella seeds with a unique onion-like flavor.',
    image: '/images/products/kalaunji.jpg',
    weightOptions: [{ weight: '50g', price: 34 }, { weight: '100g', price: 64 }],
    isFeatured: false,
    tags: ['whole', 'nigella']
  },
  {
    id: 'p23',
    name: 'Kali Sarsom',
    slug: 'kali-sarsom',
    category: 'whole-spices',
    description: 'Pungent black mustard seeds.',
    image: '/images/products/kali-sarson.jpg',
    weightOptions: [{ weight: '50g', price: 15 }, { weight: '100g', price: 25 }],
    isFeatured: false,
    tags: ['whole', 'mustard']
  },
  {
    id: 'p24',
    name: 'Alsi Seeds',
    slug: 'alsi-seeds',
    category: 'whole-spices',
    description: 'Nutritious flax seeds.',
    image: '/images/products/alsi-seeds.jpg',
    weightOptions: [{ weight: '50g', price: 20 }, { weight: '100g', price: 35 }],
    isFeatured: false,
    tags: ['whole', 'flax']
  },

  // --- PREMIUM SPICES ---
  {
    id: 'p25',
    name: 'Bandhani Hing',
    slug: 'bandhani-hing',
    category: 'premium-spices',
    description: 'Strong, premium quality asafoetida.',
    image: '/images/products/hing.png',
    weightOptions: [{ weight: '25g', price: 110 }, { weight: '50g', price: 210 }, { weight: '100g', price: 400 }],
    isFeatured: true,
    tags: ['premium', 'asafoetida', 'hing']
  },
  {
    id: 'p26',
    name: 'Khas Khas',
    slug: 'khas-khas',
    category: 'premium-spices',
    description: 'Premium poppy seeds for a nutty flavor and thick gravies.',
    image: '/images/products/khas-khas.jpg',
    weightOptions: [{ weight: '50g', price: 160 }, { weight: '100g', price: 308 }],
    isFeatured: true,
    tags: ['premium', 'poppy']
  }
];

export const demoCombos = [
  {
    id: 'all-purpose',
    name: 'All Purpose Combo (Everyday Essential)',
    slug: 'all-purpose',
    description: 'The everyday essential spices for your kitchen.',
    image: '/images/combos/all-purpose.jpeg',
    products: ['Haldi Powder', 'Dhania Powder', 'Mirch Powder', 'Garam Masala', 'Sabji Masala'],
    price: 349,
    mrp: 450,
    savings: 101,
  },
  {
    id: 'tadka-combo',
    name: 'Tadka Combo',
    slug: 'tadka-combo',
    description: 'Perfect for the ultimate tempering and finishing flavors.',
    image: '/images/combos/tadka-combo.jpeg',
    products: ['Hing Raw', 'Kashmiri Mirch', 'Jeera (Whole)'],
    price: 349,
    mrp: 450,
    savings: 101,
  },
  {
    id: 'trio-combo',
    name: 'Trio Combo',
    slug: 'trio-combo',
    description: 'The classic Indian spice trinity.',
    image: '/images/combos/trio-combo.jpeg',
    products: ['Haldi Powder', 'Dhania Powder', 'Mirch Powder'],
    price: 199,
    mrp: 250,
    savings: 51,
  }
];

export const demoOffers = [
  {
    id: 'o1',
    title: 'Flat 15% Off',
    description: 'Get a flat 15% discount on all individual spice orders.',
    code: 'SEERAT15',
    type: 'percentage'
  },
  {
    id: 'o2',
    title: 'Extra 5% Off Combos',
    description: 'Get an additional 5% off when you order any of our curated combo packs.',
    code: 'COMBO5',
    type: 'combo'
  },
  {
    id: 'o3',
    title: 'Free Trial Kit',
    description: 'Get a free Seerat Gold Trial Kit (worth Rs. 149) on all orders above Rs. 1100!',
    code: 'FREETRIAL',
    type: 'freebie'
  }
];
