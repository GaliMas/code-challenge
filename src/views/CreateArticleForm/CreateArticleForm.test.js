import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CreateArticleForm from '.';

it('renders correctly', () => {
  const onClose = jest.fn();
  const onSave = jest.fn();
  const tree = renderer.create(
    <CreateArticleForm onClose={onClose} onSave={onSave} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should trigger onClose', () => {
  const onClose = jest.fn();
  const onSave = jest.fn();
  const wrapper = mount(<CreateArticleForm onClose={onClose} onSave={onSave} />);
  wrapper.find('.cancel').simulate('click');
  expect(onClose.mock.calls.length).toBe(1);
});

it('should trigger onClose', () => {
  const onClose = jest.fn();
  const onSave = jest.fn();
  const wrapper = mount(<CreateArticleForm onClose={onClose} onSave={onSave} />);
  wrapper.find('.save').simulate('click');
  expect(onSave.mock.calls.length).toBe(1);
});
