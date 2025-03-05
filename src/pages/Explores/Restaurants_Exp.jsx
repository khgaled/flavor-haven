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
import { useShare } from "../../common/shareUtil"
import garden from "../../assets/sichuan-garden.jpg"
import jewel from "../../assets/Jewel.jpg"
import jap from "../../assets/Japan.jpg"
import italy from "../../assets/italy.jpg"
import mex from "../../assets/Mex.jpg";
import kor from "../../assets/Kor.jpg";

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
  const { sharePost, ShareSnackbar } = useShare(); 
  const navigate = useNavigate();

  const postRows = [
    [
      {
        image: jap,
        title: "Sakura Sushi",
        onClick: () => navigate('/restaurant_post2')
      },
      {
        image: garden,
        title: "Sichuan Garden",
        onClick: () => navigate('/restaurant_post')
      },
      {
        image: jewel,
        title: "Jewel of India",
        onClick: () => navigate('/restaurant_post1')
      }
    ],
    [
      {
        image: italy,
        title: "Little Italy",
        onClick: () => navigate('/restaurant_post3')
      },
      {
        image: mex,
        title: "San Miguel",
        onClick: () => navigate('/restaurant_post4')
      },
      {
        image: kor,
        title: "Seoul Kitchen",
        onClick: () => navigate('/restaurant_post5')
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
      {postRows.map(renderPostRow)}
      <ShareSnackbar />
    </MainContainer>
  );
};



