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
  const navigate = useNavigate();

  const [relavance, setRelavance] = useState("");
  const [count , setCount] = useState(0);
  const [loadedItems, setLoadedItems] = useState(10);
  const [findRecipe, setFindRecipe] = useState('');
  const [searchIngredientResults, setSearchIngredientResults] = useState([]);
  const [searchNameResult, setSearchNameResult] = useState('');
  const [recievedRecipes, setRecievedRecipes] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [level, setLevel] = useState(0);

  // useEffect(() => {
  //     axios.get('http://localhost:3001/recipe').then(response => {
  //       setCount(response.data.recipes.length);
  //       console.log(response.data.recipes);
  //     }); 
  // }, []);
  
  const handleRelavance = (event) => {
    setRelavance(event.target.value);
  };

  const handleCheckboxClick = (value) => {
    setLevel(value);
  }
  
  const handleButtonClick = () => {
    const userInput = document.querySelector(".searchbar").value;
    setFindRecipe(userInput);
  
    let newIngredientResults = [];
    let newNameResult = '';

    if (relavance === "ingred") {
      newIngredientResults = [...searchIngredientResults, userInput];
      setSearchIngredientResults(newIngredientResults);
    } else {
      newNameResult = userInput;
      setSearchNameResult(newNameResult)
    };
  
  
    // let newQuery = "";
    
    // const currentSearch = window.location.search;

    // if (relavance === "ingred") {
    //   !currentSearch ? newQuery = `?ingredient=${newIngredientResults}` : newQuery = `&ingredient=${newIngredientResults}`;
    //   const finalQuery = currentSearch.concat(newQuery);
    //   navigate(finalQuery);
    // } else {
    //   !currentSearch ? newQuery = `?name=${newNameResult}` : newQuery = `&name=${newNameResult}`;
    //   const finalQuery = currentSearch.concat(newQuery);
    //   navigate(finalQuery);
    // };
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
      ) {
        setLoadedItems((prevLoadedItems) => prevLoadedItems + 10);
      }
    };
    
    
  const handleTagRemove = (index) => {
    const newResults = [...searchIngredientResults];
    newResults.splice(index, 1);
    setSearchIngredientResults(newResults);
    
    const currentSearch = window.location.search;
    let newQuery = "";

    if (relavance === "ingred") {
      !currentSearch ? newQuery = `?ingredient=${newResults}` : newQuery = `&ingredient=${newResults}`;
      const finalQuery = currentSearch.concat(newQuery);
      navigate(finalQuery);
    }
    
    if (newResults.length === 0) {
      window.location.href = window.location.origin + window.location.pathname;
    };
    };


  useEffect(() => {
    const currentSearch = window.location.search;
    console.log(currentSearch);
    axios.get(`http://localhost:3001/recipe${currentSearch}`).then(response => {
      setCount(response.data.recipes.length);
      setRecievedRecipes(response.data.recipes);
      console.log(response.data.recipes);
    });
  }, [currentSearch]);
      
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    let currentSearch = new URLSearchParams(window.location.search);
    
    if(searchNameResult !== ""){
      currentSearch.set("name", searchNameResult);
    };
    if(searchIngredientResults.length > 0){
      currentSearch.set("ingredient", searchIngredientResults);
    };
    if(level > 0){
      currentSearch.set("level", level);
    }


    let finalSearch = currentSearch.toString();
    setCurrentSearch(finalSearch);
    navigate(`?${finalSearch}`);
  }, [searchNameResult, searchIngredientResults, level]); 

  useEffect(() => {
    const search = new URLSearchParams(window.location);
    const query = search.get("query");
    if (query) {
      setSearchIngredientResults(query.split(","));
    }
  }, []);


  useEffect(() => {
    
    let queryParam = "name";
    if (relavance === "ingred") {
      queryParam = "ingredient";
    }
    
    let query = searchIngredientResults.join("&");
    relavance === "ingred" ? query = searchIngredientResults.join("&") : query = searchNameResult;
    const newQuery = `?${queryParam}=${query}`;
  }, [searchIngredientResults, relavance, searchNameResult]);
  
  
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
        {searchIngredientResults.map((result, index) => (
        <p className='ingred' key={index}>{result}
                    <span className='canc' onClick={() => handleTagRemove(index)}>x</span>
</p>
       

          
        ))}
      </div>
        </div>
       <Difficulty handleCheckboxClick={handleCheckboxClick}/>
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
        {recievedRecipes.map((recipe) => (
          <div key={recipe.id} className='repcard'>
            <Link to={`/recipes/${recipe._id}`} state={{ recipe }}>
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