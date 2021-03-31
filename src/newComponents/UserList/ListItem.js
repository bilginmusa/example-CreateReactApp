import React from "react";

function ListItem({ users, setUsers, user }) {
  const deleteUser = (id) => {
    console.log("id", id);
    const filtered = users.filter((user) => user.key !== id);
    setUsers(filtered);
  };
  return (
    <tr>
      <td>{user.userName}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td>{user.gender === "1" ? "Erkek" : "Kadın"}</td>
      <td>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            deleteUser(user.key);
          }}
        >
          Sil
        </a>
      </td>
    </tr>
  );
}

export default ListItem;
