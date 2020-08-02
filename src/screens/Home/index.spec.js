import React from 'react';
import { render } from 'tests/test-utils';
import Home from './index';

describe('Home', () => {
  it('should render the component', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
