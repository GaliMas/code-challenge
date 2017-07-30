import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const title = 'Tyrrell';
const content = 'Architecto voluptates corporis cupiditate sed voluptatem sapiente deserunt. Ullam consequatur';

it('render without crashing', () => {
  shallow(<Card />);
});

it('should render title', () => {
  const wrapper = shallow(<Card title={title} />);
  expect(wrapper.find('.cardTitle').text()).toBe(title);
});

it('should render content', () => {
  const wrapper = shallow(<Card content={content} />);
  expect(wrapper.find('.cardContent').text()).toBe(content);
});
