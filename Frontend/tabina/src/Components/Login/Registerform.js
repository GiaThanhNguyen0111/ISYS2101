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
            <form>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Username</h4>
                    <input type='text' placeholder='Username'></input>
                </div>
                <div>
                <h4 style={{marginBottom: 5, fontSize: 20}}>Password</h4>
                <input type='password' placeholder='Password'></input>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Name</h4>
                    <input type='text' placeholder='Name'></input>
                </div>
                
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Email</h4>
                    <input type='email' placeholder='Email'></input>
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Date of birth</h4>
                    <input type='date' placeholder='Date of birth'></input>
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Phone</h4>
                    <input type='number' placeholder='Phone'></input>
                </div>
                <div>
                    <h4 style={{marginBottom: 5, fontSize: 20}}>Address</h4>
                    <input type='text' placeholder='Address'></input>
                </div>
           
                <button className='loginbtnr'>Register</button>

            </form>
        </div>

        <Footer/>
        
        
        </>

    );
}

export default Registerform;