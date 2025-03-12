import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';


export const New_Post4 = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onloadend = () => {
        setSelectedFile(reader.result); // Store Base64 string
        setPreview(reader.result); // Show preview
      };
    }
  };
  
  const handleSubmit = () => {
    const newPost = { title, steps, image: selectedFile }; // Send Base64 string
    navigate("/user_blog4", { state: { newPost } });
  };

  const BackButton = styled(IconButton)({
    backgroundColor: 'white',
    width: '48px',
    height: '48px',
    position: 'fixed',
    bottom: '24px',
    left: '32px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 999, 
    '&:hover': {
        backgroundColor: '#f5f5f5',
        transform: 'scale(1.05)',
    },
    transition: 'transform 0.2s ease',
});

  return (
    <Container maxWidth="md" sx={{ minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 4 }}>

      <BackButton 
              aria-label="back"
              onClick={() => window.history.back()}
          >
              <ArrowBackIcon fontSize="medium" />
          </BackButton>
      
      <Box sx={{ backgroundColor: "#82A5D9", width: "100%", p: 4, borderRadius: 4, boxShadow: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", color: "white", mb: 3 }}>
          Create a New Post
        </Typography>
        
        
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "white", mb: 1, textAlign: "left" }}
        >
          Upload Photo
        </Typography>

      
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            display: "none",
          }}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button
            variant="contained"
            component="span"
            sx={{ backgroundColor: "white", color: "black", width: "100%", mb: 1 }}
          >
            Choose File
          </Button>
        </label>

       
        {selectedFile && (
          <Typography sx={{ color: "white", fontStyle: "italic", mb: 2 }}>
            Selected: {selectedFile.name}
          </Typography>
        )}

       
        {preview && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <img
              src={preview}
              alt="Selected Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                borderRadius: "8px",
                border: "2px solid white",
              }}
            />
          </Box>
        )}


        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 1 , textAlign: "left"}}>
          Title
        </Typography>
        <TextField
          label="Enter title of your post"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white", mb: 3 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 1, textAlign: "left" }}>
          Steps
        </Typography>
        <TextField
          label="Enter the steps of your recipe"
          multiline
          fullWidth
          rows={6}
          sx={{ backgroundColor: "white", mb: 3 }}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
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

export default New_Post4;