import { inject, injectable } from 'tsyringe';
import { IGitHubService } from '@/shared/service';
import { IGetDetailsUseCase, IGetDetailsUseCaseParams } from './IGetDetailsUseCase';
import GitHubUtils from '@/shared/utils/Github';

@injectable()
export default class GetDetailsUseCase implements IGetDetailsUseCase {
  constructor(
    @inject('GitHubService')
    private gitHubService: IGitHubService,
  ) {}

  async run(params: IGetDetailsUseCaseParams) {
    const { username } = params;
    GitHubUtils.isValidGithubAEUsername(username);
    const users = await this.gitHubService.getUser(username);
    return users;
  }
}
