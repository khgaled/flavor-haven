import React, { useState, useEffect } from "react";
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
  Bookmark as SaveIcon,
  Share as ShareIcon,
  ArrowBackIos as LeftIcon,
  ArrowForwardIos as RightIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
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

export const Main_Explore = () => {
  const navigate = useNavigate();
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const featuredRestaurants = [
    {
      image: garden,
      title: 'FEATURED RESTAURANT',
      navigateTo: '/restaurant_post'
    },
    {
      image: boba,
      title: 'TRENDING RIGHT NOW!',
      navigateTo: '/restaurant_post6'
    },
    {
      image: yakiUdon,
      title: 'AS SEEN ON TIKTOK!',
      navigateTo: '/recipe_post3'
    }
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

  const postRows = [
    [
      {
        image: shrimpPasta,
        title: "Shrimp Pasta",
        onClick: () => navigate("/recipe_post"),
      },
      {
        image: jap,
        title: "Sakura Sushi",
        onClick: () => navigate("/restaurant_post2"),
      },
      {
        image: bul,
        title: "Beef Bulgogi",
        onClick: () => navigate("/recipe_post2"),
      },
    ],
    [
      {
        image: mex,
        title: "San Miguel",
        onClick: () => navigate("/restaurant_post4"),
      },
      {
        image: chicken,
        title: "Chicken Tikka Masala",
        onClick: () => navigate("/recipe_post1"),
      },
      {
        image: adobo,
        title: "Adobo Chicken",
        onClick: () => navigate("/recipe_post4"),
      },
    ],
  ];

  const renderFeaturedRecipeRestaurant = () => {
    return (
      <FeaturedSection>
        <CarouselWrapper 
          sx={{ 
            transform: `translateX(-${currentFeaturedIndex * 100}%)` 
          }}
        >
          {featuredRestaurants.map((featured, index) => (
            <CarouselSlide key={index}>
              <CarouselButton 
                onClick={handlePrevFeatured} 
                sx={{ left: 10 }}
              >
                <LeftIcon />
              </CarouselButton>
              <CarouselButton 
                onClick={handleNextFeatured} 
                sx={{ right: 10 }}
              >
                <RightIcon />
              </CarouselButton>

              <FeaturedImage 
                src={featured.image} 
                alt={featured.title} 
                onClick={() => navigate(featured.navigateTo)}
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
      {posts.map((post, index) => (
        <Grid item xs={4} key={index}>
          <PostCard onClick={post.onClick}>
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
              <IconButton size="small">
                <LikeIcon />
              </IconButton>
              <IconButton size="small">
                <SaveIcon />
              </IconButton>
              <IconButton size="small">
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
    </MainContainer>
  );
};