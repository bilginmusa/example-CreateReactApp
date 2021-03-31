import { useState, useEffect } from "react";
import TableComponent from "../../components/Table";
import FormComponent from "../../components/Form";

function Users() {
  const [user, setUser] = useState({
    userName: "Musa",
    surname: "Bilgin",
    age: 0,
    gender: "1",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("User Array:", users);
  }, [users]);
  return (
    <div>
      <FormComponent
        user={user}
        setUser={setUser}
        users={users}
        setUsers={setUsers}
      />
      <br />
      <br />
      {users.length === 0 && <div>Henüz kullanıcı yok</div>}
      {users.length > 0 && (
        <TableComponent users={users} user={user} setUsers={setUsers} />
      )}
    </div>
  );
}

export default Users;
