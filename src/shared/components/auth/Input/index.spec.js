import React from 'react';
import { render } from 'tests/test-utils';
import Input from './index';

describe('Input', () => {
  it('should render the component', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
