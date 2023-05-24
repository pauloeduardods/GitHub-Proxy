import express from 'express';

import routesV1 from './routes';

const router = express.Router();

router.use('/users', routesV1);

export default router;
