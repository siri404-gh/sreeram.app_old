import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should not render `.app` when data is not provided', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app').length).toEqual(1);
  });
});
