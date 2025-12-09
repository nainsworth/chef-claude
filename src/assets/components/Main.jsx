import { useState } from "react";

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
    setIsRecipeShown(prevShown => !prevShown);
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

      {ingredients.length > 0 && (
        <>
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

          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div className="get-recipe-text">
                <h3>Ready for Recipe</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button onClick={toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </>
      )}

      {isRecipeShown && (
        <div className="recipe-details">
          <div className="suggested-recipe">
            <h2>Suggested Recipe:</h2>
            <p>
              Based on your available ingredients, I would recommend making a
              Creamy Garlic Parmesan Chicken dish. Here's the recipe
            </p>
          </div>
          <div className="suggested-ingredients">
            <h3>Ingredients:</h3>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
          </div>
          <div className="suggested-instructions">
            <h3>Instructions:</h3>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
            <p>Enjoy!</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
