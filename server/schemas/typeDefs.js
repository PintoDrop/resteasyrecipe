const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    recipes: [Recipe]
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
    rate: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type DeleteObj {
    example: String
  }

  type Query {
    me: User
    recipes: [Recipe]
    recipe(recipeRegion: String!): Recipe
    users: [User]
  }

  type Query {
    searchRecipes(
      name: String
      region: String
      description: String
      cookTime: Int
      ingredients: [String]
      instructions: String
      image: String
    ): [Recipe]
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createRecipe(
      name: String!
      ingredients: [String!]
      instructions: [String!]
      region: String!
      cookTime: Int!
      image: String!
      description: String!
    ): Recipe
    removeRecipe(id: ID!): DeleteObj
  }
`;

module.exports = typeDefs;
