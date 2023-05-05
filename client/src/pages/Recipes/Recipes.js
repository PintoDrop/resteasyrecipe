import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarsRating from "stars-rating";

import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// export default
function Recipes() {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];
  
  
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Typography variant="h3" align="center">
        {" "}
        All Recipes
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {recipes.map((recipe) => (
          <Card
            sx={{
              maxWidth: 345,
              marginRight: 10,
              marginLeft: 10,
              marginBottom: "20px",
            }}
            key={recipe.name}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {/* user avatar goes here */}
                </Avatar>
              }
              title={recipe.name}
            />
            <CardMedia
              component="img"
              // height="194"
              image={recipe.image}
              title={recipe.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <h2>Description: </h2>
                <p>{recipe.description}</p>

                <StarsRating
                  count={5}
                  value={recipes.rate}
                  //onChange={ratingChange}
                  size={24}
                  color2={"#ffd700"}
                />
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <h3>Directions: </h3>
                  {recipe.instructions}
                </Typography>
                <Typography paragraph>
                  <h3>Ingredients: </h3>
                  {recipe.ingredients}
                </Typography>
                <Typography paragraph>
                  <h3>Cook time: </h3>
                  {recipe.cookTime}
                  <p> minutes</p>
                </Typography>
                <Typography>
                  <h3>Region: </h3>
                  {recipe.region}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Recipes;

// import * as React from 'react';
// import { useState } from "react";
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// // import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // import MoreVertIcon from '@mui/icons-material/MoreVert';
// import StarsRating from "stars-rating";


// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


// // export default 
// function Recipes(data) {
//   const [expanded, setExpanded] = React.useState(false);
//   const [rating, setRating] = useState(0);
  

//   // get rating by name of recipe
//   const ratingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
  
//   // need api call to bring in seeded data (instead of const recipes), will need object ID to grab
//   const [recipes] = useState([
//     {
//       name: "Chicken Tacos",
//       ingredients: "1/2 pound chicken, four bell peppers ",
//       instructions: "Cook chicken and heat tortillas",
//       region: "Meixcan",
//       cookTime: "30 minutes",
//       description: "Tacos made with pollo for a zesty punch",

//       image: require("../../Images/chickenTacos.jpg").default,
//       rate: 4,
//     },
//     {
//       name: "Apple Walnut Salad",
//       ingredients:
//         "Arugula, Belgian Endive, Apples, Dried Cranberries, Blue Cheese, Nuts, Maple Cinnamon Dressing  ",
//       instructions:
//         "1. Toast and chop the walnuts. 2.Whisk the dressing ingredients together. Stir in the apples. 3. Place the arugula and endive in a bowl. 4. Add part of the cranberries, cheese, and walnuts. 5. Transfer the apples to the bowl with the greens. Toss to coat. Continue to add the dressing until the salad is moist. 6.Finish with the remaining toppings and toss. ENJOY!",
//       region: "American",
//       cookTime: "28 minutes",
//       description: "Crisp salad",

//       image: require("../../Images/appleWalnutSal.jpg").default,
//       rate: 3,
//     },
//   ]);

    
//     return (
//       <div style={{ display: "flex", flexDirection: "row" }}>
//         {recipes.map((recipe) => (
//           // need to grab recipe by id after data has been seeded so rating changes by id
//           <Card sx={{ maxWidth: 345 }} key={recipe.name}>
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                 </Avatar>
//               }
//               // action={
//               //   <IconButton aria-label="settings">
//               //     <MoreVertIcon />
//               //   </IconButton>
//               // }
//               title={recipe.name}
//             />
//             <CardMedia
//               component="img"
//               height="194"
//               // needs to be src not image?
//               image={recipe.image}
//               // alt="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 <h2>Description: </h2>
//                 <p>{recipe.description}</p>

//                 {/* <h2>Directions: </h2>
//                 <p>{recipe.instructions}</p>

//                 <h2>Ingredients: </h2>
//                 <p>{recipe.ingredients}</p>

//                 <h3>Cook time: </h3>
//                 <p>{recipe.cookTime}</p>

//                 <h3>Region: </h3>
//                 <p>{recipe.region}</p> */
//                 <StarsRating
//                   count={5}
//                   value={recipe.rate}
//                   onChange={ratingChange}
//                   size={24}
//                   color2={"#ffd700"}
//                 />
//               </Typography>
//             </CardContent>

//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               {/* <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton> */}
//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 {/* <Typography paragraph>Method:</Typography> */}
//                 <Typography paragraph>
//                   <h3>Directions: </h3>
//                   {recipe.instructions}
//                 </Typography>
//                 <Typography paragraph>
//                   <h3>Ingredients: </h3>
//                   {recipe.ingredients}
//                 </Typography>
//                 <Typography paragraph>
//                   <h3>Cook time: </h3>
//                   {recipe.cookTime}
//                 </Typography>
//                 <Typography>
//                   <h3>Region: </h3>
//                   {recipe.region}
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>
//         ))}
//       </div>
//     );
// }


// export default Recipes;


