import React from 'react'
import { useState } from 'react';

const Relavancetab = () => {

    const [relavance, setRelavance] = useState("");
    const handleRelavance = (event) => {
        setRelavance(event.target.value);
      };

      return (
        <>
        <select value={relavance} onChange={handleRelavance} className='relchoice'>
          <option value="">Relavance</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select></>
      )

}
export default Relavancetab