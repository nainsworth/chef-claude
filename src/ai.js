import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Also put all measurements in either grams or milliliters. Include total estimated calories and macros for each serving and the number of servings. Not important, but try to generate a recipe where there's 10g of protein for every 100 calories.`;

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getRecipeFromAI = async (ingredientsArr) => {
  const ingredientsList = ingredientsArr.join(", ");
  const msg = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Create a recipe using the following ingredients: ${ingredientsList}`,
      },
    ],
  });
  return msg.content[0].text;
};

export { getRecipeFromAI };
