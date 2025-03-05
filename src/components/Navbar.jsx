import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, TextField, Avatar, Button, InputAdornment } from "@mui/material";
import {  Search as SearchIcon, Cookie as CookieIcon } from "@mui/icons-material";
import PropTypes from "prop-types";

export const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <AppBar 
      position="sticky"
      sx={{
        backgroundColor: "#82A5D9", 
        borderRadius: 6, 
        margin: 1, 
        width: "calc(100% - 16px)", 
        boxShadow: 1, 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CookieIcon />
        </Box>

        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 3, 
            position: "absolute", 
            left: "50%", 
            transform: "translateX(-50%)" 
          }}
        >
          

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              backgroundColor: location.pathname === "/main_explore" ? "#60709c" : "transparent", // Filled when on the main page
              borderRadius: 3,
              px: 3,
              '&:hover': {
                backgroundColor: '#60709c',
                color: 'white',
                transition: 'background-color 0.3s ease',
              },
              '&:active': {
                backgroundColor: 'gray',
                color: 'white',
              },
            }}
            onClick={() => navigate("/main_explore")}
          >
            Main
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              backgroundColor: location.pathname === "/restaurants_explore" ? "#60709c" : "transparent", 
              borderRadius: 3,
              px: 3,
              '&:hover': {
                backgroundColor: '#60709c',
                color: 'white',
                transition: 'background-color 0.3s ease',
              },
              '&:active': {
                backgroundColor: 'gray',
                color: 'white',
              },
            }}
            onClick={() => navigate("/restaurants_explore")}
          >
            Restaurants
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              backgroundColor: location.pathname === "/recipes_explore" ? "#60709c" : "transparent", // Filled when on the recipes page
              borderRadius: 3,
              px: 3,
              '&:hover': {
                backgroundColor: '#60709c',
                color: 'white',
                transition: 'background-color 0.3s ease',
              },
              '&:active': {
                backgroundColor: 'gray',
                color: 'white',
              },
            }}
            onClick={() => navigate("/recipes_explore")}
          >
            Recipes
          </Button>

          <TextField 
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              borderRadius: 3,
              backgroundColor: "white",
              width: 250,
              "& .MuiOutlinedInput-root": { borderRadius: 3 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              borderColor: "white",
              color: "white",
              backgroundColor: location.pathname === "/profile" ? "#60709c" : "transparent", 
            }}
            onClick={() => navigate("/profile")}
          >
            <Avatar 
              src="src\assets\chef.jpg" 
              sx={{ 
                cursor: "pointer", 
                width: 50, 
                height: 50,
                border: "2px solid black"       
                }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
