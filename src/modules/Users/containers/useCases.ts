import { container } from 'tsyringe';

import {
  GetDetailsUseCase,
  ListUseCase,
  ListUserReposUseCase,
  IGetDetailsUseCase,
  IListUseCase,
  IListUserReposUseCase,
} from '@modules/Users/useCases';

container.registerSingleton<IListUseCase>('ListUseCase', ListUseCase);
container.registerSingleton<IGetDetailsUseCase>('GetDetailsUseCase', GetDetailsUseCase);
container.registerSingleton<IListUserReposUseCase>('ListUserReposUseCase', ListUserReposUseCase);
