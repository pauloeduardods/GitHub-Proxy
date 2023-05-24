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

  private parseLinkHeaderForNext(linkHeader: string): string | null {
    if (!linkHeader) return null;

    const links = linkHeader.split(',').map((link: string) => {
      const [url, rel] = link.split(';');
      const cleanUrl = url.replace(/<|>/g, '').trim();
      const cleanRel = rel.replace(/rel="|"/g, '').trim();

      return { [cleanRel]: cleanUrl };
    });

    const nextLink = links.find((link) => link.hasOwnProperty('next'));
    return nextLink ? nextLink['next'] : null;
  }

  async listUsers(since = 0) {
    const response = await this.github.get('/users', { params: { since } });
    const nextLink = this.parseLinkHeaderForNext(response.headers.link);

    return {
      data: response.data,
      nextLink,
    };
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
