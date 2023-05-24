import 'reflect-metadata';
import 'dotenv/config';
import '@shared/containers';
import '@modules/Users/containers';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import PagesRoutes from '@shared/infra/http/pages';
import Routes from '@modules';
import { ErrorHandler, MorganMiddleware } from '@shared/infra/http/middleware';
import Logger from '@shared/utils/Logger';
import { EnvVariables } from '@shared/utils';

EnvVariables.checkEnvVariables();

export const app = express();

app.use(cors({ exposedHeaders: ['X-Total-Count'] }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(MorganMiddleware);

app.use('/api', Routes);
app.use('/', PagesRoutes);

app.use(ErrorHandler);

const port = EnvVariables.getServerPort();
app.listen(port, () => {
  Logger.info(`Server running on port ${port}`);
});
