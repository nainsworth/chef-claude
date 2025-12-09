import { useState } from "react";
import GenerateRecipe from "./GenerateRecipe";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "garlic",
    "parmesan cheese",
    "heavy cream",
    "butter",
    "olive oil",
    "salt",
    "pepper",
  ]);
  const [isRecipeShown, setIsRecipeShown] = useState(false);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const toggleRecipeShown = () => {
    setIsRecipeShown((prevShown) => !prevShown);
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

      {ingredients.length > 3 && (
        <GenerateRecipe handleClick={toggleRecipeShown} />
      )}

      {isRecipeShown && <Recipe />}
    </main>
  );
};

export default Main;
