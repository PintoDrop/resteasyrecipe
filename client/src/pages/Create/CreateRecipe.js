import { useState } from "react";
export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    region: "",
    description: "",
    cookTime: 0,
    ingredients: "",
    instructions: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <div className="create-recipe">
      <h2>CreateRecipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="region">Region</label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="cookTime">Cook Time (minutes) </label>
        <input type="number" id="cookTime" onChange={handleChange}></input>

        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default CreateRecipe
