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

export const Restaurants_Explore = () => {
  const { sharePost, ShareSnackbar } = useShare(); 
  const navigate = useNavigate();
  
  // State to track liked and saved posts
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  // Initial restaurant data
  const restaurants = [
    {
      id: 1,
      image: jap,
      title: "Sakura Sushi",
      path: '/restaurant_post2',
      isRestaurant: true
    },
    {
      id: 2,
      image: garden,
      title: "Sichuan Garden",
      path: '/restaurant_post',
      isRestaurant: true
    },
    {
      id: 3,
      image: jewel,
      title: "Jewel of India",
      path: '/restaurant_post1',
      isRestaurant: true
    },
    {
      id: 4,
      image: italy,
      title: "Little Italy",
      path: '/restaurant_post3',
      isRestaurant: true
    },
    {
      id: 5,
      image: mex,
      title: "San Miguel",
      path: '/restaurant_post4',
      isRestaurant: true
    },
    {
      id: 6,
      image: kor,
      title: "Seoul Kitchen",
      path: '/restaurant_post5',
      isRestaurant: true
    }
  ];

  // Group restaurants into rows of 3
  const postRows = [
    restaurants.slice(0, 3),
    restaurants.slice(3, 6)
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
      <ShareSnackbar />
    </MainContainer>
  );
};