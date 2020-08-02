import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from 'tests/test-utils';
import Product from './index';

describe('Product', () => {
  it('should render the component', () => {
    const { container } = render(<Product match={{ params: { id: '3' } }} />);
    expect(container).toMatchSnapshot();
  });

  it('should return not found when there is no post', () => {
    const { container } = render(<Product match={{ params: { id: '1000' } }} />);
    expect(container).toMatchSnapshot();
  });

  it('should not render posts when no params', () => {
    const { container } = render(<Product match={{}} />);
    expect(container).toMatchSnapshot();
  });
});
