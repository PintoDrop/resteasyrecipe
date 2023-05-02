import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HomePhoto from "../../Images/foodBanner.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
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
        <Grid container justifyContent={"center"}>
          <TextField
            sx={{ backgroundColor: "whitesmoke", width: 600 }}

            id="search"
            type="search"
            label="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      ;
    </>
  );
}

export default SearchBar;
