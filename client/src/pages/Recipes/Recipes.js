import * as React from "react";
import Typography from "@mui/material/Typography";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
import Grid from "@mui/material/Grid";

// export default
function Recipes() {

  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Typography marginTop="30px" variant="h3" align="center">
          {" "}
          All Recipes
        </Typography>

        <Grid
          display="flex"
          container
          padding={4}
          justifyContent="center"
          flexWrap="wrap"
        >
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Recipes;
