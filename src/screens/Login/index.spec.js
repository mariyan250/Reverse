import React from 'react';
import {
  render,
  createEvent,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from 'tests/test-utils';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';

describe('Login', () => {
  it('should render the component', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });

  it('should prevent default on form submit', () => {
    render(<Login />);
    const form = screen.getByTestId('form');
    const event = createEvent.submit(form);
    fireEvent(form, event);
    expect(event.defaultPrevented).toBeTruthy();
  });

  it('should change email input value', async () => {
    render(<Login />);
    const input = screen.getByTestId('emailInput');
    const event = createEvent.change(input, { target: { value: 'email@gmail.com' } });
    fireEvent(input, event);
    expect(input.value).toBe('email@gmail.com');
    waitForElementToBeRemoved(() => input);
  });

  it('should change password input value', () => {
    render(<Login />);
    const input = screen.getByTestId('passwordInput');
    const event = createEvent.change(input, { target: { value: 'password123' } });
    fireEvent(input, event);
    expect(input.value).toBe('password123');
    waitForElementToBeRemoved(() => input);
  });
});
