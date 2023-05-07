import * as React from "react";
import Typography from "@mui/material/Typography";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";

// export default
function Recipes() {

  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Typography marginTop="30px" variant="h3" align="center">
        {" "}
        All Recipes
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe}/>
        ))}
      </div>
    </>
  );
}

export default Recipes;
