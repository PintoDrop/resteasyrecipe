import React from "react";
import Recipes from "../Recipes";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";


const CookingStyleDropdown = ({ styles, onStyleSelected }) => {
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleSelectChange = (event) => {
    const selectedStyle = event.target.value;
    setSelectedStyle(selectedStyle);
    onStyleSelected(selectedStyle);
  };

  return (
    <div>
      <label htmlFor="style-dropdown">Select a cooking style: </label>
      <select id="style-dropdown" value={selectedStyle} onChange={handleSelectChange}>
        <option value="">-- Please select --</option>
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  );
};

const RandomRecipePicker = ({ recipes }) => {
  const [randomRecipes, setRandomRecipes] = useState([]);

  const handleStyleSelected = (selectedStyle) => {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.cookingStyle.toLowerCase() === selectedStyle.toLowerCase()
    );
    if (filteredRecipes.length === 0) {
      alert("No recipes found for the specified cooking style.");
      return;
    }
    const randomIndexes = [];
    while (randomIndexes.length < 3 && randomIndexes.length < filteredRecipes.length) {
      const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const randomRecipes = randomIndexes.map((index) => filteredRecipes[index]);
    setRandomRecipes(randomRecipes);
  };

  const styles = Array.from(new Set(recipes.map((recipe) => recipe.cookingStyle)));

  return (
    <div>
      <CookingStyleDropdown styles={styles} onStyleSelected={handleStyleSelected} />
      {randomRecipes.length > 0 && (
        <div>
          <h3>Random Recipes:</h3>
          <ul>
            {randomRecipes.map((recipe) => (
              <li key={recipe.name}>{recipe.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RandomRecipePicker;


/* /* 


//   // replace with data from API
//   const recipes = ["chicken tacos"];
//   const [randoRecipe, setRandoRecipe] = useState();

/* function RandomRecipePicker() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCookingStyle, setSelectedCookingStyle] = useState("");
  const [randomRecipe, setRandomRecipe] = useState(null);

  // filter recipe
  const handlePickRandomRecipe = () => {
    // filtering the recipe to only "style/region" that we picked
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.cookingStyle === selectedCookingStyle
    );
    // picking the random recipe
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    const randomRecipe = filteredRecipes[randomIndex];
    // setting the recipe
    setRandomRecipe(randomRecipe);
  }; */

  /*   const handleClick = () => {
      var randomIndex = Math.floor(Math.random() * recipes.length);
      setRandoRecipe(recipes[randomIndex]);
    
  }; */
  //   const randoIndex = Math.floor(math.random() * recipe.length);

  /* return (
    <div>
      <Grid container justifyContent="center">
        <h1>Random Recipe</h1>
      </Grid>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="success"
          onClick={handlePickRandomRecipe}
        >
          Find Random Recipe
        </Button>
      </Grid>

      { </Grid> }
      { data rendered needs to go on a card once api is data is functional. Conditional render (if data) }
      <Recipes data={randoRecipe} />

    </div>
    // </>
  );
} */

//     data
//
//
//
//
//
// render(Recipe)
//
//
//
//
//
//
//