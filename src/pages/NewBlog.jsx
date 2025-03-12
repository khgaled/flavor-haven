import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
  } from "@mui/material";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export const New_Blog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [bio, setBio] = useState("");
  
    const handleSubmit = () => {
      const newBlog = { title, bio };
      navigate("/profile", { state: { newBlog } });
    };
  
    return (
      <Container maxWidth="md" sx={{ minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 4 }}>
  
  
        <Button
          onClick={() => navigate("/profile")}
          variant="contained"
          sx={{ alignSelf: "flex-start", backgroundColor: "black", color: "white", mb: 2, ml: -3}}
        >
          BACK
        </Button>
        
        <Box sx={{ backgroundColor: "#82A5D9", width: "100%", p: 4, borderRadius: 4, boxShadow: 3 }}>
          
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", color: "white", mb: 3 }}>
            Create a New Blog
          </Typography>
      
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 1 , textAlign: "left"}}>
          Upload Photo
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "black", width: "100%", mb: 3 }}
        >
          Choose file
        </Button>
  

          <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 1 , textAlign: "left"}}>
            Title
          </Typography>
          <TextField
            label="Enter title of your blog"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", mb: 3 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
  
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 1, textAlign: "left" }}>
            Bio
          </Typography>
          <TextField
            label="Tell us about the blog!"
            multiline
            fullWidth
            rows={6}
            sx={{ backgroundColor: "white", mb: 3 }}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
  
  
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ backgroundColor: "white", color: "black", width: "100%" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    );
  };
  
  export default New_Blog;