import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => userId !== user._id));
  };

  const handleToggleBookMark = (userId) => {
    setUsers(
      users.map((user) => {
        if (user._id === userId) {
          user.status = !user.status;
        }
        return user;
      })
    );
  };

  return (
    <div>
      <main>
        <SearchStatus length={users.length} />
        <Users
          onToggleBookMark={handleToggleBookMark}
          onDelete={handleDelete}
          users={users}
        />
      </main>
    </div>
  );
}

export default App;
