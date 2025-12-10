import ReactMarkdown from "react-markdown";

const Recipe = (props) => {
  return (
    <div className="suggested-recipe" aria-live="polite">
      
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
};

export default Recipe;
