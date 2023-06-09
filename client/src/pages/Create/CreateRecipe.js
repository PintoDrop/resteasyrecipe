
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useMutation } from "@apollo/client";
import { CREATE_RECIPE } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";


export const CreateRecipe = () => {

  const [recipe, setRecipe] = useState({
    name: "",
    region: "",
    description: "",
    cookTime: 0,
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "cookTime") {
      if (value < 0) {
        setRecipe({ ...recipe, [name]: 0 });
        return;
      }
    }
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const [createRecipe] = useMutation(CREATE_RECIPE);

   

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(recipe);
    try {
      const { data } = await createRecipe({
        variables: {
          name: recipe.name,
          region: recipe.region.toLowerCase(),
          description: recipe.description,
          cookTime: parseInt(recipe.cookTime),
          ingredients: recipe.ingredients.split("/\r\n/"),
          instructions: recipe.instructions.split("/\r\n/"),
          image: recipe.image,

        },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center">
          <h2>Create A Recipe</h2>
        </Grid>
        <Grid item justifyContent="center" xs={10} md={6} lg={4}>
          <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              fullWidth
              required
            />

            <InputLabel htmlFor="region">Region</InputLabel>
            <TextField
              type="text"
              id="region"
              name="region"
              onChange={handleChange}
              fullWidth
              required
            />

            <InputLabel htmlFor="description">Description</InputLabel>
            <TextField
              id="description"
              name="description"
              multiline
              onChange={handleChange}
              fullWidth
              required
            />

            <InputLabel htmlFor="cookTime">Cook Time (minutes) </InputLabel>
            <TextField
              type="number"
              id="cookTime"
              name="cookTime"
              fullWidth
              onChange={handleChange}
              required
            />

            <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
            <TextField
              id="ingredients"
              name="ingredients"
              onChange={handleChange}
              fullWidth
              multiline
              required
            />

            <InputLabel htmlFor="instructions">Instructions</InputLabel>
            <TextField
              id="instructions"
              name="instructions"
              onChange={handleChange}
              fullWidth
              multiline
              required
            />
            <InputLabel htmlFor="image">Image</InputLabel>
            <TextField
              id="image"
              name="image"
              onChange={handleChange}
              fullWidth
              multiline
              required
            />

            <Stack
              justifyContent="center"
              direction="row"
              spacing={2}
              padding={2}
            >
              <Button
                variant="contained"
                type="submit"
                onClick={(event) => (window.location.href = "/")}
                style={{ background: "#dd2c00" }}
              >
                Submit Recipe
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateRecipe;
