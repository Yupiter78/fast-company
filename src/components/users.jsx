import React from "react";
import User from "./user";

const Users = ({ users, onDelete, onToggleBookMark }) => {
  const headerTableTemplate = () => {
    return (
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th />
      </tr>
    );
  };

  const getBodyTable = users.map((user) => (
    <User
      key={user._id}
      {...user}
      onDelete={onDelete}
      onToggleBookMark={onToggleBookMark}
    />
  ));

  return (
    <>
      <table className="table">
        <thead>{headerTableTemplate()}</thead>
        <tbody>{getBodyTable}</tbody>
      </table>
    </>
  );
};

export default Users;
