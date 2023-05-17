import React, {useState, useEffect, lazy, Suspense} from 'react'
import '../Css/searchbar.css';
import '../Css/filtertab.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Difficulty from './Searchpage/Filtertab/Difficuly';
import StarRating from './Searchpage/Filtertab/StarRating';

const LazyRecipeItem = lazy(() => import('./RecipeItem'));

const Filtertab = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [relavance, setRelavance] = useState("");
  const [count , setCount] = useState(0);
  const [loadedItems, setLoadedItems] = useState(10);
  const [findRecipe, setFindRecipe] = useState('');
  const [searchIngredientResults, setSearchIngredientResults] = useState([]);
  const [searchNameResult, setSearchNameResult] = useState('');
  const [recievedRecipes, setRecievedRecipes] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [level, setLevel] = useState(0);
  const [rating, setRating] = useState(0);
  const [mealType, setMealType] = useState('');
  const [category, setCategory] = useState('');

  const handleRelavance = (event) => {
    setRelavance(event.target.value);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleCheckboxClick = (value) => {
    setLevel(value);
  };

  const handleCheckboxRatingClick = (value) => {
    setRating(value);

  };
  
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

    setSearchTerm('');
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
    const finalResult = newResults.filter(result => newResults.indexOf(result) !== index);
    setSearchIngredientResults(finalResult);
  };


  useEffect(() => {
    const urlSearch = window.location.search;
    console.log(urlSearch);
    axios.get(`http://localhost:3001/recipe${urlSearch}`).then(response => {
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
    if (!(JSON.parse(localStorage.getItem('ingredient')) === null )) {
      setSearchIngredientResults(JSON.parse(localStorage.getItem('ingredient')));
    };
    console.log(JSON.parse(localStorage.getItem('ingredient')));
  }, []);

  useEffect(() => {
    if (searchIngredientResults.length > 0) {
      localStorage.setItem('ingredient', JSON.stringify(searchIngredientResults));
    } else if (searchIngredientResults.length === 0) {
      localStorage.removeItem('ingredient');
    };
    console.log(JSON.stringify(searchIngredientResults));
  }, [searchIngredientResults]);

  useEffect(() => {
    let currentSearch = new URLSearchParams(window.location.search);
    console.log(searchIngredientResults);
    if(searchNameResult !== ""){
      currentSearch.set("name", searchNameResult);
    };
    if(searchIngredientResults.length > 0){
      currentSearch.set("ingredient", searchIngredientResults);
    } else if (searchIngredientResults.length === 0 ) {
      currentSearch.delete("ingredient");
    };
    if(level > 0){
      currentSearch.set("level", level);
    } else if (level === '0') {
      currentSearch.delete("level");
    };
    if(rating > 0 ) {
      currentSearch.set("rating", rating);
    } else if (rating === "0") {
      currentSearch.delete("rating");
    };
    if( mealType === '' ) {
      currentSearch.delete('mealType');
    } else if (mealType !== ''){
      currentSearch.set('mealType', mealType);
    };
    if( category === '' ) {
      currentSearch.delete('category');
    } else if (category !== ''){
      currentSearch.set('category', mealType);
    };


    let finalSearch = currentSearch.toString();
    setCurrentSearch(finalSearch);
    navigate(`?${finalSearch}`);  
    console.log(finalSearch);
  }, [searchNameResult, searchIngredientResults, level, rating, mealType, category]); 

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
  }, [searchIngredientResults, relavance, searchNameResult]);
  
    return (

        <>
      <div className='page-contain'>
        <div className="searchbar-container">
                <input type="text" placeholder="Search" className='searchbar' onChange={handleChange} value={searchTerm} />
                <button className='searchbtn' onClick={handleButtonClick}>+</button>
                <>
                <select value={relavance} onChange={handleRelavance} className='relchoice'>
                  <option value="name">Search by name</option>
                  <option value="ingred">Search by ingredients</option> 
                </select></>
        </div>

        <div className='filter-tab' >
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
            // <IngredientItem key={index} value={result} onClick={() => handleTagRemove(index)} />
            ))}
          </div>
        </div>
        <Difficulty handleCheckboxClick={handleCheckboxClick}/>
        <p className='sep-tab'>___________________________________</p>

        <StarRating handleCheckboxClick={handleCheckboxRatingClick}/>
        {/* end rating tab */}
        <p className='sep-tab'>___________________________________</p>
        </div>
          <div>
          <div style={{marginTop: '10px', paddingLeft: '1000px', fontSize: '30px', position: 'absolute', zIndex: -1 }}>
            <p >{count} Recipe Found!</p>
          </div>
          
          <div className='recipe-area'>
          {recievedRecipes.map((recipe) => (
          <div key={recipe._id} className='repcard'>
              <Suspense fallback={<div>Loading...</div>}>
                <Link to={`/recipes/${recipe._id}`} state={{ recipe }}>
                  <LazyRecipeItem recipe={recipe} />
                </Link>
              </Suspense>
          </div>
        ))}
          </div>
        </div>
      </div>
      </>
    )
}

export default Filtertab;