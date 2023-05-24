import { GitHubRepo, IGitHubUser } from '@shared/types';

export interface IGitHubService {
  listUsers(): Promise<IGitHubUser[]>;
  getUser(username: string): Promise<IGitHubUser>;
  listUserRepos(username: string): Promise<GitHubRepo[]>;
}
