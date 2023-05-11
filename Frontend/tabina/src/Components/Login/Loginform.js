import React from 'react'
import '../../Css/form.css'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Loginform = () => {
    return (
        <>
        <Navbar/>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px' }}>LOGIN</h1>
        <div className='formbox'>
            
            <form action='/login' method='post'>
                <div>
                    <h3 style={{marginBottom: 5, }}>Email</h3>
                    <input type='name' placeholder='Username' name='username' className='input-lg'></input>
                </div>
                <div>
                <h3 style={{marginBottom: 5}}>Password</h3>
                <input type='password' placeholder='Password' name='password' className='input-lg'></input>
                
                </div>
                <button className='loginbtn'>Login</button>

            </form>
        </div>
        
        <Footer/>
        
        </>
    );

}

export default Loginform