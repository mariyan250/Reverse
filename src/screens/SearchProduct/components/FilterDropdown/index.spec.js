import React from 'react';
import { render, fireEvent, screen, waitFor } from 'tests/test-utils';
import FilterDropdown from './index';

describe('FilterDropdown', () => {
  it('should render the component', () => {
    const { container } = render(<FilterDropdown />);
    expect(container).toMatchSnapshot();
  });

  it('should sort the newest when clicked newest', async () => {
    const { container } = render(<FilterDropdown />);
    const button = await waitFor(() => screen.getByRole('filter-newest'));
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  it('should sort the newest when clicked lowest', async () => {
    const { container } = render(<FilterDropdown />);
    const button = await waitFor(() => screen.getByRole('filter-lowest'));
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  it('should sort the newest when clicked highest', async () => {
    const { container } = render(<FilterDropdown />);
    const button = await waitFor(() => screen.getByRole('filter-highest'));
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
