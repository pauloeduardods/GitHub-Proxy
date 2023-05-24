import { inject, singleton } from 'tsyringe';
import { Request, Response, NextFunction } from 'express';
import { IListUseCase } from '../../../../useCases';

@singleton()
export default class ListController {
  constructor(@inject('ListUseCase') private listUseCase: IListUseCase) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    const { since } = req.query;
    //TODO: since is not being used
    try {
      const result = await this.listUseCase.run();

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
