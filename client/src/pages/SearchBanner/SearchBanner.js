import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HomePhoto from "../../Images/foodBanner.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (searchItem) => {
    console.log("search", searchItem);
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
            <Button variant="contained" onClick={() => onSearch(searchTerm)}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBar;
