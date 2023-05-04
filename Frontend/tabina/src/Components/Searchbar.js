import React, { useState } from 'react';
import '../Css/searchbar.css';

export const searchResults = [];

const Searchbar = () => {
  const [relavance, setRelavance] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleRelavance = (event) => {
    setRelavance(event.target.value);
  };

  const handleButtonClick = () => {
    const userInput = document.querySelector('.searchbar').value;
    setSearchResults([...searchResults, userInput]);
  }

  return (
    <>
      <div className="searchbar-container">
        <input type="text" placeholder="Add Ingredients" className='searchbar' />
        <button className='searchbtn' onClick={handleButtonClick}>+</button>
        <select value={relavance} onChange={handleRelavance} className='relchoice'>
          <option value="">Relavance</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="result-container">
        {searchResults.map((result, index) => (
        <p className='ingred' key={index}>{result}<span className='canc'>x</span></p>
       

          
        ))}
      </div>

      
  
    </>
  );
};

export default Searchbar;
