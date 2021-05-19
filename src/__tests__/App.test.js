
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App Component', () => {
    it('renders pages correctly', () => {
        const tree = renderer.create(<App />);
        expect(tree).toMatchSnapshot();
    });
});

