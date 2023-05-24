import { IListUseCaseResponse } from '@shared/types';

export interface IListUseCase {
  run(since?: number): Promise<IListUseCaseResponse>;
}
