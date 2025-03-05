import PropTypes from "prop-types";
import { useState } from "react";
import { TextField, Button, Container, Typography, Box, Stack, Grid } from "@mui/material";
import { Cookie as CookieIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import temp_photo from "../assets/temp_photo.png";

export const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "Admin" && password === "Password") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/recipes_explore");
    } else {
      alert("Invalid credentials. Try Admin/Password.");
    }
  };

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
        backgroundPosition: "center",
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
          overflow: "hidden",
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
            overflow: "hidden",
          }}
        >
          <img
            src={temp_photo}
            alt="temp_photo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            maxWidth={400}
          >

          <Stack direction="row" alignItems="center">
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ p: 2, fontWeight: 'bold', color: "#752a28" }}>
              WELCOME TO THE HAVEN
            </Typography>
            <CookieIcon fontSize="large" sx={{ color: "#9F413E" }}/>
          </Stack>



            {/* Form */}
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              sx={{ gap: 3 }} // Increased padding between items
            >
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleLogin}
                sx={{
                  borderRadius: "25px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#93a9c9"
                }}
              >
                Login
              </Button>

              <Stack direction="row" alignItems="center" spacing={22} sx={{ width: "100%" }}>
                <Typography variant="body2">
                  <Button
                    variant="text"
                    sx={{ textTransform: "none", fontWeight: "bold", color: "#9F413E" }}
                    onClick={() => alert("Sign-up feature coming soon!")}
                  >
                    Sign Up
                  </Button>
                </Typography>
                
                <Button
                  variant="text"
                  sx={{ textTransform: "none", color: "#9F413E", fontWeight: "bold" }}
                  onClick={() => alert("Forgot password feature coming soon!")}
                >
                  Forgot Password?
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
