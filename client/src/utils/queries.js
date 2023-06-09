import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      name
      email
      password
      recipes {
        _id
        name
        ingredients
        instructions
        region
        cookTime
        image
        description
        rate
      }
    }
  }
`;

export const QUERY_RECIPES = gql`
  query recipes {
    recipes {
      _id
      name
      ingredients
      instructions
      region
      cookTime
      image
      description
      rate
    }
  }
`;

export const QUERY_RECIPE_BY_REGION = gql`
  query Recipe($recipeRegion: String!) {
    recipe(recipeRegion: $recipeRegion) {
      _id
      cookTime
      description
      image
      ingredients
      instructions
      name
      rate
      region
    }
  }
`;
