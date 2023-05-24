import { Request, Response, NextFunction } from 'express';
import { ApiError, EnvVariables } from '@shared/utils';

export default class AuthHandler {
  static apiKeyAuth(req: Request, _res: Response, next: NextFunction) {
    const apiKey = req.get('X-API-KEY');
    if (!apiKey) {
      return next(new ApiError(400, 'X-API-KEY header not provided'));
    }

    const { key } = EnvVariables.getApiKey();

    if (apiKey !== key) {
      return next(new ApiError(401, 'Invalid API Key'));
    }

    next();
  }
}
