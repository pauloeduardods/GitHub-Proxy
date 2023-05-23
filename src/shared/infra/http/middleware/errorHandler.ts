import { Request, Response, NextFunction } from 'express';

import { ApiError } from '@shared/utils';
import Logger from '@shared/utils/Logger';

type HandledError = ApiError | Error;

const isDev = process.env.NODE_ENV === 'development';
const isLocal = process.env.NODE_ENV === 'local';

const errorHandler = (err: HandledError, _req: Request, res: Response, _next: NextFunction) => {
  if (isLocal) {
    console.error(err);
  }

  Logger.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({
    message: isDev || isLocal ? err.message : 'Something went wrong',
  });
};

export default errorHandler;
