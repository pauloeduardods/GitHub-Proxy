import { IGitHubUser } from '@shared/types';

export interface IListUseCase {
  run(): Promise<IGitHubUser[]>;
}
