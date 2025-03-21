import { Box, Avatar, Typography, Button, ButtonBase } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cupcake from "../assets/gingcup.jpg";

export const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (location.state?.newBlog) {
      setPosts((prevPosts) => {
        const isDuplicate = prevPosts.some(
          (post) => post.title === location.state.newBlog.title
        );
        return isDuplicate ? prevPosts : [...prevPosts, location.state.newBlog];
      });
    }
  }, [location.state]);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
    console.log("Redirecting to login...");
  };
  

  const profileCardStyles = {
    width: { xs: "80%", sm: "60%", md: "40%", lg: "30%", xl: "25%" },
    maxWidth: "400px",
    minWidth: "250px",
    bgcolor: "#82A5D9",
    p: 2,
    m: 2,
    border: "12px double black",
    borderRadius: 15,
    position: "fixed",
    height: "46%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    boxShadow: 5,
  };

  const blogCardStyles = {
    height: 150,
    cursor: "pointer",
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 2,
    m: 2,
    boxShadow: 3,
    transition: "transform 0.3s ease",
    "&:hover": {
      backgroundColor: "#82A5D9",
      color: "white",
      transform: "scale(1.05)",
    },
  };

  const blogPosts = [
    {
      title: "My best recipes",
      description: "My most delicious, extravagant and popular recipes!",
      image: "src/assets/food.jpg",
      path: "/user_blog",
    },
    {
      title: "Family favorites",
      description: "Beloved dishes, enjoyed by kids and parents alike",
      image: "src/assets/shrimpast.jpg",
      path: "/user_blog2",
    },
    {
      title: "Quick and easy meals",
      description: "Dishes that are both fast and filling",
      image: "src/assets/ramen.jpg",
      path: "/user_blog3",
    },
    {
      title: "Kids menu",
      description: "For the kids' lunchboxes",
      image: "src/assets/lunch.jpg",
      path: "/user_blog4",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", marginLeft: 5, marginRight: 5, background: "#f0f2f5" }}>
      <Box sx={{ display: "flex", flexDirection: "column", maxHeight: "100vh", p: 1, alignContent: "center" }}>
        <Box sx={profileCardStyles}>
          <Avatar src="src/assets/chef.jpg" sx={{ cursor: "pointer", width: 140, height: 140, border: "3px solid black" }} />
          <Box>
            <Typography color="#2d333d">@toasty_boy</Typography>
            <Typography variant="h4" color="black" sx={{ fontWeight: "bold" }}>Toast Malone</Typography>
          </Box>
          <Box sx={{ display: "flex", width: "85%", bgcolor: "#cdd4de", textAlign: "left", border: "2px solid black", borderRadius: 15, p: 2, boxShadow: 1 }}>
            <Typography color="black">Creating new recipes every day!</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: "33%", display: "flex", alignItems: "center", position: "fixed", left: "20%", borderRadius: 15 }}>
          <Button onClick={handleLogout} variant="outlined" sx={{ borderColor: "#dc7d7d", color: "#dc7d7d", borderRadius: 15, px: 3, "&:hover": { backgroundColor: "#dc7d7d", color: "white", transition: "background-color 0.3s ease" } }}>Logout</Button>
        </Box>
      </Box>

      <Box sx={{ flex: 1, ml: "40%", overflowY: "auto", maxHeight: "100vh", p: 1 }}>
        <ButtonBase onClick={() => navigate("/new_blog")}>
          <Box
            sx={{
              height: 25,
              width: 100,
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "50px",
              p: 1,
              m: 1,
              boxShadow: 1,
              transition: "transform 0.3s ease",
              "&:hover": {
                backgroundColor: "#82A5D9",
                color: "white",
                transform: "scale(1.05)",
              },
            }}>
            <Typography>+ New Blog</Typography>
          </Box>
        </ButtonBase>

        {[...blogPosts, ...posts].map((blog, index) => (
          <Box key={index} sx={blogCardStyles} onClick={() => navigate(blog.path || "/user_blog5")}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
                {blog.title}
              </Typography>
              <Typography>{blog.description || blog.bio}</Typography>
            </Box>
            <Box component="img" 
              src={blog.image || cupcake} 
              sx={{ height: "80%", width: "23%", borderRadius: "20px", objectFit: "cover" }} 
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
