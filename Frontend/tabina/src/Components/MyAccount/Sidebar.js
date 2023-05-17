import React from 'react'
import user from '../../Image/img/recipe/user.png'
import verified from '../../Image/img/recipe/verified.png'
import preferences from '../../Image/img/recipe/positive-vote.png'
import '../../Css/page/myAccount/sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <Link to='/myaccount/accpersonalInfo' className='sidebar-selection'><img src={user}/><span>Personal Information</span></Link>
      <Link to='/myaccount/accsecurity' className='sidebar-selection' ><img src={verified}/><span>Account Security</span></Link>
    </div>
  )
}

export default Sidebar