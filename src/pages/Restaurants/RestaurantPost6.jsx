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
import bobaImage from "../../assets/boba1.jpg"; 
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

export const RestaurantPost6 = () => {
    const { sharePost, ShareSnackbar } = useShare(); 
        
        // Dummy post data for sharing
        const postData = {
            postId: 7,  
            isRestaurant: true,  
        };


    return (
        <RestaurantContainer>
            <RestaurantWrapper>
                <RestaurantHeader>
                    <Typography variant="h4" component="h1">
                        MilkT Society
                    </Typography>
                </RestaurantHeader>

                <RestaurantImage 
                    src={bobaImage}
                    alt="MilkT Society"
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
                        Bubble Tea Haven offers a modern twist on traditional Taiwanese bubble tea. Our shop specializes in handcrafted, premium tea drinks with unique flavors and high-quality ingredients.
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Restaurant Details
                    </SectionTitle>
                    <Typography variant="body1">
                        <strong>Cuisine:</strong> Taiwanese Bubble Tea<br />
                        <strong>Specialties:</strong> Milk Teas, Fruit Teas, Cheese Foam Drinks<br />
                        <strong>Location:</strong> Downtown District<br />
                        <strong>Hours:</strong> 11 AM - 10 PM
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Menu Highlights
                    </SectionTitle>
                    <Typography component="ul" sx={{ pl: 2 }}>
                        <li>Classic Brown Sugar Milk Tea</li>
                        <li>Signature Cheese Foam Oolong Tea</li>
                        <li>Fresh Fruit Yakult</li>
                        <li>Matcha Latte with Boba</li>
                    </Typography>
                </RestaurantInfo>
            </RestaurantWrapper>
            <ShareSnackbar/>
        </RestaurantContainer>
    );
};