import React, { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
// import Services from "./Services";
import Config from "./Config";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
    const Navigate = useNavigate();

    const LogoutFunc = () => {
        Navigate("/")
    }


    return (
        <div className="sidebar-container">
            <div className="top"><span className="Happy-life-Logo" id="Happy-Logo" >Admin </span><span className="Happy-life-Logo" id="Life-logo">Portal</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title-sidebar">Main</p>
                    <Link to={"/config"} className="Link-class">


                        <li>
                            <SettingsSuggestOutlinedIcon className="sidebar-icons" />
                            <span className="sidebar-icon-name">Config</span>
                        </li>
                    </Link>
                    {/* <Link to={"/user"} className="Link-class">

                   
                    <li>
                        <BadgeOutlinedIcon  className="sidebar-icons" />
                        <span className="sidebar-icon-name">Employee</span>
                    </li>
                    </Link> */}
                    <Link to={"/employee"} className="Link-class">


                        <li>
                            <ManageHistoryOutlinedIcon className="sidebar-icons" />
                            <span className="sidebar-icon-name">Employee Management</span>
                        </li>
                    </Link>

                    {/* <Link to={"/Admin"} className="Link-class">

                     
                    <li>
                        <AdminPanelSettingsOutlinedIcon className="sidebar-icons"/>
                        <span className="sidebar-icon-name">Admin</span>
                    </li>
                    </Link> */}

                    <Link to={"/Adminmanagement"} className="Link-class">


                        <li>
                            <EngineeringOutlinedIcon className="sidebar-icons" />
                            <span className="sidebar-icon-name">Admin Management</span>
                        </li>
                    </Link>

                    <Link to={"/vendor"} className="Link-class">


                        <li>
                            <StoreOutlinedIcon className="sidebar-icons" />
                            <span className="sidebar-icon-name">Vendor</span>
                        </li>
                    </Link>

                    <p className="title-sidebar">List</p>
                    <li>
                        <QueryStatsIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name">Product</span>
                    </li>
                    <li>
                        <InventoryOutlinedIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name">Order</span>
                    </li>

                    <li>
                        <LocalShippingOutlinedIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name">Delivery</span>
                    </li>

                    <p className="title-sidebar">Useful</p>
                    {/* <li>
                        <QueryStatsIcon className="sidebar-icons"/>
                        <span className="sidebar-icon-name">Sats</span>
                    </li> */}
                    <li>
                        <NotificationsActiveOutlinedIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name">Notification</span>
                    </li>

                    <p className="title-sidebar">Service</p>
                    {/* <li>
                        <SettingsSystemDaydreamIcon className="sidebar-icons"/>
                        <span className="sidebar-icon-name">System Health</span>
                    </li> */}

                    <li>
                        <PsychologyOutlinedIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name">Logs</span>
                    </li>

                    <li>
                        <SettingsApplicationsOutlinedIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name">Settings</span>
                    </li>

                    <p className="title-sidebar">User</p>
                    <Link to={"/user"} className="Link-class">


                        <li>
                            <ManageAccountsOutlinedIcon className="sidebar-icons" />
                            <span className="sidebar-icon-name">Profile</span>
                        </li>

                    </Link>

                    <li>
                        <LogoutIcon className="sidebar-icons" />
                        <span className="sidebar-icon-name" onClick={LogoutFunc}>Logout</span>
                    </li>
                </ul>



            </div>
        </div>


    )



}

export default Sidebar;