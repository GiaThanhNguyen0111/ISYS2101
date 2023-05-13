import React from 'react'
import '../../Css/form.css'
import Footer from '../Footer';

const Loginform = () => {
    return (
        <>

        <p style={{display: 'flex', justifyContent: 'center', marginTop: '50px', fontSize: '30px', fontWeight: 550 }}>Login</p>
        <div className='formbox'>
            
            <form action='/login' method='post'>
                <div style={{marginTop: '30px'}}>
                   <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='form-title' >Email</p>
                    <input type='name' placeholder='Username' name='username' className='input-lg'></input>
                </div>
                <div>
                 <p style={{fontWeight: '700', fontSize: '20px', marginBottom: 0, paddingBottom: 10}} className='form-title'>Password</p>
                <input type='password' placeholder='Password' name='password' className='input-lg'></input>
                
                </div>
                <button className='loginbtn'>LOGIN</button>

            </form>
        </div>
        
    
        
        </>
    );

}

export default Loginform