import { container } from 'tsyringe';

import { GitHubService, IGitHubService } from '@shared/service';
import { EnvVariables } from '@shared/utils';

// container.registerSingleton<IGitHubService>('GitHubService', GitHubService);
container.registerSingleton('GitHubService', GitHubService);
