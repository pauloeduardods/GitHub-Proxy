import { Router } from 'express';
import notFound from './404';
import status from './health';

const router = Router();

router.use('/', status);
router.use('/', notFound);

export default router;
