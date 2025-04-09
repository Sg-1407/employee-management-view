import { useEffect ,useState} from "react";
import "../css/AddEmp.css";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

function AddEmp(){

    const [loading,setLoading]=useState(true);
    const [emp, setEmps] = useState([]);
    useEffect(()=>{
        const fetchData= async () =>{
            setLoading(true);
            try{
                const response=await EmployeeService.getEmployee();
                setEmps(response.data)
            }catch(error){
                console.log(error);
            }
            setLoading(false)
        };
        fetchData();
    },[]);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployeeById(id).then(() => {
            if(emp){
            setEmps((prevElement) => {
                return prevElement.filter((employee) => employee.id !== id);
            });
        }
        });
    };
    
    const updateEmployee = (e,id) => {
        e.preventDefault();
       navigate(`/editEmployee/${id}`)
    };
    

    const navigate = useNavigate();
    return(
        <>
        <div className="container">
        <button  onClick={()=> navigate("/addemployee")} className="addempbtn">Add Employee</button>
        <table>
                <thead>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th> Action</th>
                </thead>
                {!loading}
                <tbody>
                {emp.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>
                        <a href="#" onClick={(e) => updateEmployee(e, employee.id)}>Edit</a>
                        &nbsp; | &nbsp;
                        <a href="#" onClick={(e) => deleteEmployee(e, employee.id)}>Delete</a>
                    </td>

                </tr>
                ))}

                </tbody>
            </table>
        </div>
    </>
    );
}

export default AddEmp;