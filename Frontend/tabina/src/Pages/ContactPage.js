import React from 'react';
import "../Css/policy.css"
import "../Css/page/contact.css"
import Navbar from '../Components/Navbar';
import fb from '../Image/img/recipe/facebook (1).png'
import ig from '../Image/img/recipe/instagram (1).png'
import phone from '../Image/img/recipe/phone.png'
import location from '../Image/img/recipe/location.png'

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <h1 className="page-title">Contact</h1>
      

      <h2 className="policy-title">Contact us through channels</h2>
        <div className='contact-icon'>
            <div className='contact-icon-block'>
                <a href="https://www.facebook.com/tran.thanh.ne/" target="_blank"><img src={fb}/>Facebook</a>
                <a href="https://www.instagram.com/" target="_blank"><img src={ig}/>Instagram</a>
            </div>
            <div className='contact-icon-block'>
                <a target="_blank"><img src={phone}/>+84 962 228 3938</a>
                <a target="_blank"><img src={location}/>RMIT Hanoi Campus</a>
            </div>
        </div>

      <h2 className="policy-title">Our team</h2>
      <div className='contact-icon'>
            <div className='contact-icon-block'>
                <a target="_blank">Nguyen Gia Thanh</a>
                <a target="_blank">Hoang Quoc Bao</a>
                <a target="_blank">Hoang Vinh Khue</a>
                <a target="_blank">Doan Huy</a>
            </div>
            <div className='contact-icon-block'>
                <a target="_blank">s3932584</a>
                <a target="_blank">s3924343</a>
                <a target="_blank">s3926050</a>
                <a target="_blank">s3927474</a>
            </div>
        </div>

    </div>
  );
}

export default ContactPage;