import { env } from 'process';

export default class EnvVariables {
  static getServerPort() {
    const envVariable = env.APP_SERVER_PORT;
    if (!envVariable) throw new Error('Env variable APP_SERVER_PORT not found.');
    return envVariable;
  }

  static getApiKey() {
    const apiKey = env.API_KEY;
    if (!apiKey) throw new Error('Env variable API_KEY not found.');
    return { key: apiKey };
  }

  static getGithubToken() {
    const githubToken = env.GH_TOKEN;
    if (!githubToken) throw new Error('Env variable GH_TOKEN not found.');
    return { token: githubToken };
  }

  static checkEnvVariables() {
    this.getServerPort();
    this.getApiKey();
    this.getGithubToken();
  }
}
