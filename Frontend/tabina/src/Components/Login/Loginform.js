import React from 'react'
import '../../Css/form.css'

const Loginform = () => {
    return (
        <>
        <div className='formbox'>
            <form>
                <div>
                    <h4 style={{marginBottom: 5, fontFamily: 'Inter', fontSize: 20}}>Username</h4>
                    <input type='name' placeholder='Username'></input>
                </div>
                <div>
                <h4 style={{marginBottom: 5, fontFamily: 'Inter', fontSize: 20}}>Password</h4>
                <input type='password' placeholder='Password'></input>
                
                </div>
                <button className='loginbtn'>Login</button>

            </form>
        </div>
        
        
        </>
    );

}

export default Loginform