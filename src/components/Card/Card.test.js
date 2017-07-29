import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const author = 'Alf Hills';
const excerpt = 'Nisi id vitae rQui delectus nobis sed. Quis sunt necessitatibus ev';

it('renders without crashing', () => {
  shallow(<Card />);
});

it('should render author', () => {
  const wrapper = shallow(<Card author={author} />);
  expect(wrapper.find('.author').text()).toBe(author);
});

it('should render excerpt', () => {
  const wrapper = shallow(<Card excerpt={excerpt} />);
  expect(wrapper.find('.excerpt').text()).toBe(excerpt);
});
