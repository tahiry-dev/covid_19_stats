import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import StatsPage from '../../containers/WorldwideStats';

afterEach(cleanup);

it("it displays other component", async () => {
    render(<Provider store={store}>
        <Router>
            <Switch>
                <StatsPage />
            </Switch>
        </Router>
    </Provider>);
});
