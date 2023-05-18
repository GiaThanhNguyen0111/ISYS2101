import React from 'react'
import Hero from '../Components/Home/Hero';
import PopularRecipe from '../Components/Home/PopularRecipe';
import MoreThanRecipe from '../Components/Home/MoreThanRecipe';
import Chefcard from '../Components/Home/Chefcard';
import Navbar from '../Components/Navbar';

function Home() {
    return (
        <div>
        <Hero />
        <PopularRecipe />
        <MoreThanRecipe  />
        <Chefcard />
        </div>
      );
}

export default Home