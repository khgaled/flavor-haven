import { AppBar, Toolbar, Box, IconButton, TextField, Avatar, Button, InputAdornment } from "@mui/material";
import { MenuBook as MenuBookIcon, Search as SearchIcon } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar 
      position="sticky"
      sx={{
        backgroundColor: "#7787b5", 
        borderRadius: 6, 
        margin: 1, 
        width: "calc(100% - 16px)", 
        boxShadow: 1, 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <MenuBookIcon sx={{ color: "white" }} />
          </IconButton>
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
          <Button variant="outlined" sx={{ borderColor: "white", color: "white", borderRadius: 3, px: 3 }}>
            Main
          </Button>
          <Button variant="outlined" sx={{ borderColor: "white", color: "white", borderRadius: 3, px: 3 }}>
            Restaurants
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "white", color: "#7787b5", borderRadius: 3, px: 3 }}>
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
          <Avatar src="/profile.jpg" sx={{ cursor: "pointer", width: 40, height: 40 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
