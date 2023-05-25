import { IGitHubUser } from '../../../../shared/types';

export interface IGetDetailsUseCaseParams {
  username: string;
}

export interface IGetDetailsUseCase {
  run(params: IGetDetailsUseCaseParams): Promise<IGitHubUser>;
}
