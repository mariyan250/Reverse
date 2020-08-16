import React from 'react';
import { render } from 'tests/test-utils';
import Item from './index';

describe('Item', () => {
  it('should render the component', () => {
    const { container } = render(<Item images={[]} />);
    expect(container).toMatchSnapshot();
  });
});
