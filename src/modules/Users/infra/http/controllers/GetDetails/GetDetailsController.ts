import { inject, singleton } from 'tsyringe';
import { Request, Response, NextFunction } from 'express';
import { IGetDetailsUseCase } from '../../../../useCases';

@singleton()
export default class DetailsController {
  constructor(@inject('GetDetailsUseCase') private detailsUseCase: IGetDetailsUseCase) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;
    try {
      const result = await this.detailsUseCase.run({ username });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
