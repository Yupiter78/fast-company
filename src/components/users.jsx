import React, {useState} from 'react';
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  console.log('users:', users, 'setUsers:', setUsers);

  const handleDelete = (userId) => {

  };

  const renderPhrase = (number) => {

  };

  return (
    <h1>Users</h1>
  );
};

export default Users;