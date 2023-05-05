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


// added favorites to user.js model
// need a third call here for recipes that are favorites
// need a type def for saving favorites
// need save recipe resolver
// need queries inside me at favorites - dont need a new querie
// need save favorite mutation
// then to favorite pages - reference mern example

// google mern books (save book) for good example.
