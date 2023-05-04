import React from "react";
import Recipes from "../Recipes";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";


function Random() {
  // replace with data from API
  const recipes = ["chicken tacos"];
  const [randoRecipe, setRandoRecipe] = useState();


  const handleClick = () => {
      var randomIndex = Math.floor(Math.random() * recipes.length);
      setRandoRecipe(recipes[randomIndex]);
    
  };
  //   const randoIndex = Math.floor(math.random() * recipe.length);

  return (
  
    // <>
    <div >

      <Grid container justifyContent="center">

        <h1>Random Recipe</h1>
      </Grid>
      <Grid container justifyContent="center">

        <Button variant="contained" color="success" onClick={handleClick}>
          Find Random Recipe
        </Button>
      </Grid>
      {/* </Grid> */}
      {/* data rendered needs to go on a card once api is data is functional. Conditional render (if data) */}
      <Recipes data={randoRecipe}/>
      </div>
    // </>
  );
}

export default Random;

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
