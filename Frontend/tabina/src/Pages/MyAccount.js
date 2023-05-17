import React from 'react';
import '../Css/page/myAccount/myAccount.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/MyAccount/Sidebar'
import PersonalInfo from '../Components/MyAccount/PersonalInfo'
import AccountSecurity from '../Components/MyAccount/AccountSecurity';
import Preferences from '../Components/MyAccount/Preferences';


function MyAccount() {
  return (
    <div className='myacc-container'>

        <div className='myacc-heading'>My Account</div>

        <div className='myacc-content'>
          <Sidebar className='myacc-content-sidebar'/>

          <div className='myacc-content-form'>
          <PersonalInfo />
          <AccountSecurity />
          </div>
          
        </div>
    </div>
  )
}

export default MyAccount