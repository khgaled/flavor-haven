import { useState } from 'react';
import {
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
import mex from "../../assets/Mex.jpg";
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
    width: '48px',
    height: '48px',
    position: 'absolute', // Change to absolute for top-left positioning
    left: '16px', // Move to left
    bottom: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999, 
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
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
    position: 'relative',
});

const CaptionBox = styled(Box)({
    padding: '16px',
    borderBottom: '1px solid #f0f2f5',
    textAlign: 'left'
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

// Styled like button with color change when active
const LikeButton = styled(IconButton)(({ theme, isliked }) => ({
    color: isliked === 'true' ? '#f44336' : 'inherit',
    transition: 'color 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
}));

export const RestaurantPost4 = () => {
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
        postId: 5,  
        isRestaurant: true,  
    };

    return (
        <Box display="flex" width="100%">
            {/* Left Side Panel - Now with scrolling */}
            <LeftPanel sx={{borderRadius: 5}}>
                <RestaurantTitle variant="h3" component="h1">
                    SAN MIGUEL
                </RestaurantTitle>
                
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <InfoCard>
                        <Typography variant="body1">
                            San Miguel celebrates the vibrant and bold flavors of Mexican cuisine. Our restaurant offers an authentic dining experience with traditional recipes and a modern twist.
                        </Typography>
                    </InfoCard>

                    <InfoCard>
                        <Typography variant="body1">
                            <strong>Cuisine:</strong> Mexican<br />
                            <strong>Specialties:</strong> Tacos, Enchiladas, Mole<br />
                            <strong>Location:</strong> Cultural Quarter<br />
                            <strong>Hours:</strong> 11 AM - 10 PM
                        </Typography>
                    </InfoCard>

                    <InfoCard>
                        <SectionTitle variant="h6" sx={{ color: '#7787b5', textAlign: 'left' }}>
                            Menu Highlights
                        </SectionTitle>
                        <Box component="ul" sx={{ pl: 2, mt: 1, mb: 0 }}>
                            <Typography component="li" sx={{ mb: 1, textAlign: 'left' }}>Street Tacos Trio</Typography>
                            <Typography component="li" sx={{ mb: 1, textAlign: 'left' }}>Chicken Mole Poblano</Typography>
                            <Typography component="li" sx={{ mb: 1, textAlign: 'left' }}>Seafood Ceviche</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>Churros with Chocolate</Typography>
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
                            }}>#MexicanFlavors</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#TacoTuesday</Box>
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
                            }}>#Authentic</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#MoleMagic</Box>
                            <Box component="span" sx={{ 
                                bgcolor: '#f0f2f5', 
                                px: 2, 
                                py: 0.7, 
                                borderRadius: 20, 
                                color: '#7787b5', 
                                fontSize: '0.9rem',
                                mb: 1 
                            }}>#SanMiguel</Box>
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
                    <RestaurantImage 
                        src={mex}
                        alt="San Miguel Restaurant"
                    />

                    <ActionBar>
                        <Typography variant="subtitle2" fontWeight="medium">
                            MEXICAN CUISINE
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
                    
                    <CaptionBox>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ textAlign: 'left' }}>
                            sanmiguelrestaurant
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            <strong>🎉 GRAND OPENING! 🎉</strong> We're thrilled to announce the grand opening of San Miguel on March 15th! Join us for authentic Mexican cuisine, live music, and special opening week promotions. First 50 guests receive a complimentary signature cocktail! #GrandOpening #MexicanCuisine
                        </Typography>
                    </CaptionBox>
                </ContentCard>
            </RightPanel>
            <ShareSnackbar/>
        </Box>
    );
};