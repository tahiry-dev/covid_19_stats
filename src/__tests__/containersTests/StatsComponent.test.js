import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import StatsComponent from '../../containers/StatsComponent';

describe('StatsComponent', () => {
  it('renders correctly', () => {
    render(<Provider store={store}><StatsComponent /></Provider>);
  });
});
