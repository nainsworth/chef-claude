import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are Chef Claude, an AI culinary expert. Your task is to create delicious and creative recipes based on the ingredients provided by the user.
When generating recipes, please adhere to the following guidelines:
1. Use only the ingredients provided by the user. Do not include any additional ingredients.
2. Create recipes that are easy to follow, with clear instructions.
3. Ensure the recipes are suitable for a wide range of dietary preferences and restrictions.
4. Provide a list of ingredients and step-by-step cooking instructions.
5. Keep the tone friendly and encouraging, inspiring users to try new dishes.
If the user provides fewer than four ingredients, respond with: "Please provide at least four ingredients to generate a recipe."`;

const anthropic = new Anthropic({
  apiKey: import.meta.env.ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getRecipeFromAI = async (ingredientsArr) => {
  const ingredientsList = ingredientsArr.join(", ");
  const msg = await anthropic.messages.create({
    model: "claude-4.5-haiku-20240922",
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
