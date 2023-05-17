import React from 'react'
import '../../Css/form.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Loginform = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <div className='loginpage-container'>
            <p style={{display: 'flex', justifyContent: 'center', marginTop: '50px', fontSize: '30px', fontWeight: 550 }}>Login</p>

            <form action='https://damp-anchorage-45936.herokuapp.com/login' method='post' className='formbox'>
                <div>
                    <p className='form-title' >Email</p>
                    <input type='name' placeholder='Username' name='username' className='input-lg' value={username}></input>
                </div>

                <div>
                    <p className='form-title'>Password</p>
                    <input type='password' placeholder='Password' name='password' className='input-lg' value={password}></input>
                </div>
                
                <div className='btn-container'>
                    <button className='loginbtn'>LOGIN</button>
                    <Link to='/register'><button className='createaccbtn'>CREATE ACCOUNT</button></Link>
                </div>
            </form>
        </div>

        </>
    );

}

export default Loginform