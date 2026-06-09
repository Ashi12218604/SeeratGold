import { Router } from 'express';
import { getCombos, getComboBySlug } from '../controllers/comboController.js';

const router = Router();

router.get('/', getCombos);
router.get('/:slug', getComboBySlug);

export default router;
