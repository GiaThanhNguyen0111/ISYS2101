import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Loginform from './Components/Login/Loginform';
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Loginform/>
      {/* <Footer/> */}
    </div>
  
  );
};

export default App;