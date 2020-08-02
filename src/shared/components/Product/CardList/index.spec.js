import React from 'react';
import { render } from 'tests/test-utils';
import ItemList from './index';

describe('ItemList', () => {
  it('should render the component', () => {
    const { container } = render(<ItemList />);
    expect(container).toMatchSnapshot();
  });
});
