const db = require("../config/index");
const { User, Recipe } = require("../models");

const UserData = require("./userData.json");
const RecipeData = require("./recipeData.json");

db.once("open", async () => {
  //clean the database
try
  {
  await Recipe.deleteMany({});
  await User.deleteMany({});

  //Create the database
  const recipes = await Recipe.create(RecipeData);

  console.log("Recipes seeded!");

  const users = await User.create(UserData);

  console.log("Users seeded!");
  process.exit(0);
 } catch (err) {
    throw err;
 }
});
