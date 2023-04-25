import React from 'react'
import Hero from '../Components/Hero';
import PopularRecipe from '../Components/PopularRecipe';
import MoreThanRecipe from '../Components/MoreThanRecipe';

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