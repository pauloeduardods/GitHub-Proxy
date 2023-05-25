import { GitHubRepo } from '../../../../shared/types';

export interface IListUserReposUseCaseParams {
  username: string;
}

export interface IListUserReposUseCase {
  run(params: IListUserReposUseCaseParams): Promise<GitHubRepo[]>;
}
