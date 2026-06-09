import Setting from '../models/Setting.js';

/**
 * @desc    Get all settings
 * @route   GET /api/settings
 * @query   group (optional) - filter by group
 */
export const getSettings = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.group) filter.group = req.query.group;

    const settings = await Setting.find(filter).sort({ key: 1 }).lean();

    // Also return as a convenient key-value map
    const map = {};
    settings.forEach((s) => {
      map[s.key] = s.value;
    });

    res.json({ success: true, count: settings.length, data: settings, map });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single setting by key
 * @route   GET /api/settings/:key
 */
export const getSettingByKey = async (req, res, next) => {
  try {
    const setting = await Setting.findOne({ key: req.params.key }).lean();

    if (!setting) {
      return res.status(404).json({
        success: false,
        message: `Setting "${req.params.key}" not found`,
      });
    }

    res.json({ success: true, data: setting });
  } catch (error) {
    next(error);
  }
};
