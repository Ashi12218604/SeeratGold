import Combo from '../models/Combo.js';

/**
 * @desc    Get all combos
 * @route   GET /api/combos
 */
export const getCombos = async (_req, res, next) => {
  try {
    const combos = await Combo.find({ isActive: true })
      .populate('products', 'name nameHi slug images weightOptions')
      .sort({ createdAt: -1 })
      .lean();

    res.json({ success: true, count: combos.length, data: combos });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single combo by slug with populated products
 * @route   GET /api/combos/:slug
 */
export const getComboBySlug = async (req, res, next) => {
  try {
    const combo = await Combo.findOne({
      slug: req.params.slug,
      isActive: true,
    })
      .populate('products', 'name nameHi slug images weightOptions category')
      .lean();

    if (!combo) {
      return res.status(404).json({
        success: false,
        message: 'Combo not found',
      });
    }

    res.json({ success: true, data: combo });
  } catch (error) {
    next(error);
  }
};
