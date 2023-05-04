import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;
// export const CREATE_RECIPE = gql `
//   mutation saveRecipe($recipeData: ) {
//     saveRecipe(recipeData: $recipeData) {
//       _id
//       name
//       email
//       saveRecipe {
//         _id
//         name
//         region
//         description
//         cookTime
//         ingredients
//         instructions
//         image
//       }
//     }
//   }
// `

export const CREATE_RECIPE = gql`
  mutation createRecipe(
    $name: String!,
    $region: String!,
    $description: String!,
    $cookTime: Int!,
    $ingredients: [String!]!,
    $instructions: [String!]!,
    $image: String!
  ) {
    createRecipe(
        name: $name,
        region: $region,
        description: $description,
        cookTime: $cookTime,
        ingredients: $ingredients,
        instructions: $instructions,
        image: $image
      ) {
      _id
      name
      region
      description
      cookTime
      ingredients
      instructions
      image
    }
  }
`;
