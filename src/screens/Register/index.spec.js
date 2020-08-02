import React from 'react';
import { render } from 'tests/test-utils';
import Register from './index';

describe('Register', () => {
  it('should render the component', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});
