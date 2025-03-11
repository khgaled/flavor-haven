import { useState, useEffect } from "react";
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    IconButton 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Favorite as LikeIcon,
  FavoriteBorder as LikeOutlineIcon,
  Bookmark as SaveIcon,
  BookmarkBorder as SaveOutlineIcon,
  Share as ShareIcon,
  ArrowBackIos as LeftIcon,
  ArrowForwardIos as RightIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useShare } from "../../common/shareUtil"
import shrimpPasta from "../../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210204-shrimp-scampi-pasta-sauce-daniel-gritzer-16-f01e8b8cc5dc4591b968bb1acc1b6f.jpg";
import garden from "../../assets/sichuan-garden.jpg";
import jap from "../../assets/Japan.jpg";
import bul from "../../assets/Beef-Bulgogi.jpg";
import mex from "../../assets/Mex.jpg";
import chicken from "../../assets/chicken.png";
import adobo from "../../assets/Adobo-Chicken.jpg";
import boba from "../../assets/boba1.jpg";
import yakiUdon from "../../assets/Yaki-Udon.jpg";

const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f0f2f5",
  minHeight: "100vh",
}));

const FeaturedSection = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(2),
  padding: 0,
  marginBottom: theme.spacing(3),
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  width: "100%",
  height: 250,
  position: "relative",
  overflow: "hidden",
  // Add the same hover effect as PostCard
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const CarouselWrapper = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  height: '100%',
});

const CarouselSlide = styled(Box)({
  flexShrink: 0,
  width: '100%',
  height: '100%',
  position: 'relative',
});

const FeaturedImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  cursor: 'pointer',
});

const CarouselButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  backgroundColor: 'rgba(119, 135, 181, 0.6)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(119, 135, 181, 0.8)',
  }
});

const PostCard = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  height: "100%",
}));

const PostImage = styled("img")({
  width: "100%",
  height: 200,
  objectFit: "cover",
  borderRadius: 8,
  marginBottom: 16,
});

const ActionIcons = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: 16,
});

// Styled like button with color change when active
const LikeButton = styled(IconButton)(({ theme, isactive }) => ({
  color: isactive === 'true' ? '#f44336' : 'inherit',
  transition: 'color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

// Styled save button with yellow color when active
const SaveButton = styled(IconButton)(({ theme, isactive }) => ({
  color: isactive === 'true' ? '#FFD700' : 'inherit', // Gold/yellow color
  transition: 'color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const Main_Explore = () => {
  const { sharePost, ShareSnackbar } = useShare(); 
  const navigate = useNavigate();
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  
  // State to track liked and saved posts
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  const featuredRestaurants = [
    {
      id: 'featured1',
      image: garden,
      title: 'FEATURED RESTAURANT',
      navigateTo: '/restaurant_post'
    },
    {
      id: 'featured2',
      image: boba,
      title: 'TRENDING RIGHT NOW!',
      navigateTo: '/restaurant_post6'
    },
    {
      id: 'featured3',
      image: yakiUdon,
      title: 'AS SEEN ON TIKTOK!',
      navigateTo: '/recipe_post3'
    }
  ];

  // All posts with unique IDs
  const allPosts = [
    {
      id: 'post1',
      image: shrimpPasta,
      title: "Shrimp Pasta",
      path: "/recipe_post",
      isRestaurant: false
    },
    {
      id: 'post2',
      image: jap,
      title: "Sakura Sushi",
      path: "/restaurant_post2",
      isRestaurant: true
    },
    {
      id: 'post3',
      image: bul,
      title: "Beef Bulgogi",
      path: "/recipe_post2",
      isRestaurant: false
    },
    {
      id: 'post4',
      image: mex,
      title: "San Miguel",
      path: "/restaurant_post4",
      isRestaurant: true
    },
    {
      id: 'post5',
      image: chicken,
      title: "Chicken Tikka Masala",
      path: "/recipe_post1",
      isRestaurant: false
    },
    {
      id: 'post6',
      image: adobo,
      title: "Adobo Chicken",
      path: "/recipe_post4",
      isRestaurant: false
    }
  ];

  // Group posts into rows
  const postRows = [
    allPosts.slice(0, 3),
    allPosts.slice(3, 6)
  ];

  const handleNextFeatured = () => {
    setCurrentFeaturedIndex((prev) => 
      (prev + 1) % featuredRestaurants.length
    );
  };

  const handlePrevFeatured = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === 0 ? featuredRestaurants.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextFeatured, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle like button click
  const handleLikeClick = (id, e) => {
    e.stopPropagation();
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Handle save button click
  const handleSaveClick = (id, e) => {
    e.stopPropagation();
    setSavedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Updated to handle clicks on the featured section while preserving carousel navigation
  const handleFeaturedClick = (navigateTo, event) => {
    // Check if the click was on the carousel navigation buttons
    if (!event.target.closest('.MuiIconButton-root')) {
      navigate(navigateTo);
    }
  };

  const renderFeaturedRecipeRestaurant = () => {
    return (
      <FeaturedSection>
        <CarouselWrapper 
          sx={{ 
            transform: `translateX(-${currentFeaturedIndex * 100}%)` 
          }}
        >
          {featuredRestaurants.map((featured, index) => (
            <CarouselSlide 
              key={index}
              onClick={(e) => handleFeaturedClick(featured.navigateTo, e)}
            >
              <FeaturedImage 
                src={featured.image} 
                alt={featured.title}
              />
              
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  backgroundColor: 'rgba(119, 135, 181, 0.8)',
                  color: 'white',
                  padding: '10px',
                  fontWeight: 'bold',
                }}
              >
                {featured.title.toUpperCase()}
              </Typography>
            </CarouselSlide>
          ))}
        </CarouselWrapper>
        
        {/* Moved buttons outside of slides but kept inside the FeaturedSection */}
        <CarouselButton 
          onClick={handlePrevFeatured} 
          sx={{ left: 10 }}
          className="MuiIconButton-root"
        >
          <LeftIcon />
        </CarouselButton>
        <CarouselButton 
          onClick={handleNextFeatured} 
          sx={{ right: 10 }}
          className="MuiIconButton-root"
        >
          <RightIcon />
        </CarouselButton>
      </FeaturedSection>
    );
  };

  const renderPostRow = (posts, rowIndex) => (
    <Grid
      container
      spacing={3}
      key={rowIndex}
      sx={{
        mb: 3,
        "& > .MuiGrid-item": {
          marginBottom: 3,
        },
      }}
    >
      {posts.map((post) => (
        <Grid item xs={4} key={post.id}>
          <PostCard onClick={() => navigate(post.path)}>
            <PostImage
              src={post.image}
              alt={post.title}
              sx={{
                height: 200,
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Typography variant="h6" sx={{ color: "#7787b5" }}>
              {post.title}
            </Typography>
            <ActionIcons>
              <LikeButton 
                size="small" 
                isactive={likedPosts[post.id]?.toString() || 'false'}
                onClick={(e) => handleLikeClick(post.id, e)}
                aria-label={likedPosts[post.id] ? "Unlike" : "Like"}
              >
                {likedPosts[post.id] ? <LikeIcon /> : <LikeOutlineIcon />}
              </LikeButton>
              
              <SaveButton 
                size="small" 
                isactive={savedPosts[post.id]?.toString() || 'false'}
                onClick={(e) => handleSaveClick(post.id, e)}
                aria-label={savedPosts[post.id] ? "Unsave" : "Save"}
              >
                {savedPosts[post.id] ? <SaveIcon /> : <SaveOutlineIcon />}
              </SaveButton>
              
              <IconButton 
                size="small" 
                onClick={(e) => {
                  e.stopPropagation();
                  sharePost(post.id, post.isRestaurant);
                }}
              >
                <ShareIcon />
              </IconButton>
            </ActionIcons>
          </PostCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <MainContainer>
      {renderFeaturedRecipeRestaurant()}
      {postRows.map(renderPostRow)}
      <ShareSnackbar />
    </MainContainer>
  );
};