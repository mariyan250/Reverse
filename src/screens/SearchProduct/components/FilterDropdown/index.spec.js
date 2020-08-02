import React from 'react';
import { render } from 'tests/test-utils';
import FilterDropdown from './index';

describe('FilterDropdown', () => {
  it('should render the component', () => {
    const { container } = render(<FilterDropdown />);
    expect(container).toMatchSnapshot();
  });
});
