import { useState } from "react";
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
  FavoriteBorder as LikeOutlineIcon,
  Bookmark as SaveIcon,
  BookmarkBorder as SaveOutlineIcon,
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

export const Recipes_Explore = () => {
  const { sharePost, ShareSnackbar, SharePopup } = useShare(); 
  const navigate = useNavigate();
  
  // State to track liked and saved posts
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  // All recipes with unique IDs
  const allRecipes = [
    {
      id: 'recipe1',
      image: chicken,
      title: "Chicken Tikka Masala",
      path: '/recipe_post1',
      isRestaurant: false
    },
    {
      id: 'recipe2',
      image: shrimpPasta,
      title: "Shrimp Pasta",
      path: '/recipe_post',
      isRestaurant: false
    },
    {
      id: 'recipe3',
      image: bul,
      title: "Beef Bulgogi",
      path: '/recipe_post2',
      isRestaurant: false
    },
    {
      id: 'recipe4',
      image: yakiUdon,
      title: "Yaki Udon",
      path: '/recipe_post3',
      isRestaurant: false
    },
    {
      id: 'recipe5',
      image: adobo,
      title: "Adobo Chicken",
      path: '/recipe_post4',
      isRestaurant: false
    },
    {
      id: 'recipe6',
      image: ques,
      title: "Chicken Quesadilla",
      path: '/recipe_post5',
      isRestaurant: false
    }
  ];

  // Group recipes into rows
  const postRows = [
    allRecipes.slice(0, 3),
    allRecipes.slice(3, 6)
  ];

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

  const renderPostRow = (posts, rowIndex) => (
    <Grid container spacing={3} key={rowIndex} sx={{ 
      mb: 3,
      '& > .MuiGrid-item': {
        marginBottom: 3
      }
    }}>
      {posts.map((post) => (
        <Grid item xs={4} key={post.id}>
          <PostCard onClick={() => navigate(post.path)}>
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
      {postRows.map(renderPostRow)}
      <SharePopup />
      <ShareSnackbar />
    </MainContainer>
  );
};