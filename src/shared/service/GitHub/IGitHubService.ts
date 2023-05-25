import { GitHubRepo, IGitHubUser, IListUseCaseResponse } from '../../../shared/types';

export interface IGitHubService {
  listUsers(since?: number): Promise<IListUseCaseResponse>;
  getUser(username: string): Promise<IGitHubUser>;
  listUserRepos(username: string): Promise<GitHubRepo[]>;
}
