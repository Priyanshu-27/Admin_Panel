
import './App.css';

import React from 'react';
import Loginpage from './Login-signup/Loginpage';
import Registration from './Login-signup/Registration';
import Config from './Components/Home/Config';
import Employee from './Components/Home/Employee';
import Home from './Components/Home/Home.js';
import User from "./Components/Home/User.js";
import Employemanagement from './Components/Home/Employemanagementform';
import Adminmanagement from './Components/Home/Adminmanagement';
import Sidebar from './Components/Home/Sidebar';
import Adminmanagementform from './Components/Home/AdminmanagementForm';
import { HashRouter as Router } from "react-router-dom"  ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendor from './Components/Home/Vendor';
import Vendorform from './Components/Home/Vendorform';

import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
      <Routes>
         
        <Route path='/' element = {<Loginpage />}/>
    
        <Route path='/config' element = {<Config/>}/>
        <Route path='/home' element ={<Home/>} />
        <Route path='/registration' element = {<Registration/>} />
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/adminmangementform' element={<Adminmanagementform/>}/> 
        <Route path='/employeemanagementform' element={<Employemanagement/>}/>
        <Route path='/vendor' element={<Vendor/>}/>
        <Route path='/vendorform' element={<Vendorform/>}/>
        <Route path='/Adminmanagement' element={<Adminmanagement/>}/>
       
      </Routes>
     </BrowserRouter>
    
     
    </div>
  );
}

export default App;

