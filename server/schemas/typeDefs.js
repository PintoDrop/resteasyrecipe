const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Recipe {
    _id: ID
    name: String
    ingredients: [String]
    instructions: [String!]
    region: String!
    cookTime: Int
    image: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input RecipeInput {
    name: String
    ingredients: [String]
    instructions: [String!]
    region: String!
    cookTime: Int
    image: String
    description: String
  }

  type DeleteObj {
    example: String
  }

  type Query {
    me: User
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveRecipe(recipeData: RecipeInput!): Recipe
    removeRecipe(id: ID!): DeleteObj
  }
`;

module.exports = typeDefs;
