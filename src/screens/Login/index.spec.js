import React from 'react';
import { render } from 'tests/test-utils';
import Login from './index';

describe('Login', () => {
  it('should render the component', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
