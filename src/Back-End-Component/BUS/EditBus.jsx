import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BusBookingList from "./BusBookingList";
function EditBus() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    let body = { id: id };
    fetch("http://localhost/my-react-project/api/getSingleUser.php", {
      method: "post",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((user) => {
        setFormData({
          name: user?.user_name,
          email: user?.user_email,
          phone: user?.user_phone,
          nid: user?.user_nid,
        });
      });
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nid: "",
    id: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    setFormData((pre) => {
      let data = {
        ...pre,
        id: id,
        [name]: e.target.value,
      };
      return data;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/my-react-project/api/updateUser.php", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      console.log("success");
      navigate("/BusBookingList");
    } else {
      console.log("failed");
    }
    console.log(formData);
    console.log(JSON.stringify(formData));
  };
  return (
    <div>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBus;
