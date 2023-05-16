import React from 'react'
import '../../Css/registerform.css'

const Registerform = () => {
    return (
        <>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>Register</h1>
        
        <div className='formboxre'>
            <form action='/register' method='POST'>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Email</p>
                    <input type='email' placeholder='Username' name='username' className='input-reg'></input>
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Password</p>
                <input type='password' placeholder='Password' name='password' className='input-reg' ></input>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Full name</p>
                    <input type='text' placeholder='Name' name='fullName' className='input-reg' ></input>
                </div>
                
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Date of birth</p>
                    <input type='date' name='DOB' placeholder='Date of birth' className='input-reg'></input>
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Phone</p>
                    <input type='number' name='phoneNumber' placeholder='Phone'  className='input-reg' ></input>
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Address</p>
                    <input type='text' placeholder='Address' name='address' className='input-reg' ></input>
                </div>
                <button className='loginbtnr'>Register</button>
            </form>
        </div>

        
        
        </>

    );
}

export default Registerform;