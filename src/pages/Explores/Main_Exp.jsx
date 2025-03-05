//import { useState } from "react";
import { Typography, Button } from "@mui/material";


import { useNavigate, Link} from "react-router-dom";

export const Main_Explore = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Typography>
        Main lols 
    </Typography>
  
     <Button onClick={() => navigate("/user_blog")}> go to bloggg </Button> 
    
 
     </div>
   
  );
};


