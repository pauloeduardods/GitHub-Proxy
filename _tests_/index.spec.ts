import request from 'supertest';
import nock from 'nock';
import APP from '../src';

describe('Routes tests', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it('GET /api/users?since={number} - success', async () => {
    const mockData = {
      data: [
        {
          login: 'bmizerany',
          id: 46,
          node_id: 'MDQ6VXNlcjQ2',
          avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/bmizerany',
          html_url: 'https://github.com/bmizerany',
          followers_url: 'https://api.github.com/users/bmizerany/followers',
          following_url: 'https://api.github.com/users/bmizerany/following{/other_user}',
          gists_url: 'https://api.github.com/users/bmizerany/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/bmizerany/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/bmizerany/subscriptions',
          organizations_url: 'https://api.github.com/users/bmizerany/orgs',
          repos_url: 'https://api.github.com/users/bmizerany/repos',
          events_url: 'https://api.github.com/users/bmizerany/events{/privacy}',
          received_events_url: 'https://api.github.com/users/bmizerany/received_events',
          type: 'User',
          site_admin: false,
        },
      ],
    };

    nock('https://api.github.com').get('/users').query({ since: 0 }).reply(200, mockData);

    process.env.API_KEY = 'YOUR_API_KEY';
    process.env.APP_SERVER_PORT = '3000';
    process.env.GH_TOKEN = 'YOUR_GITHUB_TOKEN';

    const res = await request(APP).get('/api/users?since=0').set('x-api-key', 'YOUR_API_KEY');
    expect(res.body).toEqual({ data: { data: mockData.data }, nextLink: null });
    expect(res.statusCode).toEqual(200);
  });

  it('GET /api/users/:username/details - success', async () => {
    const mockData = { data: 'data' };

    process.env.API_KEY = 'YOUR_API_KEY';
    process.env.APP_SERVER_PORT = '3000';
    process.env.GH_TOKEN = 'YOUR_GITHUB_TOKEN';

    nock('https://api.github.com').get('/users/testUser').reply(200, mockData);

    const res = await request(APP)
      .get('/api/users/testUser/details')
      .set('x-api-key', 'YOUR_API_KEY');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockData);
  });

  it('GET /api/users/:username/repos - success', async () => {
    const mockData = { data: 'data' };

    nock('https://api.github.com').get('/users/testUser/repos').reply(200, mockData);

    const res = await request(APP)
      .get('/api/users/testUser/repos')
      .set('x-api-key', 'YOUR_API_KEY');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockData);
  });
});
