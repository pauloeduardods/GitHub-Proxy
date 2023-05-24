import express from 'express';

import UserRoutes from './Users/infra/http';

const router = express.Router();

router.use('/', UserRoutes);

export default router;
