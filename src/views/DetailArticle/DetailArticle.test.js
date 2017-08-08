import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import DetailArticle from '.';

it('renders correctly', () => {
  const createArticle = jest.fn();
  const fetchArticle = jest.fn();
  const updateArticle = jest.fn();
  const removeArticle = jest.fn();
  const article = {
    author: 'Robb Farrell',
    content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
    id: '5467',
    published: false,
    tags: ['convergence', 'Run plum exploit'],
    title: 'Corporate Identity Director',
  };

  const tree = renderer.create(
    <DetailArticle
      article={article}
      createArticle={createArticle}
      fetchArticle={fetchArticle}
      updateArticle={updateArticle}
      removeArticle={removeArticle}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should trigger onClose', () => {
  const createArticle = jest.fn();
  const fetchArticle = jest.fn();
  const updateArticle = jest.fn();
  const removeArticle = jest.fn();
  const article = {
    author: 'Robb Farrell',
    content: 'ex molestias et. Harum placeat soluta officiis fuga.↵',
    id: '5467',
    published: false,
    tags: ['convergence', 'Run plum exploit'],
    title: 'Corporate Identity Director',
  };
  const wrapper = mount(<DetailArticle
    createArticle={createArticle}
    fetchArticle={fetchArticle}
    updateArticle={updateArticle}
    removeArticle={removeArticle}
    article={article}
  />);
});
