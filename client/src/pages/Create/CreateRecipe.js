// import { useState } from "react";
// import Grid from "@mui/material/Grid";
// import InputLabel from "@mui/material/InputLabel";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import { useMutation } from "@apollo/client";
// import { SAVE_RECIPE } from "../../utils/mutations";

// // 
// // import React from "react";
// // import ImageUploading from "react-images-uploading";
// // 


// export const CreateRecipe = () => {
//   const [recipe, setRecipe] = useState({
//     name: "",
//     region: "",
//     description: "",
//     cookTime: 0,
//     ingredients: "",
//     instructions: "",

//     image: null,
//   });
    
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   // images
//     const handleImageChange = (event) => {
//       setRecipe({ ...recipe, image: event.target.files[0] });
//     };

//       const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(recipe);
//       };
//       // 

//   return (
//     <>
//       <Grid container justifyContent="center">
//         <Grid container justifyContent="center">
//           <h2>Create A Recipe</h2>
//         </Grid>
//         <Grid item justifyContent="center" xs={10} md={6} lg={4}>
//           {/* changed from just <form> */}
//           <form onSubmit={handleSubmit}>
//             <InputLabel htmlFor="name">Name</InputLabel>
//             <TextField
//               type="text"
//               id="name"
//               onChange={handleChange}
//               fullWidth
//             />

//             <InputLabel htmlFor="region">Region</InputLabel>
//             <TextField
//               type="text"
//               id="name"
//               onChange={handleChange}
//               fullWidth
//             />

//             <InputLabel htmlFor="description">Description</InputLabel>
//             <TextField
//               id="description"
//               name="description"
//               multiline
//               onChange={handleChange}
//               fullWidth
//             ></TextField>

//             <InputLabel htmlFor="cookTime">Cook Time (minutes) </InputLabel>
//             <TextField
//               type="number"
//               id="cookTime"
//               fullWidth
//               onChange={handleChange}
//             ></TextField>

//             <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
//             <TextField
//               id="ingredients"
//               name="ingredients"
//               onChange={handleChange}
//               fullWidth
//               multiline
//             ></TextField>

//             <InputLabel htmlFor="instructions">Instructions</InputLabel>
//             <TextField
//               id="instructions"
//               name="instructions"
//               onChange={handleChange}
//               fullWidth
//               multiline
//             ></TextField>

//             {/* image uploading */}
//             <input
//               accept="image/*"
//               // justifyContent="center"
//               // fullWidth
//               id="image"
//               name="image"
//               type="file"
//               onChange={handleImageChange}
//             />
//             {/*  */}

//             <Stack
//               justifyContent="center"
//               direction="row"
//               spacing={2}
//               padding={2}
//             >
//               <Button variant="contained" type="on submit">
//                 Submit Recipe
//               </Button>
//             </Stack>
//           </form>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default CreateRecipe;
import { useState } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useMutation } from "@apollo/client";
import { CREATE_RECIPE } from "../../utils/mutations";

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    region: "",
    description: "",
    cookTime: 0,
    ingredients: "",
    instructions: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
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
          region: recipe.region,
          description: recipe.description,
          cookTime: parseInt(recipe.cookTime),
          ingredients: recipe.ingredients.split(" "),
          instructions: recipe.instructions.split(" "),
          image: "test",
          //          image: recipe.image,
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
            />

            <InputLabel htmlFor="region">Region</InputLabel>
            <TextField
              type="text"
              id="region"
              name="region"
              onChange={handleChange}
              fullWidth
            />

            <InputLabel htmlFor="description">Description</InputLabel>
            <TextField
              id="description"
              name="description"
              multiline
              onChange={handleChange}
              fullWidth
            />

            <InputLabel htmlFor="cookTime">Cook Time (minutes) </InputLabel>
            <TextField
              type="number"
              id="cookTime"
              name="cookTime"
              fullWidth
              onChange={handleChange}
            />

            <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
            <TextField
              id="ingredients"
              name="ingredients"
              onChange={handleChange}
              fullWidth
              multiline
            />

            <InputLabel htmlFor="instructions">Instructions</InputLabel>
            <TextField
              id="instructions"
              name="instructions"
              onChange={handleChange}
              fullWidth
              multiline
            />

            <input
              accept="image/*"
              id="image"
              name="image"
              type="file"
              onChange={handleImageChange}
            />

            <Stack
              justifyContent="center"
              direction="row"
              spacing={2}
              padding={2}
            >
              <Button variant="contained" type="submit">
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
