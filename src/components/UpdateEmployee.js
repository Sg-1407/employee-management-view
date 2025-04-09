import React, { useState ,useEffect} from 'react'
import '../css/EmpList.css'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService'


function UpdateEmployee() {
    const { id }=useParams();
   console.log(id);
  const [emp, setEmp] = useState({
    id: id,
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmp(response.data);
      } catch (error) {
        console.error("Failed to fetch employee:", error);
      }
    };
    fetchData();
  }, [id]);
  

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    EmployeeService.updateEmployee(emp, emp.id)
      .then(() => {
        console.log("Updated!");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };
  

  return (
    <div className='addemplist-container'>
      <h1>Update Employee</h1>
      <input onChange={handleChange} value={emp.name} type='text' placeholder='Name' name="name" /> <br />
      <input onChange={handleChange} value={emp.phone} type='number' placeholder='Phone Number' name="phone" /> <br />
      <input onChange={handleChange} value={emp.address} type='text' placeholder='Address' name='address' /> <br /><br />
      
      <button onClick={handleSubmit}>Update</button>
    
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default UpdateEmployee;
