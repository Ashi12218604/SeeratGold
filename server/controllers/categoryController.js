import Category from '../models/Category.js';
import Product from '../models/Product.js';

/**
 * @desc    Get all categories
 * @route   GET /api/categories
 */
export const getCategories = async (_req, res, next) => {
  try {
    const categories = await Category.find({ isActive: true })
      .sort({ sortOrder: 1, name: 1 })
      .lean();

    res.json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single category by slug with populated products
 * @route   GET /api/categories/:slug
 */
export const getCategoryBySlug = async (req, res, next) => {
  try {
    const category = await Category.findOne({
      slug: req.params.slug,
      isActive: true,
    }).lean();

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found',
      });
    }

    const products = await Product.find({
      category: category._id,
      isActive: true,
    })
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    res.json({
      success: true,
      data: { ...category, products },
    });
  } catch (error) {
    next(error);
  }
};
