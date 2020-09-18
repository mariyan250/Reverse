import React from 'react';
import { render } from 'tests/test-utils';
import Button from './index';

describe('Button', () => {
  it('should render the component', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
