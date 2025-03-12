import {
  InputBase,
  Button,
  Container,
  Typography,
  Box,
  ButtonBase,
  IconButton
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import chicky_ticky from "../../assets/chicken.png";
import shrimp from "../../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210204-shrimp-scampi-pasta-sauce-daniel-gritzer-16-f01e8b8cc5dc4591b968bb1acc1b6f.jpg";

export const User_Blog2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("Beloved dishes, enjoyed by kids and parents alike");
  const [isEditing, setIsEditing] = useState(false);

  
  const handleChange = (event) => {
    setText(event.target.value);
    setIsEditing(true); 
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved text:", text); 
  };

  useEffect(() => {
    if (location.state?.newPost) {
      setPosts((prevPosts) => {
        const isDuplicate = prevPosts.some(
          (post) => post.title === location.state.newPost.title
        );
        return isDuplicate ? prevPosts : [...prevPosts, location.state.newPost];
      });
    }
  }, [location.state]);

  const blogCards = {
    width: "100vh",
    bgcolor: "#82A5D9",
    p: 2,
    mx: 1,
    border: "12px black",
    borderRadius: 5,
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    boxShadow: 5,
    overflowY: "auto"
  };

  const recipe = {
    backgroundColor: "white",
    borderRadius: 2,
    padding: 2,
    mx: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    boxShadow: 5,
    height: "32vh",
    width: "100vh"
  };

  const recipeImage = {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 5,
  };

  const recipeTitle ={
    position: "center",
    m: 1,
    color: "black",
    fontWeight: "bold",
    p: 1,
    fontSize: 20
  };

  const button = {
    mt: 1, 
    ml: 3,
    backgroundColor: "white", 
    color: "black", 
    width: "auto",
    borderRadius: 5,
    alignSelf: "flex-start",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)"
    }
  };

  const BackButton = styled(IconButton)({
    backgroundColor: 'white',
    width: '48px',
    height: '48px',
    position: 'fixed',
    bottom: '24px',
    left: '32px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 999, // Much higher z-index to ensure it's above everything
    '&:hover': {
        backgroundColor: '#f5f5f5',
        transform: 'scale(1.05)',
    },
    transition: 'transform 0.2s ease',
});

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", marginLeft: 5, marginRight: 5, background: "#f0f2f5" }}>
      <Box sx={{ display: "flex", mt: 4, width: "100%" }}>
        {/* Left Section */}
        <Box sx={blogCards}>
          <Typography variant="h1" color="white"
            sx={{ 
              fontWeight: "bold", 
              textAlign: "left", 
              fontSize: "clamp(1rem, 18vw, 5rem)", 
              lineHeight: 1.1,
              width: "min-content",
              ml: 3,  
              mt: 10
              }}>
            Family favorites
          </Typography>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 3,
              width: "75%",
              bgcolor: "#cdd4de",
              textAlign: "left",
              border: "2px solid black",
              borderRadius: 5,
              p: 3,
              boxShadow: 1,
              position: "relative", // Allows positioning of the Save button
              minHeight: "20vh", // Increases text box height
            }}
          >
            <InputBase
              fullWidth
              multiline
              value={text}
              onChange={handleChange}
              sx={{ color: "black", fontSize: 25}}
            />
            {isEditing && (
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#82A5D9",
                    color: "white",
                    transition: "transform 0.3s ease",
                    transform: "scale(1.05)"
                  },
                }}
                onClick={handleSave}
              >
                Save
              </Button>
            )}
          </Box>

          <BackButton 
              aria-label="back"
              onClick={() => window.history.back()}
          >
              <ArrowBackIcon fontSize="medium" />
          </BackButton>
        </Box>

        {/* Right Section */}
        <Box sx={blogCards}>

          {/* New post button */}
          <Button onClick={() => navigate("/new_post")} variant="contained" sx={button}>
            + New Post
          </Button>
          {/* Chicken Tikka Masala Post */}
          <ButtonBase onClick={() => navigate("/recipe_post1")}>  
            <Box sx={recipe}>
              <img src={chicky_ticky} alt="Chicken Tikka Masala" style={recipeImage} />
              <Typography sx={recipeTitle}>
                Chicken Tikka Masala
              </Typography>
            </Box>
          </ButtonBase>

          {/* User-added Posts */}
          {posts.map((post, index) => (
            <ButtonBase key={index} onClick={() => navigate("/recipe_post")}>  
              <Box sx={recipe}>
                <img src={shrimp} alt={post.title} style={recipeImage} />
                <Typography sx={recipeTitle}>
                  {post.title}
                </Typography>
              </Box>
            </ButtonBase>
          ))}

        </Box>
      </Box>
    </Container>
  );
};

export default User_Blog2;
