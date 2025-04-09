import axios from 'axios';

const EMP_S_API_BASE_URL="http://localhost:8080/EMS/Employee"

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMP_S_API_BASE_URL,employee)
    }
    getEmployee(){
        return axios.get(EMP_S_API_BASE_URL)
    }
    getEmployeeById(id){
        return axios.get(EMP_S_API_BASE_URL+"/"+id)
    }
    deleteEmployeeById(id){
        return axios.delete(EMP_S_API_BASE_URL+"/"+id)
    }
    updateEmployee(employee,id){
        return axios.put(EMP_S_API_BASE_URL+"/"+id,employee)
    }
    
    
}

export default new EmployeeService();