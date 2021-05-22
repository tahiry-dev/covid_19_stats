import axios from 'axios';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/v2/continents'),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const fetchStats = async () => {
  await axios
    .get('https://corona.lmao.ninja/v2/continents/Asia?yesterday&strict');
};

it('fetches the fake api call by continent by returning undefined', async () => {
  const continent = await fetchStats();
  expect(continent).toEqual(undefined);
});
