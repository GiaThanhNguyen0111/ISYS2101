import React from 'react'
import user from '../../Image/img/recipe/user.png'
import verified from '../../Image/img/recipe/verified.png'
import preferences from '../../Image/img/recipe/positive-vote.png'
import '../../Css/page/myAccount/sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  const showAccountSecurityPage = () => {
    var accSecuritypage = document.getElementsByClassName('accountsecurity-container');
    var personalInfopage = document.getElementsByClassName('personalinfo-container');

    for (var i=0;i<accSecuritypage.length;i+=1){
      accSecuritypage[i].style.display = 'block';
    }

    for (var i=0;i<personalInfopage.length;i+=1){
      personalInfopage[i].style.display = 'none';
    }
  }

  const showPersonalInfoPage = () => {
    var accSecuritypage = document.getElementsByClassName('accountsecurity-container');
    var personalInfopage = document.getElementsByClassName('personalinfo-container');

    for (var i=0;i<accSecuritypage.length;i+=1){
      accSecuritypage[i].style.display = 'none';
    }

    for (var i=0;i<personalInfopage.length;i+=1){
      personalInfopage[i].style.display = 'block';
    }
  }

  return (
    <div className='sidebar-container'>
      <a className='sidebar-selection' onClick={showPersonalInfoPage}><img src={user}/><span>Personal Information</span></a>
      <a className='sidebar-selection' onClick={showAccountSecurityPage}><img src={verified}/><span>Account Security</span></a>
      <a className='sidebar-selection'><img src={preferences}/><span>Preferences</span></a>
    </div>
  )
}

export default Sidebar