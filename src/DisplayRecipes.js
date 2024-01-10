import './App.css';

function DisplayRecipes({label, image, calories, ingredients}) {
    
    return (
        <div className="recipe_wrap">
            <div className="recipe_container">
                    <h2>{label}</h2>
                    <p>{calories.toFixed()} calories</p>
                    <img src={image} alt="recipe" className="recipe_img" />
                    <ul className="container list">
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>
                    {ingredient}
                    </li>
                    ))}
                    </ul>
            </div>
        </div>

    )}

    export default DisplayRecipes;