# GitHub API Proxy

This project is a test assignment where you need to create an API that acts as a proxy for client requests to the GitHub API. It provides the following endpoints:

- `GET - /api/users?since={number}`: This endpoint returns a list of GitHub users and the link for the next page.
- `GET - /api/users/:username/details`: This endpoint returns the details of a GitHub user.
- `GET - /api/users/:username/repos`: This endpoint returns a list of all repositories owned by a user.

You will be consuming the GitHub API, specifically the users and repositories endpoints, to implement this application.

## Getting Started

To set up the project, please follow these instructions:

### Prerequisites

- Node.js (version >= 18.0.0)
- Yarn (or npm)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:pauloeduardods/GitHub-Proxy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd GitHub-Proxy
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

### Configuration

Create a `.env` file in the root directory of the project with the following variables:

```bash
APP_SERVER_PORT=<port where the application will run>
API_KEY=<API key to be used in the request headers (x-api-key)>
GH_TOKEN=<GitHub token>
```

Make sure to replace `<port where the application will run>`, `<API key to be used in the request headers (x-api-key)>`, and `<GitHub token>` with the appropriate values.

### Starting the Application

To start the application, run the following command:

```bash
yarn start
```

This will start the server, and the API will be accessible at `http://localhost:<port>/api`.

### Running the Tests

To run the tests, run the following command:

```bash
yarn test
```

## Endpoints

The following endpoints are available:

- `GET - /api/users?since={number}`: Returns a list of GitHub users and the link for the next page.
- `GET - /api/users/:username/details`: Returns the details of a GitHub user.
- `GET - /api/users/:username/repos`: Returns a list of all repositories owned by a user.

## Documentation

The documentation for the GitHub API, including the users and repositories endpoints, can be found at the following links:

- [GitHub API v3 Documentation](https://developer.github.com/v3)
- [GitHub API v3 Users Documentation](https://developer.github.com/v3/users)
- [GitHub API v3 Repositories Documentation](https://developer.github.com/v3/repos)

## Technologies Used

- Back-end: Node.js, Express.js, Axios, Joi, tsyringe, and TypeScript.
