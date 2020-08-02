import React from 'react';
import { render } from 'tests/test-utils';
import Header from './index';

describe('Header', () => {
  it('should render the component', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
