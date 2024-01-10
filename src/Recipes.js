import { useEffect, useState} from 'react';
import DisplayRecipes from './DisplayRecipes';

function Recipes() {
    const MY_ID = "d2d1462e";
    const MY_KEY = "d451393d5d3ee53849a486b9cd36f808";
  
    const [mySearch, setMySearch] = useState("");
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("")
  
    useEffect(() => {
      const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
        const data = await response.json();
        setMyRecipes(data.hits)
      }
      getRecipe()
    },[wordSubmitted])
  
    const MyRecipeSearch = (e) => {
      setMySearch(e.target.value)
    }
  
    const finalSearch = (e) => {
      e.preventDefault()
      setWordSubmitted(mySearch)
    }



    return <div className='bigContainer'>

    <div>
        <h1 className='recipeHeading'>It's time to eat tasty and healthy food!</h1>
        <p className='recipePar'>Insert ingredients you have and we will find a recipe for you</p>
    </div>

    <div className='container2'>
        <form onSubmit={finalSearch}>
            <input className='search' onChange={MyRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={finalSearch} className='btnSearch'>
            SEARCH
        </button>
    </div>

    {myRecipes.map((element, index) => (
    <DisplayRecipes key={index}
    label={element.recipe.label}
    image={element.recipe.image}
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines} />
    ))}
    </div>
}

export default Recipes;