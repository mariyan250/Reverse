import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from 'tests/test-utils';
import Hamburger from './index';

describe('Hamburger', () => {
  it('should render the component', () => {
    const { container } = render(<Hamburger />);
    expect(container).toMatchSnapshot();
  });

  it('should change style when open', () => {
    const { container } = render(<Hamburger isOpen={true} />);
    const expected = {
      '0': 'hamburger',
      '1': 'toggled',
      '2': 'd-flex',
      '3': 'flex-column',
      '4': 'justify-content-between',
    };
    expect(screen.getByTestId('hamburger').classList).toHaveProperty('1', 'toggled');
  });
});
