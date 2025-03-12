import { Box, Avatar, Typography, Button } from "@mui/material";
import { useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

export const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); 
    setIsLoggedIn(false); 
    navigate("/login"); 
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", p: 0, py: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", maxHeight: "100vh", p: 1, alignContent: "center" }}>
        {/* profile card */}
        <Box 
          sx={{ 
            width: { xs: "80%", sm: "60%", md: "40%", lg: "30%", xl: "25%" }, 
            maxWidth: "400px", 
            minWidth: "250px", 
            bgcolor: "#82A5D9",
            p: 2, 
            margin: 2,
            border: "12px double black",
            borderRadius: 15, 
            position: "fixed", 
            height: "46%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            gap: 3,
            boxShadow: 5
          }}>

          {/* profile picture */}
          <Avatar 
            src="src\assets\chef.jpg" 
            sx={{ 
              cursor: "pointer", 
              width: 140, 
              height: 140,     
              border: "3px solid black"  
              }} />


          <Box>
            {/* username */}
            <Typography color="#2d333d">
              @toasty_boy
            </Typography>

            {/* Display name */}
            <Typography variant="h4" color="black">
              Toast Malone
            </Typography>
          </Box>
          
              
            {/* bio */}
          <Box
            sx={{
              display: "flex",
              width: "85%",
              bgcolor: "#cdd4de",
              textAlign: "left",
              border: "2px solid black",
              borderRadius: "15px",
              padding: "16px",
              boxShadow: 1
            }}
          >
            <Typography color="black">
              Creating new recipes everyday!
            </Typography>
          </Box>
        </Box>
        {/* Logout Button */}
        <Box 
          sx={{ 
            mt: "33%",
            display: "flex", 
            alignItems: "center",              
            position: "fixed", 
            '&:hover': {
              backgroundColor: '#dc7d7d',
              color: 'white',
              transition: 'background-color 0.3s ease',
            }, 
            left: "20%", 
            borderRadius: 15,
          }}
        >
          <Button onClick={handleLogout} variant="outlined" 
            sx={{ borderColor: "#dc7d7d", color: "#dc7d7d", borderRadius: 15, px: 3 }}>
            Logout
          </Button>
        </Box>
      </Box>

      {/* Recipe Blogs */}
        <Box 
        sx={{ flex: 1, ml: "40%", overflowY: "auto", maxHeight: "100vh", p: 1 }}>
          <Box
            sx={{ 
              height: 25, 
              width: 100,
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "50px",
              p: 1,
              margin: 2,
              boxShadow: 1,
              '&:hover': {
                backgroundColor: '#82A5D9',
                color: 'white',
                transition: 'background-color 0.3s ease',
              }, 
            }}
          >
            <Typography>
              + New Blog
              </Typography>
          </Box>
          <Box 
            sx={{ 
              height: 150, 
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "20px",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              px: 3,
              margin: 2,
              boxShadow: 3,
              '&:hover': {
                backgroundColor: '#82A5D9',
                color: 'white',
                transition: 'background-color 0.3s ease',
              }, 
            }}>

              <Box 
              onClick={() => navigate("/user_blog")}
              sx={{
                textAlign:"left",
                }}>
                <Typography variant="h4" component="h2">
                  My best recipes
                  <Typography>
                    My most delicious, extravagant and popular recipes!
                    </Typography>
                  </Typography>
                </Box>

              {/* Image on the Right */}
              <Box component="img" src="src\assets\food.jpg" 
                sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
            </Box>

            <Box 
              sx={{ 
                height: 150, 
                cursor: "pointer",
                border: "2px solid black",
                borderRadius: "20px",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                px: 2,
                margin: 2,  
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#82A5D9',
                  color: 'white',
                  transition: 'background-color 0.3s ease',
                },  
              }}>
              <Box 
              onClick={() => navigate("/user_blog2")}
              sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  Family favorites
                  <Typography>
                    Beloved dishes, enjoyed by kids and parents alike
                    </Typography>
                  </Typography>
                </Box>
              {/* Image on the Right */}
              <Box component="img" src="src\assets\shrimpast.jpg" 
                sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
          </Box>

          <Box 
            sx={{ 
              height: 150, 
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "20px",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              px: 2,
              margin: 2,
              boxShadow: 3,
              '&:hover': {
                backgroundColor: '#82A5D9',
                color: 'white',
                transition: 'background-color 0.3s ease',
              },    
            }}>
              <Box 
              onClick={() => navigate("/user_blog3")}
              sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  Quick and easy meals
                  <Typography>
                    Dishes that are both fast and filling
                    </Typography>
                  </Typography>
                </Box>

            {/* Image on the Right */}
            <Box component="img" src="src\assets\ramen.jpg" 
              sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
          </Box>

          <Box 
              sx={{ 
                height: 150, 
                cursor: "pointer",
                border: "2px solid black",
                borderRadius: "20px",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                px: 2,
                margin: 2,
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#82A5D9',
                  color: 'white',
                  transition: 'background-color 0.3s ease',
                },    
              }}>
              <Box 
              onClick={() => navigate("/user_blog4")}
              sx={{textAlign:"left"}}>
                <Typography variant="h4" component="h2">
                  Kids menu
                    <Typography>
                    For the kids&apos; lunchboxes
                    </Typography>
                  </Typography>
                </Box>

              {/* Image on the Right */}
              <Box component="img" src="src\assets\lunch.jpg" 
                sx={{ height: "80%", width: "23%", borderRadius: "20px" }} />
          </Box>

        </Box>

    </Box>
  );
};

Profile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};