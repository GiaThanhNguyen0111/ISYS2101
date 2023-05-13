import React from 'react'
import '../../Css/page/myAccount/personalInfo.css'

function PersonalInfo() {
  return (
    <div className='personalinfo-container'>
      <form className='personalinfo-form'>

        <label for="email-label" className='text-label'>Email</label>
        <input type="text" id="email-input" name="email-input" placeholder="khue2511@gmail.com"/>

        <label for="dob-label" className='text-label'>DOB</label>
        <input type="text" id="dob-input" name="dob-input" placeholder="dd/mm/yy"/>

        <label for="phone-label" className='text-label'>Phone</label>
        <input type="text" id="phone-input" name="phone-input" placeholder="123-456-789"/> 

        <label for="address-label" className='text-label'>Address</label>
        <input type="text" id="address-input" name="address-input" placeholder="Street, City"/>

        <button className='personalinfo-btn'>UPDATE</button>
      </form>
    </div>
  )
}

export default PersonalInfo;