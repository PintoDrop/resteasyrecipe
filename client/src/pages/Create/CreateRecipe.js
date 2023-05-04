// import React from "react";
// import ImageUploading from "react-images-uploading";

// export function App() {
//   const [images, setImages] = React.useState([]);
//   const maxNumber = 69;

//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="App">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper">
//             <button
//               style={isDragging ? { color: "red" } : undefined}
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Click or Drop here
//             </button>
//             &nbsp;
//             <button onClick={onImageRemoveAll}>Remove all images</button>
//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image["data_url"]} alt="" width="100" />
//                 <div className="image-item__btn-wrapper">
//                   <button onClick={() => onImageUpdate(index)}>Update</button>
//                   <button onClick={() => onImageRemove(index)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//     </div>
//   );
// }

import { useState } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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

/*   const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await CreateRecipe({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };
 */

  return (
    <>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center">
          <h2>Create A Recipe</h2>
        </Grid>
        <Grid item justifyContent="center" xs={10} md={6} lg={4}>
          <form>
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField
              type="text"
              id="name"
              onChange={handleChange}
              fullWidth
            />

            <InputLabel htmlFor="region">Region</InputLabel>
            <TextField
              type="text"
              id="name"
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
            ></TextField>

            <InputLabel htmlFor="cookTime">Cook Time (minutes) </InputLabel>
            <TextField
              type="number"
              id="cookTime"
              fullWidth
              onChange={handleChange}
            ></TextField>

            <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
            <TextField
              id="ingredients"
              name="ingredients"
              onChange={handleChange}
              fullWidth
              multiline
            ></TextField>

            <InputLabel htmlFor="instructions">Instructions</InputLabel>
            <TextField
              id="instructions"
              name="instructions"
              onChange={handleChange}
              fullWidth
              multiline
            ></TextField>
            <Stack
              justifyContent="center"
              direction="row"
              spacing={2}
              padding={2}
            >
              <Button variant="contained" type="on submit">
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
