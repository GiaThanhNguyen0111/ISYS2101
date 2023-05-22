import React from 'react';
import '../Css/page/myAccount/myAccount.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/MyAccount/Sidebar'
import PersonalInfo from '../Components/MyAccount/PersonalInfo'
import AccountSecurity from '../Components/MyAccount/AccountSecurity';
import Preferences from '../Components/MyAccount/Preferences';
import Navbar from '../Components/Navbar';


function MyAccount() {
  return (
    <>
    <Navbar />
    <div className='myacc-container'>

        <div className='myacc-heading'>My Account</div>

        <div className='myacc-content'>
          <Sidebar className='myacc-content-sidebar'/>
      
          <div className='myacc-content-form'>
          <Outlet />
          </div>
          
        </div>
    </div>
    </>
  )
}

export default MyAccount