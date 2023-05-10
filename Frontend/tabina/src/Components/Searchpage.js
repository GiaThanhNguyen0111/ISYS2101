import React, {useState, useEffect, lazy, Suspense} from 'react'
import '../Css/searchbar.css';
import '../Css/filtertab.css'

import RecipeItem from './RecipeItem';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Difficulty from './Searchpage/Filtertab/Difficuly';
import StarRating from './Searchpage/Filtertab/StarRating';
import Mealtype from './Searchpage/Filtertab/Mealtype';


const LazyRecipeItem = lazy(() => import('./RecipeItem'));

const Filtertab = () => {

  
  const [relavance, setRelavance] = useState("");
  const handleRelavance = (event) => {
      setRelavance(event.target.value);
    };


  const recipesToLoad = [];
  const [count , setCount] = useState(0);
  const [loadedItems, setLoadedItems] = useState(10);

  useEffect(() => {
      axios.get('http://localhost:3001/recipe').then(response => {
        setCount(response.data.recipes.length);
        console.log(response.data.recipes);
      });
    
  }, []);
  

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoadedItems((prevLoadedItems) => prevLoadedItems + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
 
  const [findRecipe, setFindRecipe] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const query = search.get("query");
    if (query) {
      setSearchResults(query.split(","));
    }
  }, []);



  
  const handleButtonClick = () => {
    const userInput = document.querySelector(".searchbar").value;
    setFindRecipe(userInput);
  
    let newResults = [];
  
    if (relavance === "ingred") {
      newResults = [...searchResults, userInput];
    } else {
      newResults = [userInput];
    }
  
    setSearchResults(newResults);
  
    let newQuery = "";
  
    if (relavance === "ingred") {
      const query = newResults.join("&ingredient=");
      newQuery = `?ingredient=${query}`;
      navigate(newQuery);
    } else {
      newQuery = `?name=${userInput}`;
      navigate(newQuery);
    }
  }
  

  useEffect(() => {
    
    let queryParam = "name";
    if (relavance === "ingred") {
      queryParam = "ingredient";
    }
    
    const query = searchResults.join("&");
    const newQuery = `?${queryParam}=${query}`;
    var uri = `http://localhost:3001/search${newQuery}`;
    !query & newQuery === null ? uri = 'http://localhost:3001/recipe' : uri = `http://localhost:3001/search${newQuery}`;
 
  
    axios.get(uri).then((response) => {
      setCount(response.data.recipes.length);
      console.log(response.data.recipes);
    });
  }, [searchResults, relavance]);
  
  
  // const handleTagRemove = (index) => {
  //   const newResults = [...searchResults];
  //   newResults.splice(index, 1);
  //   setSearchResults(newResults);

  //   let newQuery = "";
  //   if (relavance === "ingred") {
  //     const query = newResults.join("&ingredient=");
  //     newQuery = `?ingredient=${query}`
  //   } else {
  //     const query = newResults.join("&name=");
  //     newQuery = `?name=${query}`
  //   }

  //   if (newResults.length === 0) {
  //     newQuery = "";
  //   }

  //   navigate(newQuery);
  // };

  const handleTagRemove = (index) => {
    const newResults = [...searchResults];
    newResults.splice(index, 1);
    setSearchResults(newResults);
  
    let newQuery = "";
    if (relavance === "ingred") {
      const query = newResults.join("&ingredient=");
      newQuery = `?ingredient=${query}`
      navigate(newQuery);
    } else {
      const query = newResults.join("&name=");
      newQuery = `?name=${query}`
      navigate(newQuery);
    }
  
    if (newResults.length === 0) {
      window.location.href = window.location.origin + window.location.pathname;
    }
  };
  

  

  // const handleTagRemove = (index) => {
  //   const newResults = [...searchResults];
  //   newResults.splice(index, 1);
  //   setSearchResults(newResults);
  //   const query = newResults.join(",");
  //   navigate(`?ingredient=${query}`);
  // };



  

  // useEffect(() => {
  //   const query = searchResults.join(",");
  //   navigate('');
  // }, [handleTagRemove]);
  
    return (

        <>
<div className='page-contain'>

    
  
<div className="searchbar-container">
        <input type="text" placeholder="Add Ingredients" className='searchbar'/>
        <button className='searchbtn' onClick={handleButtonClick}>+</button>
        
        <>
        <select value={relavance} onChange={handleRelavance} className='relchoice'>
          <option value="name">Search by name</option>
          <option value="ingred">Search by ingredients</option>
          
        </select></>
      
      </div>


        
      
       
        <div className='filter-tab'>
            {/* All the tab */}
        <div className='heading-tab'>  
            <p>Ingredients</p>
        </div>
        {/* Recipe tab */}
        <div className='headtag'>
            
      <div className="result-container">
        {searchResults.map((result, index) => (
        <p className='ingred' key={index}>{result}
                    <span className='canc' onClick={() => handleTagRemove(index)}>x</span>
</p>
       

          
        ))}
      </div>
        </div>
       <Difficulty/>
        <p className='sep-tab'>___________________________________</p>


          <StarRating/>
 
        {/* end rating tab */}

        <p className='sep-tab'>___________________________________</p>
            


        </div>
        <div>
          <div style={{marginTop: '10px', paddingLeft: '1000px', fontSize: '30px', position: 'absolute', zIndex: -1 }}>
     
          <p >{count} Recipe Found!</p>

          </div>
        
        
          <div className='recipe-area'>
        {recipesToLoad.map((recipe) => (
          <div key={recipe.id} className='repcard'>
            <Link to={`/recipes/${recipe.id}`}>
              <Suspense fallback={<RecipeItem recipe={recipe} />}>
                <LazyRecipeItem recipe={recipe} />
              </Suspense>
            </Link>
          </div>
        ))}
      </div>
        </div>
</div>
        
        
       
        </>
    )
}

export default Filtertab