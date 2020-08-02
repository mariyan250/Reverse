import React from 'react';
import { render } from 'tests/test-utils';
import Profile from './index';

describe('Profile', () => {
  it('should render the component', () => {
    const { container } = render(<Profile />);
    expect(container).toMatchSnapshot();
  });
});
