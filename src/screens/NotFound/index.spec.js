import React from 'react';
import { render } from 'tests/test-utils';
import NotFound from './index';

describe('NotFound', () => {
  it('should render the component', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
