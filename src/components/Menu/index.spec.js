import React from 'react';
import { render } from 'tests/test-utils';
import Menu from './index';

describe('Menu', () => {
  it('should render the component', () => {
    const { container } = render(<Menu links={[]} />);
    expect(container).toMatchSnapshot();
  });
});
