const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: [
    {
      type: String,
      required: true,
    },
  ],
  region: {
    type: String,
    required: true,
  },
  cookTime: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  rate:{
    type:Number,
    required:false,

  },

});
const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
