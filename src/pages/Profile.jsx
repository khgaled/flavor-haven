import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

export const Profile = () => {

  return (
    <Box sx={{ display: "flex", height: "80vh", p: 2 }}>
      {/* Profile card */}
      <Box 
        sx={{ 
          width: "25%", 
          bgcolor: "#7787b5",
          p: 2, 
          border: "20px double black",
          borderRadius: 15, 
          position: "fixed", 
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          gap: 2
          }}>

        {/* profile picture */}
        <Avatar 
          src="src\assets\chef.jpg" 
          sx={{ 
            cursor: "pointer", 
            width: 140, 
            height: 140,     
            border: "3px solid black"  
            }} />

          {/* username */}
        <Typography variant="h3" color="white">
          Username
        </Typography>
            
          {/* bio */}
        <Box
          sx={{
            borderColor: "white",
          }}
        >
          <Typography variant="h5" color="white">
            Hello I am chef
          </Typography>
        </Box>

      </Box>
    
      {/* Recipe Blogs */}
        <Box sx={{ flex: 1, ml: "40%", overflowY: "auto", maxHeight: "200vh", p: 2 }}>
          <Box 
            sx={{ 
              height: 150, 
              border: "2px solid black",
              borderRadius: "20px",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              px: 2,
              margin: 2 
            }}>
              <Typography variant="h5">My best recipes</Typography>

              {/* Image on the Right */}
              <Box component="img" src="src\assets\food.jpg" 
                sx={{ height: "80%", width: "auto", borderRadius: "20px" }} />
            </Box>

            <Box 
          sx={{ 
            height: 150, 
            border: "2px solid black",
            borderRadius: "20px",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            px: 2,
            margin: 2  
          }}>
            <Typography variant="h5">Family Favorites</Typography>

            {/* Image on the Right */}
            <Box component="img" src="src\assets\food.jpg" 
              sx={{ height: "80%", width: "auto", borderRadius: "20px" }} />
          </Box>

          <Box 
          sx={{ 
            height: 150, 
            border: "2px solid black",
            borderRadius: "20px",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            px: 2,
            margin: 2  
          }}>
            <Typography variant="h5">Quick and easy meals</Typography>

            {/* Image on the Right */}
            <Box component="img" src="src\assets\food.jpg" 
              sx={{ height: "80%", width: "auto", borderRadius: "20px" }} />
          </Box>
        </Box>


    </Box>
  );
};


