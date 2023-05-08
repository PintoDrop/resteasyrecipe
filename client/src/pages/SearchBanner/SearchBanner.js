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

import Grid from "@mui/material/Grid";
import HomePhoto from "../../Images/foodBanner.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_RECIPE_BY_REGION } from "../../utils/queries";
import RecipeCard from "../RecipeCard";

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

function SearchBar() {
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const [fetchRecipes, { data, error }] = useLazyQuery(QUERY_RECIPE_BY_REGION);

  if (error) {
    console.log(error);
  }


  return (
    <>
      <Grid
        sx={{
          backgroundImage: `url(${HomePhoto})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 500,
          width: "100%",
        }}
      >
        <Grid container justifyContent={"center"} padding={20}>
          <TextField
            sx={{ backgroundColor: "whitesmoke", width: 600 }}
            id="search"
            type="search"
            value={searchTerm}
            label="Search"
            onChange={handleChange}
            margin="dense"
          />

          <Grid padding={2}>
            <Button
              variant="contained"
              onClick={() => {
                fetchRecipes({ variables: { recipeRegion: searchTerm } });
              }}
              style={{ background: "#dd2c00" }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Grid>
          {data && (
            <Grid>
              <Typography marginTop="30px" variant="h3" align="center">
                {" "}
                Results
              </Typography>
              <Card
                sx={{
                  maxWidth: 345,
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: "20px",
                  marginTop: "50px",
                }}
                key={data.recipe.name}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  title={data.recipe.name}
                />
                <CardMedia
                  component="img"
                  className="card-image"
                  image={data.recipe.image}
                  title={data.recipe.name}
                />
                <CardContent>
                    <h2>Description: </h2>
                  <Typography variant="body2" color="text.secondary">
                    <p>{data.recipe.description}</p>

                    <StarsRating
                      count={5}
                      value={data.recipe.rate}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleFavoriteClick(data.recipe.name)}
                  >
                    <FavoriteIcon
                      color={
                        favorites.includes(data.recipe.name)
                          ? "secondary"
                          : "inherit"
                      }
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
                      {data.recipe.instructions}
                    </Typography>
                    <Typography paragraph>
                      <h3>Ingredients: </h3>
                      {data.recipe.ingredients}
                    </Typography>
                    <Typography paragraph>
                      <h3>Cook time: </h3>
                      {data.recipe.cookTime}
                      <p> minutes</p>
                    </Typography>
                    <Typography>
                      <h3>Region: </h3>
                      {data.recipe.region}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          )}
          {error && <Grid>There is no result</Grid>}
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBar;
