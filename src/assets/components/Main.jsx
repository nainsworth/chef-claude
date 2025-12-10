import { useState } from "react";
import GenerateRecipe from "./GenerateRecipe";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
import { getRecipeFromAI } from "../../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const getRecipe = async () => {
    const recipeMarkdown = await getRecipeFromAI(ingredients);
    setRecipe(recipeMarkdown);
  };

  return (
    <main>
      <form className="ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>

      {ingredients.length > 0 && <Ingredients ingredients={ingredients} />}

      {ingredients.length > 3 && <GenerateRecipe handleClick={getRecipe} />}

      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
};

export default Main;
