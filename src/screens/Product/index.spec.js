import React from 'react';
import { render } from 'tests/test-utils';
import Product from './index';

describe('Product', () => {
  it('should render the component', () => {
    const { container } = render(<Product match={{ params: { id: '3' } }} />);
    expect(container).toMatchSnapshot();
  });
});
