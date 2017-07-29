import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';

const cards = [
  {
    author: 'Hassan Haley',
    excerpt: 'Tempora aut quos rEos',
    id: '597775b813bb7728d034fe68',
  },
  {
    author: 'Gretchen Douglas',
    excerpt: 'Ut ratione ',
    id: '597775b813bb7728d034fe69',
  },
  {
    author: 'Alf Hills',
    excerpt: 'Nisi id vitae rQui delectus nobis sed. Quis sunt necessitatibus ev',
    id: '597775b813bb7728d034fe6a',
  },
];

it('renders without crashing', () => {
  shallow(<CardList />);
});

it('should render three cards', () => {
  const wrapper = mount(<CardList cards={cards} />);
  expect(wrapper.find('.card')).toHaveLength(3);
});
