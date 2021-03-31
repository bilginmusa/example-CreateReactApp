import React from "react";
import Message from "../Message";
import ListItem from "./ListItem";

function UserList({ users, setUsers }) {
  if (users.length === 0) {
    return <Message text="Henüz kullanıcı yok!" />;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
          <th>Gender</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <ListItem users={users} user={user} setUsers={setUsers} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
