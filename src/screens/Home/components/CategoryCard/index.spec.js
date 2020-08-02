import React from 'react';
import { render } from 'tests/test-utils';
import CategoryCard from './index';

describe('CategoryCard', () => {
  it('should render the component', () => {
    const { container } = render(<CategoryCard url="/" />);
    expect(container).toMatchSnapshot();
  });
});
