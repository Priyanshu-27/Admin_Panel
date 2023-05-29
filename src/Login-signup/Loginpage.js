import React, { useState } from 'react'
import AdminLogo from "../Images/Admin-logo.png"

import "./Login.css" ;
import {Link , useNavigate} from 'react-router-dom' ;
import axios from 'axios';
import TextField from '@mui/material/TextField';


function Loginpage() {
    const[email , setemail] = useState("");
    const [password , setpassword] = useState("");
    
    const Navigate = useNavigate();

    


   const formsubmitfunc = async(e) => {
    
    e.preventDefault();
       const login = await axios.get("https://sonnentechs.com/Webs/happy_life/api/process.php?action=Login&email="+email+"&password="+password)
        .then(res => {
            console.log(res.data)
            if (res.data.password===password) {
              return Navigate("/home")
            }else if(res.data.email===email){
                Navigate("/home")
            }
            else if(res.data.email!==email){
                // alert(res.data.result)
            }else if(res.data.password!==password){
                    // alert(res.data.result)
            }
            
            
            
              
        })
        .catch(error => {
            console.log("error"+error);
        })


        
      
       
    

   }

  return (
    <div className='Login-page-container'>
         <div className='img-login-form-container'>

         
        <div className='logo-container'>
            <img  className='login-logo' src={AdminLogo} alt= "Logo"/>
            <h5 className='login-msg'>Login for seamless experience</h5>
        </div>
    <div className='form-container'>

        <form className='form-tag' onSubmit={formsubmitfunc}>
        <div className='login-form-input-fields'> 

        
        <TextField 
            value={email}
            className='input-fields' 
            id="standard-basic" 
            label="Email" 
            variant="standard"
            type="email"
            required
            onChange={(e) => setemail(e.target.value)} />

        <TextField
            value={password}
            className='input-fields' 
            id="standard-basic1" 
            label="Password" 
            variant="standard"
            type="password"
            required
            onChange={(e) => setpassword(e.target.value)} />

           <div>
           <input type="submit"  className="input-btn-login-form" ></input>
           </div>
            
           </div>   
        </form>
</div>
<div className='Registration-text'>
       <Link to="/registration" className='dont-have-account'><p>Don't have account/sing-up</p></Link> 
    </div>
    </div>
    
    </div>
  )
}

export default Loginpage ;