import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import axios from 'axios';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import store from '../../redux/store';
import StatsPage from '../../containers/WorldwideStats';

it('it displays other component', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <StatsPage />
        </Switch>
      </Router>
    </Provider>,
  );
});

const server = setupServer(
  rest.get('/v2/continents'),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const fetchStats = async () => {
  await axios
    .get('https://corona.lmao.ninja/v2/continents?yesterday=true&sort');
};

it('fetches the fake api call by returning undefined', async () => {
  const continent = await fetchStats();
  expect(continent).toEqual(undefined);
});
