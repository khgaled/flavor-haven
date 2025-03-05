import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Grid,
  } from "@mui/material";
  import { useNavigate, useLocation } from "react-router-dom";
  import { useState, useEffect } from "react";
  import chicky_ticky from "../../assets/chicken.png";
  import cupcake from "../../assets/gingcup.jpg";
  
  export const User_Blog4 = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      if (location.state?.newPost) {
        setPosts((prevPosts) => {
          const isDuplicate = prevPosts.some(post => post.title === location.state.newPost.title);
          if (!isDuplicate) {
            return [...prevPosts, location.state.newPost];
          }
          return prevPosts;
        });
    
       // navigate("/user_blog", { replace: true, state: {} });
      }
    }, [location.state]);
  
    return (
      <Container>
        <Box sx={{ display: "flex", mt: 4, width: "100%" }}>
          <Box
            sx={{
              textAlign: "left",
              mt: 4,
              backgroundColor: "#7787b5",
              width: "100%",
              ml: 5,
              minHeight: "70vh",
              borderRadius: 8,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", ml: 3, mt: 10 }}>
              Kids
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", ml: 3, mt: 2 }}>
              Menu
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
              {"For the kids' lunchboxes"}
            </Box>
            <Button
              variant="contained"
              sx={{ mt: 2, color: "white", ml: 50, backgroundColor: "black" }}
            >
              DRAFTS
            </Button>
  
            <Button
            onClick={() => navigate("/profile")}
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
              backgroundColor: "#7787b5",
              borderRadius: 8,
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
                position: "relative",
              }}
            >
              <img
                src={chicky_ticky}
                style={{
                  width: "50%",
                  mt: 10,
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
                  padding: "10px",
                }}
              >
                Chicken Tikka Masala
              </Typography>
            </Box>
  
            {posts.map((post, index) => (
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
                  position: "relative",
                }}
              >
                <img
                  src={cupcake}
                  style={{
                    width: "50%",
                    mt: 10,
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
                    padding: "10px",
                  }}
                >
                  {post.title}
                </Typography>
              </Box>
            ))}
  
            <Button
              onClick={() => navigate("/new_post4")}
              variant="contained"
              sx={{ mt: 45, mr: 3, color: "", ml: 5, backgroundColor: "black" }}
            >
              New Post
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default User_Blog4;