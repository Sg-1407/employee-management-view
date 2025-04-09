import EmpList from './components/EmpList';
import Navbar from './components/Navbar';
import AddEmp from './components/AddEmp'; 
import UpdateEmployee from './components/UpdateEmployee'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<AddEmp />} />
        <Route path="/" element={<AddEmp />} />
        <Route path="/addEmployee" element={<EmpList />} />
        <Route path='/editEmployee/:id' element={<UpdateEmployee />}/>
      </Routes>
    </Router>
  );
}

export default App;
