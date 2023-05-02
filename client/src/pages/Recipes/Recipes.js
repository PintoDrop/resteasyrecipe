// import StarsRating from "stars-rating";
// import React from "react";
// import { render } from "react-dom";

// const ratingChanged = (newRating) => {
//   console.log(newRating);
// };

import * as React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// export default 
function Recipes() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [recipes] = useState([
    {
      name: "Chicken Tacos",
      ingredients: "1/2 pound chicken, four bell peppers ",
      instructions: "Cook chicken and heat tortillas",
      region: "Meixcan",
      cookTime: "30 minutes",
      description: "Tacos made with pollo for a zesty punch",

      image: require("../../Images/chickenTacos.jpg"),
    },
    // {
    //   name: "Apple Walnut Salad",
    //   ingredients:
    //     "Arugula, Belgian Endive, Apples, Dried Cranberries, Blue Cheese, Nuts, Maple Cinnamon Dressing  ",
    //   instructions:
    //     "1. Toast and chop the walnuts. 2.Whisk the dressing ingredients together. Stir in the apples. 3. Place the arugula and endive in a bowl. 4. Add part of the cranberries, cheese, and walnuts. 5. Transfer the apples to the bowl with the greens. Toss to coat. Continue to add the dressing until the salad is moist. 6.Finish with the remaining toppings and toss. ENJOY!",
    //   region: "American",
    //   cookTime: "28 minutes",
    //   description: "Crisp salad",

    //   image: require("../../Images/appleWalnutSal.jpg"),
    // },
  ]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* user avatar goes here */}R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // need to define models
        title={recipes.name}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={recipes.image}
        // alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* need description model */}
          {/* {recipes.map((recipe, idx) => ( */}
          <h2>{recipes.description} </h2>
          {recipes.description}

          <h2>Directions: </h2>
          {recipes.directions}

          <h2>Ingredients: </h2>
          {recipes.ingredients}

          <h3>Cook time: </h3>
          {recipes.cookTime}

          <h3>Region: </h3>
          {recipes.region}
        </Typography>
      </CardContent>
       {/* ))} */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {/* need directions model */}
            <h2>Directions: </h2>
            {recipes.directions}
            {/* Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes. */}
          </Typography>
          <Typography paragraph>
            <h2>Ingredients: </h2>
            {recipes.ingredients}
            {/* Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. */}
          </Typography>
          <Typography paragraph>
            <h3>Cook time: </h3>
            {recipes.cookTime}
            {/* Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.) */}
          </Typography>
          <Typography>
            <h3>Region: </h3>
            {recipes.region}
            {/* Set aside off of the heat to let rest for 10 minutes, and then serve. */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// function Recipe() {
  
//  return (
//     <div>
//       <h1>Recipe Page</h1> 
//       </div>
//  )
 
  // render(
  //   <StarsRating
  //     count={5}
  //     onChange={ratingChanged}
  //     size={24}
  //     color2={"#ffd700"}
  //     />,
      
  //     document.getElementById("where-to-render")
  //     )
  // );
// }



export default Recipes;
