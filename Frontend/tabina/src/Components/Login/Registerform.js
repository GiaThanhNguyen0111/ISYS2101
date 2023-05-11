import React from 'react'
import '../../Css/registerform.css'
import Navbar from '../Navbar';
import Footer from '../Footer';
const Registerform = () => {
    return (
        <>
        <Navbar/>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Register</h1>
        
        <div className='formboxre'>
            <form action='/register' method='POST'>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Email</h4>
                    <input type='email' placeholder='Username' name='username'  className='input-lg' ></input>
                </div>
                <div>
                <h4 style={{marginBottom: 5, fontSize: 20}}>Password</h4>
                <input type='password' placeholder='Password' name='password' className='input-lg' ></input>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Full Name</h4>
                    <input type='text' placeholder='Name' name='fullName' className='input-lg' ></input>
                </div>
                
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Date of birth</h4>
                    <input type='date' name='DOB' placeholder='Date of birth'></input>
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Phone</h4>
                    <input type='number' name='phoneNumber' placeholder='Phone'  className='input-lg' ></input>
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Address</h4>
                    <input type='text' placeholder='Address' name='address' className='input-lg' ></input>
                </div>
                <button className='loginbtnr'>Register</button>
            </form>
        </div>

        <Footer/>
        
        
        </>

    );
}

export default Registerform;