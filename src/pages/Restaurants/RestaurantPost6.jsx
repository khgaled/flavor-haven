import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
    Favorite as LikeIcon, 
    FavoriteBorder as LikeOutlineIcon,
    Share as ShareIcon 
} from '@mui/icons-material';
import bobaImage from "../../assets/boba1.jpg";
import { useShare } from "../../common/shareUtil";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Left panel styles
const LeftPanel = styled(Box)({
    width: '33.33%',
    backgroundColor: "#82A5D9", 
    padding: '32px 32px 80px 32px', 
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    color: 'white',
    position: 'relative', 
    overflowY: 'auto', // Make left panel scrollable
});

const RestaurantTitle = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginTop: '32px',
    marginBottom: '32px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
});

const InfoCard = styled(Box)({
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    color: '#333',
});

const BackButton = styled(IconButton)({
    backgroundColor: 'white',
    width: '48px',
    height: '48px',
    position: 'fixed',
    bottom: '24px',
    left: '32px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 999, // Much higher z-index to ensure it's above everything
    '&:hover': {
        backgroundColor: '#f5f5f5',
        transform: 'scale(1.05)',
    },
    transition: 'transform 0.2s ease',
});

// Right panel styles
const RightPanel = styled(Box)({
    width: '66.67%',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden', // Prevent scrolling on right panel
    padding: '32px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
});

const ContentCard = styled(Box)({
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
});

const RestaurantImage = styled('img')({
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block', // Ensure it's displayed as block
    maxHeight: '500px' // Set a max height for consistency
});

const ActionBar = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #f0f2f5',
});

const SectionTitle = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    color: '#7787b5',
});

const CaptionBox = styled(Box)({
    padding: '16px',
    borderBottom: '1px solid #f0f2f5',
    textAlign: 'left'
});

// Styled like button with color change when active
const LikeButton = styled(IconButton)(({ theme, isliked }) => ({
    color: isliked === 'true' ? '#f44336' : 'inherit',
    transition: 'color 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
}));

export const RestaurantPost6 = () => {
    const { sharePost, ShareSnackbar } = useShare(); 
    
    // State to track if the post is liked
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(100000);
    
    // Function to handle like button click
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };
    
    // Dummy post data for sharing
    const postData = {
        postId: 7,  
        isRestaurant: true,  
    };

    return (
        <Box display="flex" width="100%" height="100vh">
            {/* Left Side Panel - Now with scrolling */}
            <LeftPanel>
                <RestaurantTitle variant="h3" component="h1">
                    MilkT Society
                </RestaurantTitle>
                
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <InfoCard>
                        <Typography variant="body1">
                            Bubble Tea Haven offers a modern twist on traditional Taiwanese bubble tea. Our shop specializes in handcrafted, premium tea drinks with unique flavors and high-quality ingredients.
                        </Typography>
                    </InfoCard>

                    <InfoCard>
                        <Typography variant="body1">
                            <strong>Cuisine:</strong> Taiwanese Bubble Tea<br />
                            <strong>Specialties:</strong> Milk Teas, Fruit Teas, Cheese Foam Drinks<br />
                            <strong>Location:</strong> Downtown District<br />
                            <strong>Hours:</strong> 11 AM - 10 PM
                        </Typography>
                    </InfoCard>

                    <InfoCard>
                        <SectionTitle variant="h6" sx={{ color: '#7787b5', textAlign: 'left' }}>
                            Menu Highlights
                        </SectionTitle>
                        <Box component="ul" sx={{ pl: 2, mt: 1, mb: 0 }}>
                            <Typography component="li" sx={{ mb: 1, textAlign: 'left' }}>Classic Brown Sugar Milk Tea</Typography>
                            <Typography component="li" sx={{ mb: 1, textAlign: 'left' }}>Signature Cheese Foam Oolong Tea</Typography>
                            <Typography component="li" sx={{ mb: 1, textAlign: 'left' }}>Fresh Fruit Yakult</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>Matcha Latte with Boba</Typography>
                        </Box>
                    </InfoCard>

                    <InfoCard>
                        <SectionTitle variant="h6" sx={{ color: '#7787b5', textAlign: 'center' }}>
                            TAGS
                        </SectionTitle>
                        <Box sx={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: 1.5, 
                            justifyContent: 'center', 
                            px: 1,
                            pb: 1.5
                        }}>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#BubbleTea</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#BobaLife</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#Foodie</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#MilkTea</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#MilkTSociety</Box>
                        </Box>
                    </InfoCard>
                    
                </Box>
                
                <Box sx={{ height: 80 }} /> {/* Spacer for back button */}
                
                <BackButton 
                    aria-label="back"
                    onClick={() => window.history.back()}
                >
                    <ArrowBackIcon fontSize="medium" />
                </BackButton>
            </LeftPanel>

           
            <RightPanel>
                <ContentCard>
                    {/* Force the image to render with explicit dimensions */}
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        <RestaurantImage 
                            src={bobaImage}
                            alt="MilkT Society Bubble Tea"
                        />
                    </Box>

                    <ActionBar>
                        <Typography variant="subtitle2" fontWeight="medium">
                            BUBBLE TEA
                        </Typography>
                        
                        <Box display="flex" alignItems="center">
                            <Box display="flex" alignItems="center" mr={2}>
                                <Typography variant="body2" mr={0.5}>
                                    {likeCount.toLocaleString()}
                                </Typography>
                                <LikeButton 
                                    size="small"
                                    isliked={isLiked.toString()}
                                    onClick={handleLikeClick}
                                    aria-label={isLiked ? "Unlike" : "Like"}
                                >
                                    {isLiked ? <LikeIcon fontSize="small" /> : <LikeOutlineIcon fontSize="small" />}
                                </LikeButton>
                            </Box>
                            <Typography variant="body2" mr={0.5}>100K</Typography>
                            <IconButton 
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    sharePost(postData.postId, postData.isRestaurant);
                                }}
                            >
                                <ShareIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </ActionBar>
                    
                    {/* Make the caption more prominent with a background color */}
                    <CaptionBox sx={{ backgroundColor: '#f9f9f9' }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ textAlign: 'left' }}>
                            milktsociety
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            🧋 NEW FLAVOR ALERT! 🧋 Try our limited edition Brown Sugar Strawberry Milk Tea with fresh strawberry purée and handmade brown sugar boba pearls. Perfect for the spring season! Tag a friend who needs to try this with you. #BubbleTea #BobaLife #FreshFlavors
                        </Typography>
                    </CaptionBox>
                </ContentCard>
            </RightPanel>
            <ShareSnackbar/>
        </Box>
    );
};