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

export const Restaurants_Explore = () => {
  const navigate = useNavigate();

  const postRows = [
    [
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 1",
        onClick: () => navigate('/recipe_post')
      },
      {
        image: shrimpPasta,
        title: "Shrimp Pasta",
        onClick: () => navigate('/recipe_post')
      },
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 2",
        onClick: () => navigate('/recipe_post')
      }
    ],
    [
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 3",
        onClick: () => navigate('/recipe_post')
      },
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 4",
        onClick: () => navigate('/recipe_post')
      },
      {
        image: "https://via.placeholder.com/300",
        title: "Restaurant 5",
        onClick: () => navigate('/recipe_post')
      }
    ]
  ];

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
                height: 200, 
                width: '100%', 
                objectFit: 'cover' 
              }} 
            />
            <Typography variant="h6" sx={{ color: '#7787b5' }}>
              {post.title}
            </Typography>
            <ActionIcons>
              <IconButton 
                size="small" 
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <LikeIcon />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <SaveIcon />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={(e) => {
                  e.stopPropagation();
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
      {postRows.map(renderPostRow)}
    </MainContainer>
  );
};



