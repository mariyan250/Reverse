import React from 'react';
import { render } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  it('should render the component', () => {
    const { container } = render(<SearchProduct location={{ search: 'q=technology' }} />);
    expect(container).toMatchSnapshot();
  });
});
