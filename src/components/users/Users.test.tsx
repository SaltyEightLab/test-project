import { render, screen } from '@testing-library/react';
import Users from './Users';
import { mockUsers } from './__mocks__/mockUsers';
import { UsersType } from './Users.types';
import { fetchUsers } from './Users';
import * as UsersAPI from './Users';

describe('Users API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('fetchUsers returns data correctly', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockUsers);
        },
      });
    }) as jest.Mock;

    const res = await fetchUsers();

    expect(res).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          username: expect.any(String),
          email: expect.any(String),
          address: expect.objectContaining({
            street: expect.any(String),
            suite: expect.any(String),
            city: expect.any(String),
            zipcode: expect.any(String),
            geo: expect.objectContaining({
              lat: expect.any(String),
              lng: expect.any(String),
            }),
          }),
          phone: expect.any(String),
          website: expect.any(String),
          company: expect.objectContaining({
            name: expect.any(String),
            catchPhrase: expect.any(String),
            bs: expect.any(String),
          }),
        }),
      ])
    );

    expect(res).toEqual(mockUsers);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    );

    render(<Users />);

    const listItemElements = await screen.findAllByRole('listitem');

    expect(listItemElements).toHaveLength(mockUsers.length); // 3になるはず

    mockUsers.forEach((user) => {
      const userName = screen.getByText(user.name);
      expect(userName).toBeInTheDocument();
    });
  });

  describe('failed case', () => {
    test('throws error when User data not found', async () => {
      global.fetch = jest.fn(() => {
        return Promise.resolve({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        });
      }) as jest.Mock;

      await expect(fetchUsers()).rejects.toThrow('Failed to fetch order data');
    });

    test('throw error when server returns 500', async () => {
      global.fetch = jest.fn(() => {
        return Promise.resolve({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        });
      }) as jest.Mock;

      await expect(fetchUsers()).rejects.toThrow('Failed to fetch order data');
    });

    test('throw error when network error occurs', async () => {
      global.fetch = jest.fn(() => {
        return Promise.reject(new Error('Network Error'));
      }) as jest.Mock;

      await expect(fetchUsers()).rejects.toThrow('Network Error');
    });
  });
});
