import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function FormComponent({ setUsers, users }) {
  const [user, setUser] = useState({
    userName: "Musa",
    surname: "Bilgin",
    age: 0,
    gender: "1",
  });
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

      <input name="userName" value={user.userName} onChange={onChange} />
      <br />
      <br />

      <label>Surname</label>
      <br />
      <input name="surname" value={user.surname} onChange={onChange} />
      <br />
      <br />

      <label>Age</label>
      <br />
      <input name="age" value={user.age} onChange={onChange} />
      <br />
      <br />

      <label>Gender</label>
      <select name="gender" value={user.gender} onChange={onChange}>
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
