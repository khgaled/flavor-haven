import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

export const Profile = () => {

  return (
    <Box sx={{ display: "flex", height: "80vh", px: 6, py: 2 }}>
      {/* profile card */}
      <Box 
        sx={{ 
          width: "25%", 
          bgcolor: "#7787b5",
          p: 2, 
          border: "12px double black",
          borderRadius: 15, 
          position: "fixed", 
          height: "46%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          gap: 3,
          boxShadow: 5
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


        <Box>
          {/* username */}
          <Typography color="#2d333d">
            @toasty_boy
          </Typography>

          {/* Display name */}
          <Typography variant="h4" color="black">
            Toast Malone
          </Typography>
        </Box>
        
            
          {/* bio */}
        <Box
          sx={{
            display: "flex",
            width: "85%",
            bgcolor: "#a4adc9",
            textAlign: "left",
            border: "2px solid black",
            borderRadius: "15px",
            padding: "16px",
            boxShadow: 1
          }}
        >
          <Typography color="black">
            Creating new recipes everyday!
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
              px: 3,
              margin: 2,
              boxShadow: 3 
            }}>

              <Box sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  My best recipes
                  <Typography>
                    My most delicious, extravagant and popular recipes!
                    </Typography>
                  </Typography>
                </Box>

              {/* Image on the Right */}
              <Box component="img" src="src\assets\food.jpg" 
                sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
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
                margin: 2,  
                boxShadow: 3 
              }}>
              <Box sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  Family favorites
                  <Typography>
                    Beloved dishes, enjoyed by kids and parents alike
                    </Typography>
                  </Typography>
                </Box>
              {/* Image on the Right */}
              <Box component="img" src="src\assets\shrimpast.jpg" 
                sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
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
              margin: 2,
              boxShadow: 3   
            }}>
              <Box sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  Quick and easy meals
                  <Typography>
                    Dishes that are both fast and filling
                    </Typography>
                  </Typography>
                </Box>

            {/* Image on the Right */}
            <Box component="img" src="src\assets\ramen.jpg" 
              sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
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
                margin: 2,
                boxShadow: 3   
              }}>
              <Box sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  Kids menu
                  <Typography>
                    For the kids' lunchboxes
                    </Typography>
                  </Typography>
                </Box>

              {/* Image on the Right */}
              <Box component="img" src="src\assets\lunch.jpg" 
                sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
          </Box>

        </Box>

    </Box>
  );
};


