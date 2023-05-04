const { AuthenticationError } = require("apollo-server-express");
const { User, Recipe } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    recipes: async () => {
      return Recipe.find();
    },
  },
  Mutation: {
    register: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    removeRecipe: async (parent, { id }) => {
      const recipe = await Recipe.findByIdAndDelete(id);
      return { example: "It worked" };
    },
    saveRecipe: async (parent, data, context) => {
      if (context.user) {
        console.log(data)
        const recipe = await Recipe.create(data)

        await.User.findByIdAndUpdatae({ _id: context.user._id },
          { $addToSet: { recipes: recipe } })
              
        return recipe;
      }
    },
  },
};

module.exports = resolvers;
