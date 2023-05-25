import { inject, singleton } from 'tsyringe';
import { Request, Response, NextFunction } from 'express';
import { IListUseCase } from '../../../../useCases';

@singleton()
export default class ListController {
  constructor(@inject('ListUseCase') private listUseCase: IListUseCase) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    const { since } = req.query;

    try {
      const result = await this.listUseCase.run(since);

      res.setHeader('X-Total-Count', result.data.length ?? 0);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
