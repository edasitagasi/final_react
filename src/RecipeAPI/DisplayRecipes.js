import '../App.css';

function DisplayRecipes({label, image, calories, ingredients}) {
    
    return (
        <div>
            <div className="recipe_container">
                <div>
                    <h2 className='recipe_header'>{label}</h2>
                </div>
                <div>
                    <p className='recipe_par'>{calories.toFixed()} calories</p>
                </div>
                    <img src={image} alt="recipe" className="recipe_img" />
                    <ul>
                    {ingredients.map((ingredient, index) => (
                    <li key={index} className="recipe_ingr">
                    {ingredient}
                    </li>
                    ))}
                    </ul>
            </div>
        </div>

    )}

    export default DisplayRecipes;