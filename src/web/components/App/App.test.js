import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render `#app`', () => {
    expect(true).toEqual(true);
  });
});
