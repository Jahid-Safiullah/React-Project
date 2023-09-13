import React, { useState, Fragment } from "react";
import Form from './form';
import Table from "./Table";
function Profile() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    pass_name: "",
    pass_email: "",
    pass_contact: "",
    doj:"",
    dor:"",
    select_bus: "",
    bus_type: "",
    starting_point: "",
    ending_point: "",
    Seat:"",
    fare:"",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { pass_name: "", pass_email: "", pass_contact: "",select_bus:"", bus_type:"",starting_point:"",ending_point:"",Seat:"",fare:"",};
      setFormObject(isEmpty);
    }
  };
  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      <Table tableData={tableData} />
    </Fragment>
  );
}
export default Profile;