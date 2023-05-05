// import React, { useState } from "react";
// import Recipes from "../Recipes";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import { useQuery } from "@apollo/client";
// import { QUERY_RECIPES } from "../../utils/queries";

// const RegionDropdown = ({ regions, onRegionSelected }) => {
//   const [selectedRegion, setSelectedRegion] = useState("");

//   const handleSelectChange = (event) => {
//     const selectedRegion = event.target.value;
//     setSelectedRegion(selectedRegion);
//     onRegionSelected(selectedRegion);
//   };

//   return (
//     <div>
//       <label htmlFor="region-dropdown">Select a region: </label>
//       <select
//         id="region-dropdown"
//         value={selectedRegion}
//         onChange={handleSelectChange}
//       >
//         <option value=""> Please select </option>
//         {regions.map((region) => (
//           <option key={region} value={region}>
//             {region}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const RandomRecipePicker = () => {
//   const { loading, data } = useQuery(QUERY_RECIPES);
//   const [randomRecipes, setRandomRecipes] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedRegion, setSelectedRegion] = useState("");

//   const handleRegionSelected = (selectedRegion) => {
//     setSelectedRegion(selectedRegion);
//   };

//   const handleRecipePick = () => {
//     if (!selectedRegion) {
//       alert("Please select a region.");
//       return;
//     }
    
//     if (!data) return;

//     const recipes = data.recipes;

//     const filteredRecipes = recipes.filter(
//       (recipe) =>
//         recipe.region.toLowerCase() === selectedRegion.toLowerCase()
//     );

//     if (filteredRecipes.length === 0) {
//       alert("No recipes found for the specified region.");
//       return;
//     }

//     const randomIndexes = [];
//     while (
//       randomIndexes.length < 3 &&
//       randomIndexes.length < filteredRecipes.length
//     ) {
//       const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
//       if (!randomIndexes.includes(randomIndex)) {
//         randomIndexes.push(randomIndex);
//       }
//     }
//     const randomRecipes = randomIndexes.map((index) => filteredRecipes[index]);
//     setRandomRecipes(randomRecipes);
//   };

//   if (loading) return <div>Loading...</div>;

//   const recipes = data?.recipes || [];
//   const regions = Array.from(new Set(recipes.map((recipe) => recipe.region)));

//   return (
//     <div>
//       <Button onClick={() => setShowDropdown(true)}>Get Random Recipe</Button>
//       {showDropdown && (
//         <div>
//           <RegionDropdown
//             regions={regions}
//             onRegionSelected={handleRegionSelected}
//           />
//           <Button onClick

// export default RandomRecipePicker;

// /* /* 
// //   // replace with data from API
// //   const recipes = ["chicken tacos"];
// //   const [randoRecipe, setRandoRecipe] = useState();
// /* function RandomRecipePicker() {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedCookingStyle, setSelectedCookingStyle] = useState("");
//   const [randomRecipe, setRandomRecipe] = useState(null);
//   // filter recipe
//   const handlePickRandomRecipe = () => {
//     // filtering the recipe to only "style/region" that we picked
//     const filteredRecipes = recipes.filter(
//       (recipe) => recipe.cookingStyle === selectedCookingStyle
//     );
//     // picking the random recipe
//     const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
//     const randomRecipe = filteredRecipes[randomIndex];
//     // setting the recipe
//     setRandomRecipe(randomRecipe);
//   }; */

// /*   const handleClick = () => {
//       var randomIndex = Math.floor(Math.random() * recipes.length);
//       setRandoRecipe(recipes[randomIndex]);
    
//   }; */
// //   const randoIndex = Math.floor(math.random() * recipe.length);

// /* return (
//     <div>
//       <Grid container justifyContent="center">
//         <h1>Random Recipe</h1>
//       </Grid>
//       <Grid container justifyContent="center">
//         <Button
//           variant="contained"
//           color="success"
//           onClick={handlePickRandomRecipe}
//         >
//           Find Random Recipe
//         </Button>
//       </Grid>
//       { </Grid> }
//       { data rendered needs to go on a card once api is data is functional. Conditional render (if data) }
//       <Recipes data={randoRecipe} />
//     </div>
//     // </>
//   );
// } */

// //     data
// //
// //
// //
// //
// //
// // render(Recipe)
// //
// //
// //
// //
// //
// //
// //