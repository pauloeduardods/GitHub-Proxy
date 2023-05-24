import { inject, singleton } from 'tsyringe';
import { Request, Response, NextFunction } from 'express';
import { IListUserReposUseCase } from '../../../../useCases';

@singleton()
export default class ListUserReposController {
  constructor(
    @inject('ListUserReposUseCase') private listUserReposUseCase: IListUserReposUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;
    try {
      const result = await this.listUserReposUseCase.run({ username });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
