import React, { useState } from 'react'
import '../css/EmpList.css'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService'


function EmpList() {
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmp({
      id: "",
      name: "",
      phone: "",
      address: "",
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(emp)
  .then((response) => {
    console.log("Saved!");
    navigate("/"); 
  })
  .catch((error) => {
    console.error("Error while saving:", error);
  });
  };

  return (
    <div className='addemplist-container'>
      <h1>Add Employee</h1>
      <input onChange={handleChange} value={emp.name} type='text' placeholder='Name' name="name" /> <br />
      <input onChange={handleChange} value={emp.phone} type='number' placeholder='Phone Number' name="phone" /> <br />
      <input onChange={handleChange} value={emp.address} type='text' placeholder='Address' name='address' /> <br /><br />
      
      <button onClick={handleSubmit}>Save</button>
      <button onClick={reset}>Clear</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default EmpList;
