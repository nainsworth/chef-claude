import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
      <div className="ingredient-list">
        <h2>Ingredients on hand:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li className="list-item" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="get-recipe-container">
        <div className="get-recipe-text">
          <h3>Ready for Recipe</h3>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <button>Get a recipe</button>
      </div>
    </main>
  );
};

export default Main;
