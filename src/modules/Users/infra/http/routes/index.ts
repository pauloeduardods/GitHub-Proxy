import { Router } from 'express';
import { container } from 'tsyringe';
import { JoiValidator } from '@shared/infra/http/middleware';
import { GetDetailsController, ListController, ListUserReposController } from '../controllers';
import * as Schemas from '../schemas';

const router = Router();

const listController = container.resolve(ListController);
router.get('/', listController.handle.bind(listController));

const getDetailsController = container.resolve(GetDetailsController);
router.get(
  '/:username/details',
  JoiValidator.run(Schemas.GetDetailsSchema),
  getDetailsController.handle.bind(getDetailsController),
);

const listUserReposController = container.resolve(ListUserReposController);
router.get(
  '/:username/repos',
  JoiValidator.run(Schemas.ListUserReposSchema),
  listUserReposController.handle.bind(listUserReposController),
);

export default router;
