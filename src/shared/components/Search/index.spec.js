import React from 'react';
import { render, screen, fireEvent, createEvent } from 'tests/test-utils';
import Search from './index';

describe('Search', () => {
  it('should render the component', () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });

  it('should change search input value', () => {
    render(<Search />);
    const input = screen.getByTestId('searchInput');
    const event = createEvent.change(input, { target: { value: 'technology' } });
    fireEvent(input, event);
    expect(input.value).toBe('technology');
  });
});
