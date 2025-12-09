const Ingredients = (props) => {
  return (
    <div className="ingredient-list">
      <h2>Ingredients on hand:</h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li className="list-item" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
