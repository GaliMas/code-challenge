import React from 'react';
import renderer from 'react-test-renderer';
import SVG from '.';

it('renders correctly', () => {
  const tree = renderer.create(
    <div>
      <SVG id="billin-usage" />
      <SVG id="github-usage" />
      <SVG id="linkedin" />
      <SVG id="twitter" />
    </div>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
