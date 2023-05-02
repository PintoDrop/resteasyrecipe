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
export const CREATE_RECIPE = gql `
  mutation saveRecipe($recipeData: RecipeInput!) {
    saveRecipe(recipeData: $recipeData) {
      _id
      name
      email
      saved
    }
  }
`