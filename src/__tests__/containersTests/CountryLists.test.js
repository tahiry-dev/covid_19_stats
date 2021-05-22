import axios from 'axios';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('/v2/continents', (req, res) => {
        const query = req.url.searchParams;
        const yesterday = query.get('yesterday');
    }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const fetchStats = async () => {
    const response = await axios
        .get('https://corona.lmao.ninja/v2/continents/Asia?yesterday&strict')
        .catch((err) => err);
};

it('fetches the fake api call by continent by returning undefined', async () => {
    const continent = await fetchStats();
    expect(continent).toEqual(undefined);
});
