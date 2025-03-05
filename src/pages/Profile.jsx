import React from "react";
import { Box, Grid, Paper } from "@mui/material";

export const Profile = () => {

  return (
    <Box sx={{ display: "flex", height: "100vh", p: 2 }}>
      {/* Left Box - Fixed */}
      <Box sx={{ width: "25%", bgcolor: "primary.main", p: 2, borderRadius: 2, position: "fixed", height: "100vh" }}>
        Left Box
      </Box>
      
      {/* Right Side - Scrollable Rectangles */}
      <Box sx={{ flex: 1, ml: "25%", overflowY: "auto", maxHeight: "100vh", p: 2 }}>
        <Grid container spacing={2}>
          {[...Array(10)].map((_, index) => (
            <Grid item xs={12} key={index}>
              <Paper sx={{ height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                Rectangle {index + 1}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};


