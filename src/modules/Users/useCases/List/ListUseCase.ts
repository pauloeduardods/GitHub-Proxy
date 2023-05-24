import { inject, injectable } from 'tsyringe';
import { IGitHubService } from '@shared/service';
import { IListUseCase } from './IListUseCase';

@injectable()
export default class ListUseCase implements IListUseCase {
  constructor(
    @inject('GitHubService')
    private gitHubService: IGitHubService,
  ) {}

  async run() {
    const users = await this.gitHubService.listUsers();
    return users;
  }
}
