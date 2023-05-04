const db = require("../config/index");
const { User, Recipe } = require("../models");

const UserData = require("./userData.json");
const RecipeData = require("./recipeData.json");

db.once("open", async () => {
  try {
    //clean the database
    await Recipe.deleteMany({});
    await User.deleteMany({});

    //Create model
    const recipes = await Recipe.create(RecipeData);

    console.log("Recipes seeded!");

    const users = await User.create(UserData);

    console.log("Users seeded!");

    //Randomly add each recipe to a user
    for (newRecipe of recipes) {
      const tempUser = users[Math.floor(Math.random() * users.length)];
      tempUser.recipes.push(newRecipe._id);
      await tempUser.save();
    }

    console.log("added recipes randomly to each user.");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
