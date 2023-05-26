import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Css/registerform.css'
import Navbar from '../Navbar';

const Registerform = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };
    const handleDOBChange = (e) => {
        setDob(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://damp-anchorage-45936.herokuapp.com/api/register', {
            username: email,
            password: password,
            fullname: fullName,
            DOB: dob,
            phoneNumber: phoneNumber,
            address: address
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(response => {
            console.log(response);
        }).then(() => {
            navigate('/');
        })
        .catch(err => {
            console.log(err);
        });
        
    } 

    return (
        <>
        <Navbar/>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>Register</h1>
        
        <div className='formboxre'>
            <form onSubmit={handleSubmit}>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Email</p>
                    <input type='email' placeholder='Username' name='username' onChange={ handleEmailChange} className='input-reg'></input>
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Password</p>
                <input type='password' placeholder='Password' name='password' onChange={ handlePasswordChange} className='input-reg' ></input>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Full name</p>
                    <input type='text' placeholder='Name' name='fullName' onChange={ handleFullNameChange} className='input-reg' ></input>
                </div>
                
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Date of birth</p>
                    <input type='date' name='DOB' placeholder='Date of birth' onChange={ handleDOBChange} className='input-reg'></input>
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Phone</p>
                    <input type='number' name='phoneNumber' placeholder='Phone' onChange={ handlePhoneNumberChange} className='input-reg' ></input>
                </div>
                <div>
                <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='reg-title' >Address</p>
                    <input type='text' placeholder='Address' name='address' onChange={ handleAddressChange} className='input-reg' ></input>
                </div>
                <button className='loginbtnr' type='submit'>Register</button>
            </form>
        </div>

        
        
        </>

    );
}

export default Registerform;