import { container } from 'tsyringe';

import { GitHubService, IGitHubService } from '@shared/service';

container.registerSingleton<IGitHubService>('GitHubService', GitHubService);
