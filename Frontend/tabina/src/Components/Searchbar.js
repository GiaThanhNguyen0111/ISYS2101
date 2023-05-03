import React, { useState } from 'react';
import '../Css/searchbar.css';





const Searchbar = () => {
  const [relavance, setRelavance] = useState('');


  const handleRelavance = (event) => {
    setRelavance(event.target.value);
  };


  return (
    <>
      <div className="searchbar-container">
     
        <input type="text" placeholder="Add Ingredients" className='searchbar' />
        <button className='searchbtn'>+</button>
       
        <select value={relavance} onChange={handleRelavance}  className='relchoice'>
          <option value="">Relavance</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

      </div>
    </>
  );
};


export default Searchbar;