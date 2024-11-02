import { render } from '@testing-library/react';
import Counter from './Counter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders acount of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders acount of 1 after clicking the increment button', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await user.click(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  //   test('renders acount of 10 after clicking the set button', async () => {
  //     const user = userEvent.setup();
  //     render(<Counter />);

  //     const amountInput = screen.getByRole('spinbutton');
  //     await user.type(amountInput, '5');
  //     expect(amountInput).toHaveValue(5);

  //     const setButton = screen.getByRole('button', {
  //       name: 'Set',
  //     });
  //     await user.click(setButton);
  //     const countElement = screen.getByRole('heading');
  //     expect(countElement).toHaveTextContent('5');
  //   });

  //   test('elements are focused in the right order', async () => {
  //     const user = userEvent.setup();
  //     render(<Counter />);

  //     const incrementButton = screen.getByRole('button', { name: 'Increment' });
  //     const amountInput = screen.getByRole('spinbutton');
  //     const setButton = screen.getByRole('button', { name: 'Set' });

  //     await user.tab();
  //     expect(incrementButton).toHaveFocus();
  //     await user.tab();
  //     expect(amountInput).toHaveFocus();
  //     await user.tab();
  //     expect(setButton).toHaveFocus();
  //   });
});
