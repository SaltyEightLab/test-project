import React, { useEffect, useState } from 'react';
import { UsersType, UserType } from './Users.types';
const Users = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: UsersType) =>
        setUsers(data.map((user: UserType) => user.name))
      );
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
