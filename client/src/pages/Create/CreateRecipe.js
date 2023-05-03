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
import * as React from "react";
// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
// import { Form } from "react-router-dom";
import Grid from "@mui/material/Grid";



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
      <FormControl justifyContent="center">
        <Grid container justifyContent="center">
          <h2>Create A Recipe</h2>
        </Grid>
        
        <Grid
          fullWidth
          xs={12}
          container
          direction="column"
          // alignItems="center"
          justifyContent="space-between"
          my={2}

          // pb={6}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >

          <form className="create-recipe-input">

            <Grid my={2}>
              <TextField
                //  item p={6}
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                multiline
              />
            </Grid>

            <Grid  my={2}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Region"
                variant="outlined"
                onChange={handleChange}
                multiline
              />
            </Grid>

            <Grid my={2}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
                onChange={handleChange}
                multiline
              />
            </Grid>

            {/* <Grid pb={3}> */}

            <Grid my={2}>

            <TextField
              fullWidth
              id="outlined-basic"
              label="Cook Time (Minutes)"
              variant="outlined"
              onChange={handleChange}
              multiline
            />
            </Grid>

            {/* <Grid xs={12} my={2}> */}

            <TextField
              fullWidth
              label="Ingredients"
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              multiline
            />
            {/* </Grid> */}

            <TextField
              fullWidth
              id="outlined-basic"
              label="Instructions"
              variant="outlined"
              onChange={handleChange}
              multiline
            />

          </form>
        </Grid>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" type="on submit">
            Submit Recipe
          </Button>
        </Stack>
      </FormControl>
    </div>
  );
};

export default CreateRecipe;
