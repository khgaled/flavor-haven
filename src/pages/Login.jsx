import { useState } from "react";
import { TextField, Button, Container, Typography, Box, Grid } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import temp_photo from "../assets/temp_photo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();

  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        height: "100vh", 
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('your_background.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Box 
        sx={{
          display: "flex",
          width: { xs: "95%", md: "80%", lg: "100%" },  
          height: "80vh",
          backgroundColor: "rgba(255, 255, 255, 0.85)",  
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden"
        }}
      >
        
        <Grid 
          item 
          xs={false} 
          md={6} 
          sx={{ 
            display: { xs: "none", md: "flex" }, 
            width: "50%",
            height: "100%",
            overflow: "hidden"
          }}
        >
          <img
            src={temp_photo}
            alt="temp_photo"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover" 
            }}
          />
        </Grid>

        {/* Right Side - Login Form */}
        <Grid 
          item 
          xs={12} 
          md={6}  
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 4, width: "50%" }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth={400}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            
            {/* Form */}
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              sx={{ gap: 2 }}
            >
              <TextField
                fullWidth
                label="Username"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <TextField
                fullWidth
                label="Password"
                variant="filled"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Box>
          </Box>
        </Grid>

      </Box>
    </Container>
  );
};

export default Login;
