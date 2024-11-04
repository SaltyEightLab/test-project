import React, { useEffect, useState } from 'react';
import { UsersType, UserType } from './Users.types';

export const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch order data');
  }
  return res.json();
};

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);

  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data.map((user: UserType) => user.name));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
