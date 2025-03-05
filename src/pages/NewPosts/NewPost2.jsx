import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Grid,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
  } from "@mui/material";
  import { useState } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  
  
  export const New_Post2 = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [steps, setSteps] = useState("");
  
    const handleSubmit = () => {
      const newPost = { title, steps };
      navigate("/user_blog2", { state: { newPost } });
    };
  
  
    return (
      <div>
        <Container>
          <Button
            onClick={() => navigate("/user_blog2")}
            variant="contained"
            sx={{
              color: "",
              backgroundColor: "black",
              top: 0,
              left: 0,
              //postion: "relative",
            }}
          >
            BACK
          </Button>
          <Box
            sx={{
              mt: 4,
              backgroundColor: "#7787b5",
              width: "100%",
              position: "absolute",
              minHeight: "70vh",
              borderRadius: 8,
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "",
                backgroundColor: "black",
                right: 50,
                top: 10,
                position: "absolute",
              }}
            >
              Save Draft
            </Button>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", ml: 8, mt: 4, textAlign: "left" }}
            >
              New Post
            </Typography>
  
            <Box sx={{ padding: 4 }}>
              <Button
                variant="contained"
                //onClick={handleOpen}
                sx={{
                  backgroundColor: "white",
                  width: "95%",
                  color: "black",
                }}
              >
                {" "}
                Upload Photo
              </Button>
  
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  ml: 4,
                  mt: 4,
                  textAlign: "left",
                  color: "black",
                }}
              >
                Title
              </Typography>
  
              <Box sx={{ padding: 4 }}>
                <TextField
                  label="Enter title of your post!"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "white", color: "black" }}
                  value = {title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
  
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  ml: 4,
                  mt: 0.5,
                  textAlign: "left",
                  color: "black",
                }}
              >
                Steps
              </Typography>
              <Box sx={{ padding: 4 }}>
                <TextField
                  label="Enter the steps of your recipe!"
                  multiline
                  fullWidth
                  rows={5}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    //minHeight: "30vh",
                  }}
                  value= {steps}
                  onChange = {(e) => setSteps(e.target.value)}
                />
              </Box>
            </Box>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "25%",
                color: "black",
                bottom: 12,
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </div>
    );
  };
  
  export default New_Post2;
  