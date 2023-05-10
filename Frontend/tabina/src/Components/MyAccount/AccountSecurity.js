import React from 'react'
import '../../Css/page/myAccount/accountSecurity.css'

function AccountSecurity() {
  return (
    <div className='accountsecurity-container'>
    <form className='accountsecurity-form'>

      <label for="username-label" className='text-label'>Username</label>
      <input type="text" id="username-input" name="username-input"/>

      <label for="password-label" className='text-label'>Password</label>
      <input type="text" id="password-input" name="password-input"/>

      <p className='login-title'>Login Option</p>
      
      <div className='account-radio-container'>
        <label>
          <input type="radio" id="login-fb" name="login-radio" className='login-radio'/>
          <span>Login using Facebook account</span>
        </label>
        <label>
          <input type="radio" id="login-gg" name="login-radio" className='login-radio'/>
          <span>Login using Google account</span>
        </label>
      </div>

      <button className='accountsecurity-btn'>UPDATE</button>
    </form>
  </div>
  )
}

export default AccountSecurity