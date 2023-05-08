import * as React from "react";
import RecipeCard from "../RecipeCard";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";


import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


function Recipes() {


  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  console.log(user.name);

  console.log(user.recipes);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Typography marginTop="30px" variant="h3" align="center">
        {" "}
        {user.name}'s Recipes
      </Typography>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {user.recipes.map((recipe) => (
         <RecipeCard recipe={recipe} user={user}/>
        ))}
      </div>
    </>
  );
}

export default Recipes;
