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
import kor from "../../assets/Kor.jpg";
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

export const RestaurantPost5 = () => {
    const { sharePost, ShareSnackbar } = useShare(); 
    
    // Dummy post data for sharing
    const postData = {
        postId: 6,  
        isRestaurant: true,  
    };

    return (
        <RestaurantContainer>
            <RestaurantWrapper>
                <RestaurantHeader>
                    <Typography variant="h4" component="h1">
                        SEOUL KITCHEN
                    </Typography>
                </RestaurantHeader>

                <RestaurantImage 
                    src={kor}
                    alt="Seoul Kitchen"
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
                        Seoul Kitchen brings the authentic flavors of Korean cuisine to your table. Our chefs specialize in traditional dishes prepared with passion and precision.
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Restaurant Details
                    </SectionTitle>
                    <Typography variant="body1">
                        <strong>Cuisine:</strong> Korean<br />
                        <strong>Specialties:</strong> Korean BBQ, Bibimbap, Kimchi<br />
                        <strong>Location:</strong> Koreatown<br />
                        <strong>Hours:</strong> 12 PM - 11 PM
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Menu Highlights
                    </SectionTitle>
                    <Typography component="ul" sx={{ pl: 2 }}>
                        <li>Bulgogi Korean BBQ</li>
                        <li>Dolsot Bibimbap</li>
                        <li>Kimchi Jjigae</li>
                        <li>Korean Fried Chicken</li>
                    </Typography>
                </RestaurantInfo>
            </RestaurantWrapper>
            <ShareSnackbar/>
        </RestaurantContainer>
    );
};