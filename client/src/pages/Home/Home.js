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


// const pages = ["Recipes", "Random", "Login/Register"];
// const settings = ["Profile", "Create Recipe", "Favorites", "Logout"];

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
    setPageState({ ...pageState, recipes: true, random: false, login: false, create: false, favorites: false });
  };

  const handleOpenRandom = () => {
    setPageState({ ...pageState, recipes: false, random: true, login: false, create: false, favorites: false });
  };
  const handleOpenLogin = () => {
    setPageState({ ...pageState, recipes: false, random: false, login: true, create: false, favorites: false, search: false });
  };
  const handleOpenFavorites = () => {
    setPageState({...pageState, recipes: false, random: false, login: false, favorites: true, create: false})
  };
  const handleOpenCreateRecipe = () => {
    setPageState({...pageState, recipes: false, random: false, login: false, create: true, favorites: false})
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuBookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
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

            {/* <Button href="/recipes" variant="contained">
              Recipes
            </Button> */}

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
                {/* {pages.map((page) => ( */}

                {/* <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem> */}
                <MenuItem onClick={handleOpenRecipes}>
                  <Typography textAlign="center">Recipes</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenRandom}>
                  <Typography textAlign="center">Random</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenLogin}>
                  <Typography textAlign="center">Login/Register</Typography>
                </MenuItem>

                {/* ))} */}
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
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button> */}
              <Button
                // key={page}
                onClick={handleOpenRecipes}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Recipes
              </Button>
              <Button
                // key={page}
                onClick={handleOpenRandom}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Random
              </Button>
              <Button
                // key={page}
                onClick={handleOpenLogin}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login/Register
              </Button>
              {/* ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Options">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* need ${user} and avatar images, avater letter changes with name */}
                  <Avatar alt="Remy" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => ( */}
                  {/* <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem> */}
                  <MenuItem  onClick={handleOpenCreateRecipe}>
                    <Typography textAlign="center">Create Recipe</Typography>
                  </MenuItem>
                  <MenuItem  onClick={handleOpenFavorites}>
                    <Typography textAlign="center">Favorites</Typography>
                  </MenuItem>
                {/* ))}  */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Favorites /> */}

    </>
  );
}
export default Home;
