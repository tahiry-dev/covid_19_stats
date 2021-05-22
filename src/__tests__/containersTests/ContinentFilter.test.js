import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ContinentFilter from '../../containers/ContinentFilter';

configure({ adapter: new Adapter() });

describe('<ContinentFilter/>', () => {
    it('It never calls unless changed', () => {
        const handleChange = jest.fn();
        const wrapper = shallow(<ContinentFilter handleChange={handleChange} />);

        wrapper.find(".continent_form").first().invoke('onChange', { target: { value: 'A' } });
        expect(handleChange).toBeCalledTimes(0);
    });
});