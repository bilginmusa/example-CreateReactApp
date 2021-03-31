import { Table } from "antd";

function TableComponent({ users, setUsers }) {
  const deleteUser = (id) => {
    const filtered = users.filter((user) => user.key !== id);
    setUsers(filtered);
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      key: "gender",
      render: (user) => {
        const chosee = user.gender === "1" ? "Erkek" : "Kadın";
        return chosee;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (user) => (
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            deleteUser(user.key);
          }}
        >
          Sil
        </a>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
}

export default TableComponent;
