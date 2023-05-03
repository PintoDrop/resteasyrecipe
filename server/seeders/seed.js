const db = require("../config");
const { User, Recipe } = require("../models");

const RecipeData = require("./recipesData.json");

db.once("open", async () => {
  await Recipe.deleteMany({});
  await User.deleteMany({});

  const recipes = await Recipe.create(RecipeData);

  console.log("Recipes seeded!");
  process.exit(0);
});
