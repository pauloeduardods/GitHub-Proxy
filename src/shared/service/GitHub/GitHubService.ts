import { injectable } from 'tsyringe';
import { IGitHubService } from './IGitHubService';
import axios from 'axios';
import { EnvVariables } from '../../utils';

@injectable()
export default class GitHubService implements IGitHubService {
  private github = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${EnvVariables.getGithubToken().token}`,
    },
  });

  async listUsers() {
    const response = await this.github.get('/users');
    return response.data;
  }

  async getUser(username: string) {
    const response = await this.github.get(`/users/${username}`);
    return response.data;
  }

  async listUserRepos(username: string) {
    const response = await this.github.get(`/users/${username}/repos`);
    return response.data;
  }
}
