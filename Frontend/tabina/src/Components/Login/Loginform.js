import React, {useState} from 'react'
import '../../Css/form.css'
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loginform = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://damp-anchorage-45936.herokuapp.com/api/login',{
            username: username,
            password: password
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(response => {
            console.log(response.data.isLoggedIn);
            if (response.data.isLoggedIn === true) {
                navigate('/');
            } else {
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <>
        <div className='loginpage-container'>
            <p style={{display: 'flex', justifyContent: 'center', marginTop: '50px', fontSize: '30px', fontWeight: 550 }}>Login</p>

            <form className='formbox' onSubmit={handleSubmit}>
                <div>
                    <p className='form-title' >Email</p>
                    <input type='email' placeholder='Username' name='username' className='input-lg' value={username} onChange={handleChange}/> 
                </div>

                <div>
                    <p className='form-title'>Password</p>
                    <input type='password' placeholder='Password' name='password' className='input-lg' value={password} onChange={handlePasswordChange}/> 
                </div>
                
                <div className='btn-container'>
                    <button className='loginbtn' type='submit' >LOGIN</button>
                    <Link to='/register'><button className='createaccbtn'>CREATE ACCOUNT</button></Link>
                </div>
            </form>
        </div>

        </>
    );

}

export default Loginform