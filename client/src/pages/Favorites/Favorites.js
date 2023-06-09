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


function Favorites() {
  const [expanded, setExpanded] = React.useState(false);
  const [rating, setRating] = useState(0);
  const [favoriteRecipes, setFavoriteRecipes] = useState([

      {
        name: "Chicken Tacos",
        ingredients: "1/2 pound chicken, four bell peppers ",
        instructions: "Cook chicken and heat tortillas",
        region: "Meixcan",
        cookTime: "30 minutes",
        description: "Tacos made with pollo for a zesty punch",
  
        image: require("../../Images/chickenTacos.jpg").default,
      },
      {
        name: "Apple Walnut Salad",
        ingredients:
          "Arugula, Belgian Endive, Apples, Dried Cranberries, Blue Cheese, Nuts, Maple Cinnamon Dressing  ",
        instructions:
          "1. Toast and chop the walnuts. 2.Whisk the dressing ingredients together. Stir in the apples. 3. Place the arugula and endive in a bowl. 4. Add part of the cranberries, cheese, and walnuts. 5. Transfer the apples to the bowl with the greens. Toss to coat. Continue to add the dressing until the salad is moist. 6.Finish with the remaining toppings and toss. ENJOY!",
        region: "American",
        cookTime: "28 minutes",
        description: "Crisp salad",
  
        image: require("../../Images/appleWalnutSal.jpg").default,
      },
    ]);


  const ratingChange = (newRating) => {
    setRating(newRating);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {favoriteRecipes.map((recipe) => (
        <Card sx={{ maxWidth: 345 }} key={recipe.name}>
          <Typography marginTop="30px" variant="h3" align="center">
            {" "}
            Favorites
          </Typography>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

              </Avatar>
            }

            title={recipe.name}
          />
          <CardMedia
            component="img"
            height="194"
            image={recipe.image}

          />
          <CardContent>
              <h2>Description: </h2>
            <Typography variant="body2" color="text.secondary">
              <p>{recipe.description}</p>
              <StarsRating
                count={5}
                value={rating}
                onChange={ratingChange}
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
  );
}

export default Favorites;
