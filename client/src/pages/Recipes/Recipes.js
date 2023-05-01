import StarsRating from "stars-rating";
import React from "react";
import { render } from "react-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

render(
  <StarsRating
    count={5}
    onChange={ratingChanged}
    size={24}
    color2={"#ffd700"}
  />,

  document.getElementById("where-to-render")
);
