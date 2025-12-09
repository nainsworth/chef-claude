const GenerateRecipe = (props) => {
  return (
    <div className="get-recipe-container">
      <div className="get-recipe-text">
        <h3>Ready for Recipe</h3>
        <p>Generate a recipe from your list of ingredients</p>
      </div>
      <button onClick={props.handleClick}>Get a recipe</button>
    </div>
  );
};

export default GenerateRecipe;
