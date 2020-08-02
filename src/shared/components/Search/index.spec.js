import React from 'react';
import { render } from 'tests/test-utils';
import Search from './index';

describe('Search', () => {
  it('should render the component', () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
