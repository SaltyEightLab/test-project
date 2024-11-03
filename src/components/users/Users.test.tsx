import { render, screen } from '@testing-library/react';
import Users from './Users';

describe('Users', () => {
  test('Users renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByRole('heading', { name: 'Users' });
    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).toHaveLength(10);
  });
});
