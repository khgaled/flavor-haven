import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import chicky_ticky from "../assets/chicken-tikka-masala.jpg";

export const User_Blog = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", mt: 4, width: "100%" }}>
        <Box
          sx={{
            textAlign: "left",
            mt: 4,
            backgroundColor: "lightgray",
            width: "100%",
            ml: 5,
            minHeight: "70vh",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", ml: 3, mt: 10 }}>
            WELCOME TO
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", ml: 3, mt: 2 }}>
            CARMY’S
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", ml: 3, mt: 2 }}>
            MENU!
          </Typography>

          <Box
            sx={{
              backgroundColor: "white",
              padding: 4,
              marginTop: 4,
              borderRadius: 2,
              boxShadow: 2,
              width: "55%",
              ml: 3,
              height: "20%",
            }}
          >
            {"Welcome to my blog!! It contains all my personal recipes :D"}
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2, color: "white", ml: 50, backgroundColor: "black" }}
          >
            DRAFTS
          </Button>

          <Button
            variant="contained"
            sx={{ mt: 2, color: "", ml: 5, backgroundColor: "black" }}
          >
            BACK
          </Button>
        </Box>
        <Box
          sx={{
            textAlign: "right",
            width: "100%",
            mt: 4,
            ml: 1,
            backgroundColor: "lightgray",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: 4,
              marginTop: 4,
              borderRadius: 2,
              boxShadow: 2,
              width: "80%",
              ml: 2.5,
              justifyContent: "center",
              display: "flex",
              minHeight: "15vh",
              position: "relative"
            }}
          >
             
            <img
              src={chicky_ticky}
              style={{
                width: "50%",
                mt:10,
                objectFit: "contain",
              }}
            />
            
            <Typography
              sx={{
                position: "absolute",  
                bottom: 0,             
                left: 0,    
                           
                color: "black",      
                fontWeight: "bold",   
                padding: "10px"  
              }}
            >
              Chicken Tikka Masala 
            </Typography>
            

        
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default User_Blog;
