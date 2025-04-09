import React from 'react';
import "../css/Navbar.css";
function Navbar(){
return(
<div className="navbar">
    <h1>EM Service Management</h1>
    <div className='links'>
        <a href="#">Home </a>
        <a href="#">About Us </a>
        <a href="#">Profile </a>
        <a href="#">Logout </a>
</div>
</div>);
}


export default Navbar;