GitHub API Proxy
This project is a test assignment where you need to create an API that acts as a proxy for client requests to the GitHub API. It provides the following endpoints:

GET - /api/users?since={number}: This endpoint returns a list of GitHub users and the link for the next page.
GET - /api/users/:username/details: This endpoint returns the details of a GitHub user.
GET - /api/users/:username/repos: This endpoint returns a list of all repositories owned by a user.
You will be consuming the GitHub API, specifically the users and repositories endpoints, to implement this application.

Getting Started
To set up the project, please follow these instructions:

Prerequisites
Node.js (version >= 12.0.0)
Yarn (or npm)
Installation
Clone the repository:

bash
Copy code
git clone git@github.com:pauloeduardods/GitHub-Proxy.git
Navigate to the project directory:

bash
Copy code
cd GitHub-Proxy
Install the dependencies:

bash
Copy code
yarn install
Configuration
Create a .env file in the root directory of the project with the following variables:

plaintext
Copy code
APP_SERVER_PORT=<port where the application will run>
API_KEY=<API key to be used in the request headers (x-api-key)>
GH_TOKEN=<GitHub token>
Make sure to replace <port where the application will run>, <API key to be used in the request headers (x-api-key)>, and <GitHub token> with the appropriate values.

Starting the Application
To start the application, run the following command:

bash
Copy code
yarn start
This will start the server, and the API will be accessible at http://localhost:<port>/api.

Endpoints
The following endpoints are available:

GET - /api/users?since={number}: Returns a list of GitHub users and the link for the next page.
GET - /api/users/:username/details: Returns the details of a GitHub user.
GET - /api/users/:username/repos: Returns a list of all repositories owned by a user.
Documentation
The documentation for the GitHub API, including the users and repositories endpoints, can be found at the following links:

GitHub API v3 Documentation
GitHub API v3 Users Documentation
GitHub API v3 Repositories Documentation
Technologies Used
Back-end: Node, express, axios.
