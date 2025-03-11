import {
  InputBase,
  Button,
  Container,
  Typography,
  Box,
  ButtonBase,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import chicky_ticky from "../assets/chicken.png";
import shrimp from "../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210204-shrimp-scampi-pasta-sauce-daniel-gritzer-16-f01e8b8cc5dc4591b968bb1acc1b6f.jpg";

export const User_Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("My most delicious, extravagant and popular recipes!");
  const [isEditing, setIsEditing] = useState(false);

  
  const handleChange = (event) => {
    setText(event.target.value);
    setIsEditing(true); // Show the save button when typing starts
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved text:", text); // You can replace this with an API call to save
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
    m: 1,
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
    backgroundColor: "black", 
    color: "white", 
    width: "auto",
    borderRadius: 5,
    alignSelf: "flex-start",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)"
    }
  };

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", marginLeft: 5, marginRight: 5, background: "#f0f2f5" }}>
      <Box sx={{ display: "flex", mt: 4, width: "100%" }}>
        {/* Left Section */}
        <Box sx={blogCards}>
          <Typography variant="h2" 
            sx={{ 
              fontWeight: "bold", 
              textAlign: "left", 
              fontSize: "clamp(1rem, 15vw, 4rem)", 
              lineHeight: 1.1,
              width: "min-content",
              m: 3  
              }}>
            My best recipes
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
              minHeight: "30vh", // Increases text box height
            }}
          >
            <InputBase
              fullWidth
              multiline
              value={text}
              onChange={handleChange}
              sx={{ color: "black", fontSize: "1rem" }}
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

          <Button onClick={() => navigate("/profile")} variant="contained" sx={button}>
            Back
          </Button>
        </Box>

        {/* Right Section */}
        <Box sx={blogCards}>

          {/* New post button */}
          <Button onClick={() => navigate("/new_post")} variant="contained" sx={button}>
            + New Post
          </Button>
          {/* Chicken Tikka Masala Post */}
          <ButtonBase onClick={() => navigate("/chicken")}>  
            <Box sx={recipe}>
              <img src={chicky_ticky} alt="Chicken Tikka Masala" style={recipeImage} />
              <Typography sx={recipeTitle}>
                Chicken Tikka Masala
              </Typography>
            </Box>
          </ButtonBase>

          {/* User-added Posts */}
          {posts.map((post, index) => (
            <ButtonBase key={index} onClick={() => navigate("/shrimp")}>  
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

export default User_Blog;
