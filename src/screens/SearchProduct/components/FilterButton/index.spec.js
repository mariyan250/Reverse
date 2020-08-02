import React from 'react';
import { render } from 'tests/test-utils';
import FilterButton from './index';

describe('FilterButton', () => {
  it('should render the component', () => {
    const { container } = render(<FilterButton />);
    expect(container).toMatchSnapshot();
  });
});
