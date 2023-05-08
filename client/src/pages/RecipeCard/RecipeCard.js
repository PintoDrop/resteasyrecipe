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

function RecipeCard({ recipe, user }) {
  const [expanded, setExpanded] = React.useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (recipeName) => {
    if (favorites.includes(recipeName)) {
      setFavorites(favorites.filter((name) => name !== recipeName));
    } else {
      setFavorites([...favorites, recipeName]);
    }
  };
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: "20px",
        marginTop: "30px",
      }}
      key={recipe.name}
      elevation={8}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        title={recipe.name}
      />
      <CardMedia
        component="img"
        className="card-image"
        image={recipe.image}
        title={recipe.name}
      />
      <CardContent>
          <h2>Description: </h2>
        <div variant="body2" color="text.secondary">
          <p>{recipe.description}</p>

          <StarsRating
            count={5}
            value={user ? user.recipes.rate : recipe.rate}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleFavoriteClick(recipe.name)}
        >
          <FavoriteIcon
            color={favorites.includes(recipe.name) ? "secondary" : "inherit"}
          />
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
  );
}

export default RecipeCard;
