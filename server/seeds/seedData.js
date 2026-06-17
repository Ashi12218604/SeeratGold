import 'dotenv/config';
import mongoose from 'mongoose';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import Combo from '../models/Combo.js';
import Offer from '../models/Offer.js';
import Setting from '../models/Setting.js';

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */
const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/* ------------------------------------------------------------------ */
/*  Seed data                                                          */
/* ------------------------------------------------------------------ */

const categoriesData = [
  {
    name: 'Ground Spices',
    nameHi: 'पिसे मसाले',
    slug: 'ground-spices',
    description: 'Authentic Indian masalas, ground to perfection.',
    icon: '🌿',
    sortOrder: 1,
  },
  {
    name: 'Whole Spices',
    nameHi: 'साबुत मसाले',
    slug: 'whole-spices',
    description: 'Pure, unadulterated whole spices direct from the source.',
    icon: '🌶️',
    sortOrder: 2,
  },
  {
    name: 'Premium Spices',
    nameHi: 'प्रीमियम मसाले',
    slug: 'premium-spices',
    description: 'The finest selection of rare and premium spices.',
    icon: '⭐',
    sortOrder: 3,
  },
  {
    name: 'Blended Spices',
    nameHi: 'मिश्रित मसाले',
    slug: 'blended-spices',
    description: 'Perfectly balanced blends for your favorite dishes.',
    icon: '🍛',
    sortOrder: 4,
  },
];

const productsData = [
  // --- GROUND SPICES ---
  {
    name: 'Jeera Powder',
    category: 'special-grinds',
    description: 'Premium roasted cumin powder for enhanced flavor.',
    tags: ['essential', 'cumin'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 46 }, { weight: '100g', price: 86 }],
  },
  {
    name: 'Amchur Powder',
    category: 'special-grinds',
    description: 'Tangy dry mango powder, perfect for adding a sour kick.',
    tags: ['tangy', 'mango'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 46 }, { weight: '100g', price: 88 }],
  },
  {
    name: 'Kashmiri Mirch',
    category: 'special-grinds',
    description: 'Vibrant red color with a mild, sweet heat.',
    tags: ['mild', 'color', 'chilli'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 68 }, { weight: '100g', price: 130 }],
  },
  {
    name: 'Ginger Powder',
    category: 'special-grinds',
    description: 'Warm and spicy dry ginger powder.',
    tags: ['warm', 'spice'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 46 }, { weight: '100g', price: 88 }],
  },
  {
    name: 'Black Pepper',
    category: 'special-grinds',
    description: 'Finely ground sharp and biting black pepper.',
    tags: ['sharp', 'essential'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 104 }, { weight: '100g', price: 205 }],
  },
  {
    name: 'Saunf Powder',
    category: 'special-grinds',
    description: 'Sweet and aromatic fennel powder.',
    tags: ['sweet', 'fennel'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 43 }, { weight: '100g', price: 80 }],
  },
  {
    name: 'Sabji Masala',
    category: 'blended-spices',
    description: 'A perfect everyday blend for mixed vegetable dishes.',
    tags: ['blend', 'everyday'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 47 }, { weight: '100g', price: 87 }],
  },
  {
    name: 'Garam Masala',
    category: 'blended-spices',
    description: 'A robust and warm blend of whole spices.',
    tags: ['blend', 'warm'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 66 }, { weight: '100g', price: 126 }],
  },
  {
    name: 'Haldi Powder',
    category: 'special-grinds',
    description: 'Pure, rich yellow turmeric powder with high curcumin content.',
    tags: ['essential', 'turmeric'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 30 }, { weight: '100g', price: 55 }, { weight: '200g', price: 104 }, { weight: '500g', price: 250 }],
  },
  {
    name: 'Dhania Powder',
    category: 'special-grinds',
    description: 'Freshly ground coriander seeds for a citrusy, earthy flavor.',
    tags: ['essential', 'coriander'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 28 }, { weight: '100g', price: 50 }, { weight: '200g', price: 90 }, { weight: '500g', price: 215 }],
  },
  {
    name: 'Mirch Powder',
    category: 'special-grinds',
    description: 'Hot and spicy red chilli powder.',
    tags: ['hot', 'chilli'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 36 }, { weight: '100g', price: 68 }, { weight: '200g', price: 128 }, { weight: '500g', price: 315 }],
  },
  {
    name: 'Kuti Mirch',
    category: 'special-grinds',
    description: 'Coarsely crushed red chillies for texture and heat.',
    tags: ['crushed', 'hot', 'chilli'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 36 }, { weight: '100g', price: 68 }, { weight: '200g', price: 128 }, { weight: '500g', price: 315 }],
  },

  // --- WHOLE SPICES ---
  {
    name: 'Jeera (Whole)',
    category: 'whole-spices',
    description: 'Premium whole cumin seeds with robust earthy flavor.',
    tags: ['whole', 'cumin'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 35 }, { weight: '100g', price: 65 }],
  },
  {
    name: 'Ajwain',
    category: 'whole-spices',
    description: 'Aromatic carom seeds known for digestion benefits.',
    tags: ['whole', 'carom'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 42 }, { weight: '100g', price: 80 }],
  },
  {
    name: 'Saunf',
    category: 'whole-spices',
    description: 'Sweet and fragrant whole fennel seeds.',
    tags: ['whole', 'fennel'],
    isFeatured: false,
    weightOptions: [{ weight: '100g', price: 80 }],
  },
  {
    name: 'Laung',
    category: 'whole-spices',
    description: 'Strong, pungent whole cloves.',
    tags: ['whole', 'cloves', 'strong'],
    isFeatured: false,
    weightOptions: [{ weight: '25g', price: 80 }],
  },
  {
    name: 'Elaichi',
    category: 'whole-spices',
    description: 'Premium green cardamom pods, sweet and aromatic.',
    tags: ['premium', 'whole', 'cardamom'],
    isFeatured: true,
    weightOptions: [{ weight: '25g', price: 188 }],
  },
  {
    name: 'Kali Mirch (Whole)',
    category: 'whole-spices',
    description: 'Sharp, unadulterated whole black peppercorns.',
    tags: ['whole', 'pepper'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 108 }],
  },
  {
    name: 'Tej Patta',
    category: 'whole-spices',
    description: 'Aromatic Indian bay leaves.',
    tags: ['whole', 'leaves'],
    isFeatured: false,
    weightOptions: [{ weight: '25g', price: 24 }],
  },
  {
    name: 'Kasuri Methi',
    category: 'whole-spices',
    description: 'Dried fenugreek leaves for a rich, savory aroma.',
    tags: ['leaves', 'fenugreek'],
    isFeatured: true,
    weightOptions: [{ weight: '25g', price: 25 }, { weight: '50g', price: 46 }, { weight: '100g', price: 84 }],
  },
  {
    name: 'Methi Dana',
    category: 'whole-spices',
    description: 'Bitter yet flavorful whole fenugreek seeds.',
    tags: ['whole', 'fenugreek'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 16 }, { weight: '100g', price: 28 }],
  },
  {
    name: 'Kalaunji',
    category: 'whole-spices',
    description: 'Nigella seeds with a unique onion-like flavor.',
    tags: ['whole', 'nigella'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 34 }, { weight: '100g', price: 64 }],
  },
  {
    name: 'Kali Sarsom',
    category: 'whole-spices',
    description: 'Pungent black mustard seeds.',
    tags: ['whole', 'mustard'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 15 }, { weight: '100g', price: 25 }],
  },
  {
    name: 'Khas Khas',
    category: 'whole-spices',
    description: 'Premium poppy seeds for a nutty flavor and thick gravies.',
    tags: ['premium', 'poppy'],
    isFeatured: true,
    weightOptions: [{ weight: '50g', price: 160 }, { weight: '100g', price: 308 }],
  },
  {
    name: 'Alsi Seeds',
    category: 'whole-spices',
    description: 'Nutritious flax seeds.',
    tags: ['whole', 'flax'],
    isFeatured: false,
    weightOptions: [{ weight: '50g', price: 20 }, { weight: '100g', price: 35 }],
  },
  {
    name: 'Bandhani Hing',
    category: 'whole-spices',
    description: 'Strong, premium quality asafoetida.',
    tags: ['premium', 'asafoetida', 'hing'],
    isFeatured: true,
    weightOptions: [{ weight: '25g', price: 110 }, { weight: '50g', price: 210 }, { weight: '100g', price: 400 }],
  }
];

const settingsData = [
  { key: 'whatsapp', value: '00000000000', group: 'contact' },
  { key: 'email', value: 'info@seeratgold.com', group: 'contact' },
  { key: 'phone', value: '00000000000', group: 'contact' },
  { key: 'address', value: 'Demo Address', group: 'contact' },
  { key: 'site_name', value: 'Seerat Gold', group: 'general' },
  { key: 'tagline', value: 'Pure by Origin. Rich by Nature.', group: 'general' },
];

/* ------------------------------------------------------------------ */
/*  Runner                                                             */
/* ------------------------------------------------------------------ */

const seed = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/seeratgold';
    await mongoose.connect(uri);
    console.log('✅  Connected to MongoDB');

    /* ---------- Clear existing data ---------- */
    await Promise.all([
      Category.deleteMany({}),
      Product.deleteMany({}),
      Combo.deleteMany({}),
      Offer.deleteMany({}),
      Setting.deleteMany({}),
    ]);
    console.log('🗑️   Cleared existing data');

    /* ---------- Categories ---------- */
    const categories = await Category.insertMany(categoriesData);
    console.log(`📁  Inserted ${categories.length} categories`);

    // Build slug → _id map
    const catMap = {};
    categories.forEach((c) => {
      catMap[c.slug] = c._id;
    });

    /* ---------- Products ---------- */
    const productDocs = productsData.map((p) => ({
      ...p,
      slug: toSlug(p.name),
      category: catMap[p.category],
      images: [`/images/products/${toSlug(p.name)}.jpg`],
      seoTitle: `${p.name} – Seerat Gold`,
      seoDescription: p.description,
    }));

    const products = await Product.insertMany(productDocs);
    console.log(`🌶️   Inserted ${products.length} products`);

    /* ---------- Combos ---------- */
    const combosData = [
      {
        name: 'All Purpose Combo (Everyday Essential)',
        slug: 'all-purpose-combo',
        description: 'The everyday essential spices for your kitchen.',
        products: products
          .filter((p) =>
            ['haldi-powder', 'mirch-powder', 'dhania-powder', 'garam-masala', 'sabji-masala'].includes(p.slug)
          )
          .map((p) => p._id),
        images: ['/images/combos/all-purpose.jpeg'],
        price: 349,
        mrp: 450,
        tags: ['starter', 'essential'],
        isFeatured: true,
      },
      {
        name: 'Tadka Combo',
        slug: 'tadka-combo',
        description: 'Perfect for the ultimate tempering and finishing flavors.',
        products: products
          .filter((p) =>
            ['bandhani-hing', 'kashmiri-mirch', 'jeera-whole'].includes(p.slug)
          )
          .map((p) => p._id),
        images: ['/images/combos/tadka-combo.jpeg'],
        price: 349,
        mrp: 450,
        tags: ['premium', 'blend'],
        isFeatured: true,
      },
      {
        name: 'Trio Combo',
        slug: 'trio-combo',
        description: 'The classic Indian spice trinity.',
        products: products
          .filter((p) =>
            ['haldi-powder', 'dhania-powder', 'mirch-powder'].includes(p.slug)
          )
          .map((p) => p._id),
        images: ['/images/combos/trio-combo.jpeg'],
        price: 199,
        mrp: 250,
        tags: ['starter', 'essential'],
        isFeatured: false,
      },
    ];

    const combos = await Combo.insertMany(combosData);
    console.log(`📦  Inserted ${combos.length} combos`);

    /* ---------- Offers ---------- */
    const offersData = [
      {
        title: 'Flat 15% Off',
        description: 'Get a flat 15% discount on all individual spice orders.',
        type: 'percentage',
        value: 15,
        applicableProducts: [],
        applicableCategories: [],
        validFrom: new Date('2025-01-01'),
        validUntil: new Date('2027-12-31'),
        isActive: true,
      },
      {
        title: 'Extra 5% Off Combos',
        description: 'Get an additional 5% off when you order any of our curated combo packs.',
        type: 'combo',
        value: 5,
        applicableProducts: [],
        applicableCategories: [],
        validFrom: new Date('2025-01-01'),
        validUntil: new Date('2027-12-31'),
        isActive: true,
      },
      {
        title: 'Free Trial Kit',
        description: 'Get a free Seerat Gold Trial Kit (worth Rs. 149) on orders above Rs. 999.',
        type: 'freebie',
        value: 0,
        applicableProducts: [],
        applicableCategories: [],
        validFrom: new Date('2025-01-01'),
        validUntil: new Date('2027-12-31'),
        isActive: true,
      },
    ];

    const offers = await Offer.insertMany(offersData);
    console.log(`🎁  Inserted ${offers.length} offers`);

    /* ---------- Settings ---------- */
    const settings = await Setting.insertMany(settingsData);
    console.log(`⚙️   Inserted ${settings.length} settings`);

    console.log('\n🎉  Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌  Seed failed:', error);
    process.exit(1);
  }
};

seed();



