import React, { useState } from 'react';
import '../Css/searchbar.css'

const SearchBar = () => {
    return (
        <>
        <input type='text' className='searchbar'/>
        <button style={{width: '35px', height: '35px'}}>+</button>
        </>
    )
}

export default SearchBar;
