import Offer from '../models/Offer.js';

/**
 * @desc    Get active offers (currently valid)
 * @route   GET /api/offers
 */
export const getActiveOffers = async (_req, res, next) => {
  try {
    const now = new Date();

    const offers = await Offer.find({
      isActive: true,
      $or: [
        { validFrom: { $lte: now }, validUntil: { $gte: now } },
        { validFrom: null, validUntil: null },
        { validFrom: { $lte: now }, validUntil: null },
        { validFrom: null, validUntil: { $gte: now } },
      ],
    })
      .populate('applicableProducts', 'name slug')
      .populate('applicableCategories', 'name slug')
      .sort({ createdAt: -1 })
      .lean();

    res.json({ success: true, count: offers.length, data: offers });
  } catch (error) {
    next(error);
  }
};
