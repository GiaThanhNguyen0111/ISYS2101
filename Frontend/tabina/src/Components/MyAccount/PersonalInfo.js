import React, { useEffect, useState } from 'react'
import '../../Css/page/myAccount/personalInfo.css'
import axios from 'axios';

const PersonalInfo = () => {
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  // const handleOnClick = () => {
  //   const userInfo = {
  //     DOB: dob,
  //     Phone: phoneNumber,
  //     Address: address,
  //   };
  //   axios.patch('/updateUserInfo', {userInfo}).then(res => {
  //     console.log(res.data);
  //   });
  // };

  const changeEmail = (value) => {
    setEmail('');
    setEmail(value);
  };
  const changeDOB = (value) => {
    setDob(value);
  };
  const changePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  const changeAddress = (value) => {
    setAddress(value);
  };

  useEffect(() => {
    axios.get('/userInfo').then(response => {
      setAddress(response.data.user[0].Address);
      setDob(response.data.user[0].DOB);
      setEmail(response.data.user[0].username);
      setPhoneNumber(response.data.user[0].Phone);
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className='personalinfo-container'>
      <form className='personalinfo-form' action='/updateUserInfo' method='POST'>

        <label for="email-label" className='text-label'>Email</label>
        <input type="text" id="email-input" name="email" placeholder={email} value={email} onChange={e => changeEmail(e.target.value)}/>

        <label for="dob-label" className='text-label'>DOB</label>
        <input type="text" id="dob-input" name="dob" placeholder={dob} value={dob} onChange={e => changeDOB(e.target.value)}/>

        <label for="phone-label" className='text-label'>Phone</label>
        <input type="text" id="phone-input" name="phoneNumber" placeholder={phoneNumber} value={phoneNumber} onChange={e => changePhoneNumber(e.target.value)}/> 

        <label for="address-label" className='text-label'>Address</label>
        <input type="text" id="address-input" name="address" placeholder={address} value={address} onChange={e => changeAddress(e.target.value)}/>

        <div className='personalinfo-btn-container'>
          <button type='submit' className='personalinfo-btn-update'>UPDATE</button>
          <button className='personalinfo-btn-logout'>LOG OUT</button>
        </div>
        
      </form>
    </div>
  )
}

export default PersonalInfo;