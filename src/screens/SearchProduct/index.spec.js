import React from 'react';
import { render, fireEvent, screen } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  it('should render the component', () => {
    const { container } = render(<SearchProduct location={{ search: 'q=technology' }} />);
    expect(container).toMatchSnapshot();
  });

  it('should set filterButton to open when click', () => {
    const { container } = render(<SearchProduct location={{ search: 'q=technology' }} />);
    fireEvent.click(screen.getByRole('filter-button'));
    expect(container).toMatchSnapshot();
  });
});
