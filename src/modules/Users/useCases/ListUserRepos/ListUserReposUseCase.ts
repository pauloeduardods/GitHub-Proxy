import { inject, injectable } from 'tsyringe';
import { IGitHubService } from '@shared/service';
import { IListUserReposUseCase, IListUserReposUseCaseParams } from './IListUserReposUseCase';
import GitHubUtils from '@shared/utils/Github';

@injectable()
export default class ListUserReposUseCase implements IListUserReposUseCase {
  constructor(
    @inject('GitHubService')
    private gitHubService: IGitHubService,
  ) {}

  async run(params: IListUserReposUseCaseParams) {
    const { username } = params;
    GitHubUtils.isValidGithubAEUsername(username);
    const users = await this.gitHubService.listUserRepos(username);
    return users;
  }
}
