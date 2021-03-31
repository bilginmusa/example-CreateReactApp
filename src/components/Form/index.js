import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "antd";
function FormComponent({ user, setUser, users, setUsers }) {
  const onSubmit = (e) => {
    e.preventDefault();
    setUsers([{ key: uuidv4(), ...user }, ...users]);
  };

  const onChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <form style={{ paddingLeft: 15 }} onSubmit={onSubmit}>
      <label>Name</label>
      <br />

      <Input
        size="large"
        name="userName"
        value={user.userName}
        onChange={onChange}
        style={{ width: "30%" }}
      />
      <br />
      <br />

      <label>Surname</label>
      <br />
      <Input
        name="surname"
        value={user.surname}
        onChange={onChange}
        style={{ width: "30%" }}
      />
      <br />
      <br />

      <label>Age</label>
      <br />
      <Input
        name="age"
        value={user.age}
        onChange={onChange}
        style={{ width: "30%" }}
      />
      <br />
      <br />

      <label>Gender</label>
      <br />
      <select
        name="gender"
        value={user.gender}
        onChange={onChange}
        style={{ width: "30%" }}
      >
        <option value="1">Erkek</option>
        <option value="2">Kadın</option>
      </select>
      <br />
      <br />
      <button>Send</button>
    </form>
  );
}

export default FormComponent;
