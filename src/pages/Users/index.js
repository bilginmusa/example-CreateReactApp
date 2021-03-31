import { useState, useEffect } from "react";
import FormComponent from "../../newComponents/NewUserForm";
import UserList from "../../newComponents/UserList";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("User Array:", users);
  }, [users]);

  return (
    <div>
      <FormComponent setUsers={setUsers} users={users} />
      <br />
      <br />

      <div>
        <UserList users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default Users;
