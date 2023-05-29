import React, { useState } from 'react'
import "./Registration.css";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom' ;
import TextField from '@mui/material/TextField';
import AdminLogo from "../Images/Admin-logo.png"



function Registration() {
  const Navigate = useNavigate();

 
   


    const [fname , setfname] = useState("");
    const [lname , setlname] = useState("");
    const [email , setemail] = useState("");
    const [contact , setcontact] = useState("");
    const [password, setpassword] = useState("");
    const [address, setaddress] = useState("");
    // const EMAIL_REGEX = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
  
    

    
      
    
    
     const SubmitFunc = async(e) => {
    //  if (fname===" "||fname.length<=2) {
    //    alert("invalid first name")
    //  } else if(lname===" "||lname.length<=2) {
    //    alert("invalid last name ")
    //  } else if(contact===" "||contact.length<10||contact.length>10 ||contact===NaN){
    //    alert("invalid contact number")
    //  } else if(password===" "){
    //     alert("The password is blank")
    //  }else if(password.length<8){
    //   alert("Password character must be more than 8 character")
    //  }else if(address===" "){
    //   alert("The address is blank")
      
    //  }
    //  else if(email===" "){
    //   alert("The email is blank")
    //  }else {
    //   alert("The Registration form is submitted :)")
      Navigate("/")
    //  }
     
        
      
        e.preventDefault();
        const res =  await axios.get("https://sonnentechs.com/Webs/happy_life/api/process.php?action=User_Signup&name="+fname+" "+lname+"&email="+email+"&contact="+contact+"&password="+password+"&address="+address ,{
           
        })
        .then(response => {
            // console.log(response.data);
        })

        .catch(error => {
            console.log(error);
        })
           
      //  Navigate("/") 
        
     }

     

    

    

    return (
       
    
         
       
        <div className='registration-page-container'>
       
          <div className='registration-logo-form-container'>
          
            <div className='logo-container'>
            
                <img className='Reg-logo' src={AdminLogo} alt="Logo" />

            </div>
            <h4 className='register-yourself-msg'>Register yourself </h4>
            <div className='Registration-page-form-container'>
            <form onSubmit={SubmitFunc} className="reg-form">

            
            <div className='input-field-container'>
            <TextField 
            value={fname}
            className='input-fields' 
            id="standard-basic" 
            label="Firstname" 
            variant="standard"
            type="text"
            required
            onChange={(e) => setfname(e.target.value)} />
            
            <TextField 
            value={lname}
            className='input-fields' 
            id="standard-basic" 
            label="Lastname" 
            variant="standard"
            type="text"
            required
            onChange={(e) => setlname(e.target.value)} />
            </div>
              <div className='input-field-container'>
              <TextField 
              value={contact}
              className='input-fields' 
              id="standard-basic" 
              label="Contact no." 
              variant="standard"
              type="tel"
              required
              onChange={(e) => setcontact(e.target.value)} 

              />

              <TextField 
              value={email}
              className='input-fields' 
              id="standard-basic" 
              label="Email" 
              type="email"
              variant="standard" 
              required
              onChange={(e) => setemail(e.target.value)}
              />
              </div>
              <div className='input-field-container'>
              <TextField 
              type= "password"
              value={password}
              className='input-fields' 
              id="standard-basic" 
              label="Password" 
              variant="standard" 
              onChange={(e) => setpassword(e.target.value)}
              required
              />
              
             
              <TextField 
              value={address}
              className='input-fields' 
              id="standard-basic" 
              label="Address" 
              variant="standard" 
              onChange={(e) => setaddress(e.target.value)}
              required
              />
              
              </div>
              <div className='input-fields-btn'>
              <input type="submit" className='input-btn-reg-form'></input>
              </div>
              
              </form>
              <div className='already-reg-msg'>
                <p className='already-reg-msg-para'>Already register ? go to <Link className='link' to="/">Login</Link></p>
              </div>
                
            </div>
            </div>
            
        </div>
    
    )

}

export default Registration