import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {
               recipes.map(recipe => <Recipe
                key={recipe.id} 
                recipe={recipe}
                handleWantToCook={handleWantToCook}
                >
                </Recipe>) 
            }
        </div>
    );
};
Recipes.propTypes={
    handleWantToCook: PropTypes.func.isRequired,
}
export default Recipes;