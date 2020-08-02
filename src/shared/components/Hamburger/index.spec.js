import React from 'react';
import { render } from 'tests/test-utils';
import Hamburger from './index';

describe('Hamburger', () => {
  it('should render the component', () => {
    const { container } = render(<Hamburger />);
    expect(container).toMatchSnapshot();
  });
});
