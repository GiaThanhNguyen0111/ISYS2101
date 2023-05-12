import React, {useState, useEffect, lazy, Suspense} from 'react'
import '../Css/searchbar.css';
import '../Css/filtertab.css'
import starBlank from '../Image/img/recipe/starBlank.png'
import starColor from '../Image/img/recipe/starColor.png'
import recipesData from "../test-data/recipesData";
import RecipeItem from './RecipeItem';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
import axios from 'axios';


const LazyRecipeItem = React.lazy(() => import('./RecipeItem'));

const Filtertab = () => {

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
  const [relavance, setRelavance] = useState("");
  const [findRecipe, setFindRecipe] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recievedRecipes, setRecievedRecipes] = useState([]);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const query = search.get("query");
    if (query) {
      setSearchResults(query.split(","));
    }
  }, []);

  const handleRelavance = (event) => {
    setRelavance(event.target.value);
  };

  
  const handleButtonClick = () => {
    const userInput = document.querySelector(".searchbar").value;
    setFindRecipe(userInput);
    const newResults = [userInput];
    setSearchResults(newResults);
  };

  useEffect(() => {
    const query = searchResults.join("&");
    const newQuery = `?name=${query}`;
    var uri = `http://localhost:3001/search${newQuery}`;
    !query ? uri = 'http://localhost:3001/recipe' : uri = `http://localhost:3001/search${newQuery}`;
    navigate(newQuery);
    axios.get(uri).then(response => {
      setCount(response.data.recipes.length);
      console.log(response.data.recipes);
      setRecievedRecipes(response.data.recipes);
    });
  }, [searchResults]);
  
  console.log(recievedRecipes);
  
  const handleTagRemove = (index) => {
    searchResults.splice(index, 1);
    setSearchResults(searchResults);
  };

  

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
        <select value={relavance} onChange={handleRelavance} className='relchoice'>
          <option value="">Relavance</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
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
        <div className='heading-tab'>  
            <p>Filters</p>
        </div>
        <div>
            <p className='diff'>Difficulty</p>
            <label className='diff-level'>
                <input type='checkbox'  className='diff-option' />
                <span  className='class-lvl'>World Class</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Expert</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Intermidiate</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Average</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Beginner</span>
            </label>

        </div>
        <p className='sep-tab'>___________________________________</p>




        {/* Star rating tab */}
        <div className='rating-tab'>

        <p className='diff'>Rating</p>

        {/* 5 star */}


        <label className='diff-level'>
        <input type='checkbox'  className='diff-option' />

        <div className='star-rat'>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>

        </div>
            
        </label>

        {/* 4 star */}

        <label className='diff-level'>
        <input type='checkbox'  className='diff-option' />

        <div className='star-rat'>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>

        </div>
            
        </label>

        {/* 3 star */}

        <label className='diff-level'>
        <input type='checkbox'  className='diff-option' />

        <div className='star-rat'>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>

        </div>
            

        </label>

        {/* 2 star */}

         <label className='diff-level'>
        <input type='checkbox'  className='diff-option' />

        <div className='star-rat'>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>

        </div>
            
        </label>
        
        {/* 1 star */}

        <label className='diff-level'>
        <input type='checkbox' className='diff-option' />

        <div className='star-rat'>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>

        </div>
            
        </label>

    
        


        </div> 
        {/* end rating tab */}

        <p className='sep-tab'>___________________________________</p>
       <div>
       <p className='diff'>Meal type</p>

       </div>
       <label className='diff-level'>
                <input type='checkbox'  className='diff-option' />
                <span  className='class-lvl'>Appetizer</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox'  className='diff-option' />
                <span  className='class-lvl'>Main</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox'  className='diff-option' />
                <span  className='class-lvl'>Dessert</span>
            </label>
            <br/>
            <br/>
            <br/>
            


        </div>
        <div>
          <div style={{marginTop: '10px', paddingLeft: '1000px', fontSize: '30px', position: 'absolute', zIndex: -1 }}>
     
          <p >{count} Recipe Found!</p>

          </div>
        
        
          <div className='recipe-area'>
        {recievedRecipes.map((recipe) => (
          <div key={recipe.id} className='repcard'>
            <Link to={`/recipes/${recipe._id}`}>
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