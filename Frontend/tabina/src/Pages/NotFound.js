import React, {useState, useEffect} from 'react';
import tabina from '../Image/logo/Tabina_transparent.png'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Css/page/not-found.css'

const NotFound = () => {
    return (
        <>
        <Navbar />
        <div className='not-found'>
            <img src={tabina} />
            <h1>404</h1>
            <span className='not-found-small'>Page not found</span>
            <span className='not-found-text'>The page you are looking for does not exist or another error occurs.</span>
            <span className='not-found-text'>Head back to <Link to={`/`}>Home</Link> Page.</span>
        </div>
        </>
    );
}

export default NotFound;