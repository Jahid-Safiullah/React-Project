import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const dataFetch = () => {
    fetch("http://localhost/test-crud/api/getUsers.php")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nid: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    setFormData((pre) => {
      let data = {
        ...pre,
        [name]: e.target.value,
      };
      return data;
    });
  };
  const deleteUser = async (id) => {
    let Formid = { id: id };
    const response = await fetch("http://localhost/test-crud/api/deleteUser.php", {
      method: "POST",
      body: JSON.stringify(Formid),
    });
    if (response.status === 200) {
      console.log("deleted");
      dataFetch();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/test-crud/api/createUser.php", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      console.log("success");
      dataFetch();
    } else {
      console.log("failed");
    }
    console.log(formData);
    console.log(JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Input</h1>
      <Link to="EditUser">
        <h3>Edit Page</h3>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor="">Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor="">Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor="">Nid:</label>
          <input type="text" name="nid" value={formData.nid} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      <table style={{ width: "1000px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Nid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_name}</td>
              <td>{user.user_email}</td>
              <td>{user.user_phone}</td>
              <td>{user.user_nid}</td>
              <td>
                <Link to={"/edit-user/" + user.user_id} style={{ background: "#f1f1f1", padding: "10px 30px", marginRight: "10px" }}>
                  Edit
                </Link>
                <Link style={{ background: "red", padding: "10px 30px", color: "white" }} onClick={() => deleteUser(user.user_id)}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
