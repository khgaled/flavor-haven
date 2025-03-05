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
import shrimpPasta from "../../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210204-shrimp-scampi-pasta-sauce-daniel-gritzer-16-f01e8b8cc5dc4591b968bb1acc1b6f.jpg";
import chicken from "../../assets/chicken.png";
import bul from "../../assets/Beef-Bulgogi.jpg";
import yakiUdon from "../../assets/Yaki-Udon.jpg";
import adobo from "../../assets/Adobo-Chicken.jpg";
import ques from "../../assets/Quesadilla.jpg";

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

export const Recipes_Explore = () => {
  const { sharePost, ShareSnackbar } = useShare(); 
  const navigate = useNavigate();

  const postRows = [
    [
      {
        image: chicken,
        title: "Chicken Tikka Masala",
        onClick: () => navigate('/recipe_post1')
      },
      {
        image: shrimpPasta,
        title: "Shrimp Pasta",
        onClick: () => navigate('/recipe_post')
      },
      {
        image: bul,
        title: "Beef Bulgogi",
        onClick: () => navigate('/recipe_post2')
      }
    ],
    [
      {
        image: yakiUdon,
        title: "Yaki Udon",
        onClick: () => navigate('/recipe_post3')
      },
      {
        image: adobo,
        title: "Adobo Chicken",
        onClick: () => navigate('/recipe_post4')
      },
      {
        image: ques,
        title: "Chicken Quesadilla",
        onClick: () => navigate('/recipe_post5')
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

