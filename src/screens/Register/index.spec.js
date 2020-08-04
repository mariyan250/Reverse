import React from 'react';
import {
  render,
  screen,
  createEvent,
  fireEvent,
  waitForElementToBeRemoved,
} from 'tests/test-utils';
import Register from './index';

describe('Register', () => {
  it('should render the component', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });

  it('should prevent default on form submit', () => {
    render(<Register />);
    const form = screen.getByTestId('form');
    const event = createEvent.submit(form);
    fireEvent(form, event);
    expect(event.defaultPrevented).toBeTruthy();
  });

  it('should change username input value', () => {
    render(<Register />);
    const input = screen.getByTestId('usernameInput');
    const event = createEvent.change(input, { target: { value: 'avatar123' } });
    fireEvent(input, event);
    expect(input.value).toBe('avatar123');
    waitForElementToBeRemoved(() => input);
  });

  it('should change email input value', () => {
    render(<Register />);
    const input = screen.getByTestId('emailInput');
    const event = createEvent.change(input, { target: { value: 'email@gmail.com' } });
    fireEvent(input, event);
    expect(input.value).toBe('email@gmail.com');
    waitForElementToBeRemoved(() => input);
  });

  it('should change password input value', () => {
    render(<Register />);
    const input = screen.getByTestId('passwordInput');
    const event = createEvent.change(input, { target: { value: 'password123' } });
    fireEvent(input, event);
    expect(input.value).toBe('password123');
    waitForElementToBeRemoved(() => input);
  });

  it('should change repeat password input value', () => {
    render(<Register />);
    const input = screen.getByTestId('rePasswordInput');
    const event = createEvent.change(input, { target: { value: 'password123' } });
    fireEvent(input, event);
    expect(input.value).toBe('password123');
    waitForElementToBeRemoved(() => input);
  });
});
