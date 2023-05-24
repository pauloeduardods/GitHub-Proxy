import ApiError from './ApiError';

export default class GitHubUtils {
  static isValidGithubAEUsername(username: string): void {
    if (!username) throw new ApiError(400, 'Username is required');
    const regex = /^[a-z0-9-]+$/i;
    if (!regex.test(username)) {
      throw new ApiError(400, 'Invalid username');
    }
  }
}
