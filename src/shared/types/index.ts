export interface IGitHubUser {
  login: string;
  id: number;
  node_id: string;
  // ...
  [key: string]: any;
}

export interface GitHubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  // ...
  [key: string]: any;
}

export interface IListUseCaseResponse {
  data: IGitHubUser[];
  nextLink: string;
}
