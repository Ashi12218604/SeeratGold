import { Router } from 'express';
import { getActiveOffers } from '../controllers/offerController.js';

const router = Router();

router.get('/', getActiveOffers);

export default router;
