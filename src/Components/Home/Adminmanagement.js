import React from 'react'
import "./Employee.css"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Adminmanagementform from './AdminmanagementForm'
import './Adminmanagement.css' ;

function Adminmanagement() {
    const Navigate = useNavigate();
    const AddEmpFunc = () => {
        Navigate('/adminmangementform')
    }
    const EmpData = [
        {
            fname: "Rahul",
            Lname: "Patidar",
            mobileno: 8599978567,
            email: "Rahul@gmail.com"
        },
        {
            fname: "Prashant",
            Lname: "Khanchnadani",
            mobileno: 7899978567,
            email: "Prashant@gmail.com"
        },
        {
            fname: "Ravi",
            Lname: "sharma",
            mobileno: 9199978567,
            email: "Ravi@gmail.com"
        },
        {
            fname: "Tarun",
            Lname: "jain",
            mobileno: 9097878567,
            email: "Tarun@gmail.com"
        },
        {
            fname: "Garvit",
            Lname: "sen",
            mobileno: 6099978567,
            email: "Garvit@gmail.com"
        },
        {
            fname: "Jairaj",
            Lname: "Rathod",
            mobileno: 8099978567,
            email: "Jairaj@gmail.com"
        },
        {
            fname: "Santosh",
            Lname: "Patil",
            mobileno: 9099978567,
            email: "Santosh@gmail.com"
        },
        {
            fname: "Raj",
            Lname: "Malhotra",
            mobileno: 7099978567,
            email: "Raj@gmail.com"
        },
        {
            fname: "Kashish",
            Lname: "Jaiswal",
            mobileno: 6099978567,
            email: "Kashish@gmail.com"
        },
        {
            fname: "Shruti",
            Lname: "Patel",
            mobileno: 7099978567,
            email: "Shruti@gmail.com"
        },
        {
            fname: "Hemendra",
            Lname: "Joshi",
            mobileno: 8088785670,
            email: "Hemendra@gmail.com"
        },
        {
            fname: "Arvind",
            Lname: "Giri",
            mobileno: 9099785670,
            email: "Arvind@gmail.com"
        },

        {
            fname: "Shree",
            Lname: "Sharma",
            mobileno: 8078785670,
            email: "Shree@gmail.com"
        },


    ]



    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar />


                <div className='service-container-data'>




                    <div className='service-card'>
                        <h2>Firstname</h2>
                        {
                            EmpData.map((val) =>

                                <>

                                    <p className='Employee-detail'>{val.fname}</p>

                                </>




                            )}

                    </div>


                    <div className='service-card'>
                        <h2>Lastname</h2>
                        {
                            EmpData.map((val) =>

                                <>

                                    <p className='Employee-detail'>{val.Lname}</p>

                                </>




                            )}


                    </div>

                    <div className='service-card'>

                        <h2>Contact no.</h2>
                        {
                            EmpData.map((val) =>

                                <>

                                    <p className='Employee-detail'>{val.mobileno}</p>

                                </>

                            )}

                    </div>

                    <div className='service-card'>
                        <h2>Email</h2>

                        {
                            EmpData.map((val) =>

                                <>

                                    <p className='Employee-detail'>{val.email}</p>
                                </>
                            )}
                    </div>
                    <div className='Add-emp-container'>

                        <button className='Add-admin-btn' onClick={AddEmpFunc}>Add Admin</button>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Adminmanagement