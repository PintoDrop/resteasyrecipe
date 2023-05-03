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
      <FormControl>
        <FormLabel><h2>Create A Recipe</h2></FormLabel>
        

      {/* <h2>Create Recipe</h2> */}
      <form style={{ display: "flex", flexDirection: "row" }}>
        {/* <label htmlFor="name">Name</label> */}

        {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box> */}
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          />

        {/* <input type="text" id="name" onChange={handleChange} /> */}

        {/* <label htmlFor="region">Region</label> */}

        <TextField
          id="outlined-basic"
          label="Region"
          variant="outlined"
          onChange={handleChange}
          />

        {/* <input type="text" id="name" onChange={handleChange} /> */}

        {/* <label htmlFor="description">Description</label> */}

        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={handleChange}
          />

        {/* <textarea
          id="description"
          name="description"
          onChange={handleChange}
        ></textarea> */}

        {/* <label htmlFor="cookTime">Cook Time (minutes) </label> */}

        <TextField
          id="outlined-basic"
          label="Cook Time (Minutes)"
          variant="outlined"
          onChange={handleChange}
          />

        {/* <input type="number" id="cookTime" onChange={handleChange}></input> */}

        {/* <label htmlFor="ingredients">Ingredients</label> */}

        <TextField
          id="outlined-basic"
          label="Ingredients"
          variant="outlined"
          onChange={handleChange}
          />

        {/* <textarea
          id="ingredients"
          name="ingredients"
          onChange={handleChange}
        ></textarea> */}

        {/* <label htmlFor="instructions">Instructions</label> */}

        <TextField
          id="outlined-basic"
          label="Instructions"
          variant="outlined"
          onChange={handleChange}
          />

        {/* <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea> */}
      </form>
       <Stack spacing={2} direction="row">

      <Button variant="contained" type="on submit">Submit Recipe</Button>
       </Stack>
        </FormControl>
    </div>
  );
};

export default CreateRecipe;
