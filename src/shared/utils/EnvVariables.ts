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

  static checkEnvVariables() {
    this.getServerPort();
    this.getApiKey();
  }
}
