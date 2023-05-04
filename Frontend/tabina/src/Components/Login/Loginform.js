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
            
            <form>
                <div>
                    <h3 style={{marginBottom: 5, }}>Username</h3>
                    <input type='name' placeholder='Username'  className='input-lg'></input>
                </div>
                <div>
                <h3 style={{marginBottom: 5}}>Password</h3>
                <input type='password' placeholder='Password' className='input-lg'></input>
                
                </div>
                <button className='loginbtn'>Login</button>

            </form>
        </div>
        
        <Footer/>
        
        </>
    );

}

export default Loginform