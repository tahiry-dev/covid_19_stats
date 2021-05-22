import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactRouter from 'react-router';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import StatsDetails from '../../containers/StatsDetails';

describe('StatsDetails', () => {
  it('renders correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
    render(
      <Provider store={store}>
        <Router>
          <Switch>
            <StatsDetails />
          </Switch>
        </Router>
      </Provider>,
    );
  });
});

describe('StatsDetails', () => {
  it('renders tags and attributes correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
    render(
      <Provider store={store}>
        <Router>
          <Switch>
            <StatsDetails />
          </Switch>
        </Router>
      </Provider>,
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
