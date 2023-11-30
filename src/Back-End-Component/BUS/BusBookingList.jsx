import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Bus.css";
import Dashbord from "../../pages/Back-End/Dashbord/Dashbord";
import Navber from "../../Front-End-Component/Navbar/Navber";

function BusBookingList() {
  const [users, setUsers] = useState();
  const dataFetch = () => {
    fetch("http://localhost/my-react-project/api/getUsers.php")
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
    const response = await fetch("http://localhost/my-react-project/api/deleteUser.php", {
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
    const response = await fetch("http://localhost/my-react-project/api/createUser.php", {
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
   <>
   
   <div className="conatainer-fluid d-flex">
   
    <div className="col-md-3">
      <Dashbord />
   </div>
    <div className="col-md-8 p-0 m-0 ">
      <h1 className="bg-success text-light ">Bus information Listing </h1>
      {/* <Link to="/BusManagement/EditBus">
        <h3>Edit Page</h3>
      </Link> */}
      <form className="border" onSubmit={handleSubmit}>
        <div className="  mb-3">
          <label className=" form-label   " htmlFor="name">Bus Name:</label>
          <input className="form-control " type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
         
        </div>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="">Company:</label>
          <input className="form-control" type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="">Driver Phone Number:</label>
          <input className="form-control"  type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
       
        <div className="mb-3">
          <label className="form-label" htmlFor="">Bus Number:</label>
          <input className="form-control"  type="text" name="nid" value={formData.nid} onChange={handleChange} />
        </div>
        <br />
        <button className="btn btn-success  col-12 mx-auto" type="submit">Submit</button>
      </form>

      <table className="mt-5 table border" >
        <thead className="bg-success text-light " style={{marginTop:"50px"}}>
          <tr className="">
            <th>Bus Name</th>
            <th>Company </th>
            <th>Driver Phone Number</th>
            <th>Bus Number</th>
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
                <button><Link to={"/BusBookingList/EditBus/" + user.user_id} style={{ textDecoration:"none",color:"white", background: "green", padding: "3px 40px" }}>
                  Edit
                </Link>
                </button>
                
                <button>
                <Link style={{textDecoration:"none", background: "red", padding: "3px 30px", color: "white" }} onClick={() => deleteUser(user.user_id)}>
                  Delete
                </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default BusBookingList;
