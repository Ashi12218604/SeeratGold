import { Router } from 'express';
import {
  getSettings,
  getSettingByKey,
} from '../controllers/settingController.js';

const router = Router();

router.get('/', getSettings);
router.get('/:key', getSettingByKey);

export default router;
