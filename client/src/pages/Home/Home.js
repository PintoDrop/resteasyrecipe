import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AllInclusiveTwoToneIcon from "@mui/icons-material/AllInclusiveTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
// import { useEffect } from "react";
import { useState } from "react";
import FastfoodTwoToneIcon from "@mui/icons-material/FastfoodTwoTone";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import Person2TwoToneIcon from "@mui/icons-material/Person2TwoTone";
import Auth from "../../utils/auth.js";


function Home({ pageState, setPageState }) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleOpenRecipes = () => {
    setPageState({
      ...pageState,
      recipes: true,
      random: false,
      login: false,
      create: false,
      favorites: false,
      search: true,
      myRecipes: false,
    });
  };

  const handleOpenRandom = () => {
    setPageState({
      ...pageState,
      recipes: false,
      random: true,
      login: false,
      create: false,
      favorites: false,
      search: false,
      myRecipes: false,
    });
  };
  const handleOpenLogin = () => {
    setPageState({
      ...pageState,
      recipes: false,
      random: false,
      login: true,
      create: false,
      favorites: false,
      search: false,
      myRecipes: false,
    });
  };
  const handleOpenFavorites = () => {
    setPageState({
      ...pageState,
      recipes: false,
      random: false,
      login: false,
      favorites: true,
      create: false,
      search: true,
      myRecipes: false,
    });
  };
  const handleOpenCreateRecipe = () => {
    setPageState({
      ...pageState,
      recipes: false,
      random: false,
      login: false,
      create: true,
      favorites: false,
      search: false,
      myRecipes: false,
    });
  };
  const handleOpenMyRecipes = () => {
    setPageState({
      ...pageState,
      recipes: false,
      random: false,
      login: false,
      create: false,
      favorites: false,
      search: false,
      myRecipes: true,
    });
  };

  return (
    <>
      <AppBar position="static" style={{ background: "#b71c1c" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuBookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Rest Easy Recipes
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >

                <MenuItem onClick={handleOpenRecipes}>
                  <FastfoodTwoToneIcon sx={{ marginRight: "10px" }} />
                  <Typography textAlign="center">Recipes</Typography>
                </MenuItem>
                {Auth.loggedIn() ? (
                  <>
                    <MenuItem onClick={handleOpenRandom}>
                      <AllInclusiveTwoToneIcon sx={{ marginRight: "10px" }} />
                      <Typography textAlign="center">Random</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleOpenCreateRecipe}>
                      <DriveFileRenameOutlineTwoToneIcon
                        sx={{ marginRight: "10px" }}
                      />
                      <Typography textAlign="center">Create Recipe</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleOpenMyRecipes}>
                      <MenuBookTwoToneIcon sx={{ marginRight: "5px" }} />
                      <Typography textAlign="center">My Recipes</Typography>
                    </MenuItem>
                    {/* <MenuItem onClick={handleOpenFavorites}>
                      <FavoriteTwoToneIcon sx={{ marginRight: "10px" }} />
                      <Typography textAlign="center">Favorites</Typography>
                    </MenuItem> */}
                    <MenuItem onClick={Auth.logout}>
                      <LogoutTwoToneIcon sx={{ marginRight: "10px" }} />
                      <Typography textAlign="center">Log Out</Typography>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleOpenLogin}>
                    <PermIdentityTwoToneIcon sx={{ marginRight: "10px" }} />
                    <Typography textAlign="center">Login/Register</Typography>
                  </MenuItem>
                )}

              </Menu>
            </Box>
            <MenuBookIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Rest Easy Recipes
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>


              <Button
                onClick={handleOpenRecipes}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FastfoodTwoToneIcon sx={{ marginRight: "5px" }} />
                Recipes
              </Button>
              {Auth.loggedIn() ? (
                <>
                  <Button
                    onClick={handleOpenRandom}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <AllInclusiveTwoToneIcon sx={{ marginRight: "5px" }} />
                    Random
                  </Button>
                  <Button
                    onClick={handleOpenCreateRecipe}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <DriveFileRenameOutlineTwoToneIcon
                      sx={{ marginRight: "5px" }}
                    />
                    Create Recipe
                  </Button>
                  <Button
                    onClick={handleOpenMyRecipes}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <MenuBookTwoToneIcon sx={{ marginRight: "5px" }} />
                    My Recipes
                  </Button>
                  {/* <Button
                    onClick={handleOpenFavorites}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <FavoriteTwoToneIcon sx={{ marginRight: "5px" }} />
                    Favorites
                  </Button> */}

                  <Button
                    onClick={Auth.logout}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <LogoutTwoToneIcon sx={{ marginRight: "5px" }} />
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleOpenLogin}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Person2TwoToneIcon sx={{ marginRight: "5px" }} />
                  Login/Register
                </Button>
              )}

            </Box>

          </Toolbar>
        </Container>
      </AppBar>

    </>
  );
}
export default Home;
