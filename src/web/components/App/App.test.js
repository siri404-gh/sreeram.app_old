import React from 'react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render `#app`', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#app').length).toEqual(1);
  });
});
