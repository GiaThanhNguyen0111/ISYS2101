import React from 'react'
import '../Css/account.css'

const Account = () => {
    return (
        <>
        <div>
        <h1 style={{marginLeft: 20}}>My Account</h1>
        <div>
        <div className='in4box' style={{background: "#F4EDE5", maxWidth: 200, borderRadius: 10, paddingLeft: 10}}>
        <i class="fa-solid fa-user"></i>
            <p className='pin4'>Personal information</p>
        </div>
       
        <div className='in4box'>
        <i class="fa-solid fa-shield"></i>
        <p className='pin4'>Account security</p>
        </div>
        <div className='in4box'>
        <i class="fa-solid fa-thumbs-up"></i>            
        <p className='pin4'>Preferences</p>

        </div>
        
        </div>


        </div>
        
        </>

    )
}

export default Account;