import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_RECIPES = gql`
  query recipes {
    recipe{
      _id
      name
      ingredients
      instructions
      region
      cookTime
      image
      description
    }
  }
`;