import React from 'react'
import Hero from '../Components/Home/Hero';
import PopularRecipe from '../Components/Home/PopularRecipe';
import MoreThanRecipe from '../Components/Home/MoreThanRecipe';

function Home() {
    return (
        <div>
        <Hero />
        <PopularRecipe />
        <MoreThanRecipe  />
        </div>
      );
}

export default Home