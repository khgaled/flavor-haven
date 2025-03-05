//import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Favorite as LikeIcon,
  Bookmark as SaveIcon,
  Share as ShareIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import shrimpPasta from "../../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210204-shrimp-scampi-pasta-sauce-daniel-gritzer-16-f01e8b8cc5dc4591b968bb1acc1b6f.jpg";

const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f0f2f5',
  minHeight: '100vh',
}));

const FeaturedSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '100%',
  height: 250,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)', // Slight scale up on hover
  }
}))

const FeaturedIcon = styled(Box)({
  fontSize: 64, // Increased icon size
  marginBottom: 20,
  color: '#7787b5',
});

const PostCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  height: '100%',
}));

const PostImage = styled('img')({
  width: '100%',
  height: 200,
  objectFit: 'cover',
  borderRadius: 8,
  marginBottom: 16,
});

const ActionIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 16,
});

export const Main_Explore = () => {
  const navigate = useNavigate();

  const postRows = [
    [
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 1",
        onClick: () => navigate('/restaurants_posts1')
      },
      {
        image: shrimpPasta,
        title: "Shrimp Pasta",
        onClick: () => navigate('/recipe_post')
      },
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 2",
        onClick: () => navigate('/restaurants_posts1')
      }
    ],
    [
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 3",
        onClick: () => navigate('/restaurants_posts1')
      },
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 4",
        onClick: () => navigate('/restaurants_posts1')
      },
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 5",
        onClick: () => navigate('/restaurants_posts1')
      }
    ]
  ];

  const renderFeaturedRecipeRestaurant = () => (
    <FeaturedSection>
      <FeaturedIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </FeaturedIcon>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#7787b5' }}>
        FEATURED RECIPE/RESTAURANT
      </Typography>
    </FeaturedSection>
  );

  const renderPostRow = (posts, rowIndex) => (
    <Grid container spacing={3} key={rowIndex} sx={{ 
      mb: 3,
      '& > .MuiGrid-item': {
        marginBottom: 3
      }
    }}>
      {posts.map((post, index) => (
        <Grid item xs={4} key={index}>
          <PostCard onClick={post.onClick}>
            <PostImage 
              src={post.image} 
              alt={post.title} 
              sx={{ 
                // Ensure all images have the same height and object-fit
                height: 200, 
                width: '100%', 
                objectFit: 'cover' 
              }} 
            />
            <Typography variant="h6" sx={{ color: '#7787b5' }}>
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