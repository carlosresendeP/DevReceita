import express from 'express';
import { askRevenue } from '../controllers/revenue.controller.js';

const router = express.Router();

router.post('/perguntar', askRevenue);

export default router;