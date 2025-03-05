import {
    Container,
    Typography,
    Box,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
    Favorite as LikeIcon, 
    Share as ShareIcon 
} from '@mui/icons-material';
import mex from "../../assets/Mex.jpg";
import { useShare } from "../../common/shareUtil"

const RestaurantContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
});

const RestaurantWrapper = styled(Box)({
    width: '100%',
    maxWidth: 1200,
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
});

const RestaurantHeader = styled(Box)({
    backgroundColor: '#7787b5',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
});

const RestaurantImage = styled('img')({
    width: '100%',
    height: 500,
    objectFit: 'cover',
});

const RestaurantInfo = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'left',
}));

const ActionIcons = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f0f2f5',
});

const SectionTitle = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: '20px',
    textTransform: 'uppercase',
    color: '#7787b5',
});

export const RestaurantPost4 = () => {
    const { sharePost, ShareSnackbar } = useShare(); 
    
    // Dummy post data for sharing
    const postData = {
        postId: 5,  
        isRestaurant: true,  
    };

    return (
        <RestaurantContainer>
            <RestaurantWrapper>
                <RestaurantHeader>
                    <Typography variant="h4" component="h1">
                        SAN MIGUEL
                    </Typography>
                </RestaurantHeader>

                <RestaurantImage 
                    src={mex}
                    alt="San Miguel"
                />

                <ActionIcons>
                    <Box display="flex" alignItems="center">
                        <IconButton size="small">
                            <LikeIcon />
                        </IconButton>
                        <Typography variant="body2">100K</Typography>
                    </Box>
                    <IconButton size="small"
                        onClick={(e) => {
                            e.stopPropagation(); 
                            sharePost(postData.postId, postData.isRestaurant);
                        }}
                    >
                        <ShareIcon />
                    </IconButton>
                </ActionIcons>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        About Restaurant
                    </SectionTitle>
                    <Typography variant="body1">
                        San Miguel celebrates the vibrant and bold flavors of Mexican cuisine. Our restaurant offers an authentic dining experience with traditional recipes and a modern twist.
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Restaurant Details
                    </SectionTitle>
                    <Typography variant="body1">
                        <strong>Cuisine:</strong> Mexican<br />
                        <strong>Specialties:</strong> Tacos, Enchiladas, Mole<br />
                        <strong>Location:</strong> Cultural Quarter<br />
                        <strong>Hours:</strong> 11 AM - 10 PM
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Menu Highlights
                    </SectionTitle>
                    <Typography component="ul" sx={{ pl: 2 }}>
                        <li>Street Tacos Trio</li>
                        <li>Chicken Mole Poblano</li>
                        <li>Seafood Ceviche</li>
                        <li>Churros with Chocolate</li>
                    </Typography>
                </RestaurantInfo>
            </RestaurantWrapper>
            <ShareSnackbar/>
        </RestaurantContainer>
    );
};