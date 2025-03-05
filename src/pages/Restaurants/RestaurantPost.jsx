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
import restaurantImage from "../../assets/sichuan-garden.jpg";

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

export const RestaurantPost = () => {
    return (
        <RestaurantContainer>
            <RestaurantWrapper>
                {/* Header */}
                <RestaurantHeader>
                    <Typography variant="h4" component="h1">
                        SICHUAN GARDEN
                    </Typography>
                </RestaurantHeader>

                {/* Grand Opening Banner */}
                <Box 
                    sx={{ 
                        backgroundColor: '#7787b5', 
                        color: 'white', 
                        textAlign: 'center', 
                        padding: 2 
                    }}
                >
                    <Typography variant="h6">GRAND OPENING</Typography>
                </Box>

                {/* Restaurant Image */}
                <RestaurantImage 
                    src={restaurantImage}
                    alt="Sichuan Garden"
                />

                {/* Action Icons */}
                <ActionIcons>
                    <Box display="flex" alignItems="center">
                        <IconButton size="small">
                            <LikeIcon />
                        </IconButton>
                        <Typography variant="body2">100K</Typography>
                    </Box>
                    <IconButton size="small">
                        <ShareIcon />
                    </IconButton>
                </ActionIcons>

                {/* Restaurant Description */}
                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        About Restaurant
                    </SectionTitle>
                    <Typography variant="body1">
                        This restaurant serves traditional Taiwanese food along with good boba options. Located in the heart of the city, it offers an authentic culinary experience with a modern twist.
                    </Typography>
                </RestaurantInfo>

                {/* Restaurant Details */}
                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Restaurant Details
                    </SectionTitle>
                    <Typography variant="body1">
                        <strong>Cuisine:</strong> Taiwanese<br />
                        <strong>Specialties:</strong> Traditional Dishes, Boba<br />
                        <strong>Location:</strong> City Center<br />
                        <strong>Hours:</strong> 11 AM - 10 PM
                    </Typography>
                </RestaurantInfo>

                {/* Menu Highlights */}
                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Menu Highlights
                    </SectionTitle>
                    <Typography component="ul" sx={{ pl: 2 }}>
                        <li>Classic Beef Noodle Soup</li>
                        <li>Taiwanese Fried Chicken</li>
                        <li>Signature Milk Tea</li>
                        <li>Bubble Waffles</li>
                    </Typography>
                </RestaurantInfo>
            </RestaurantWrapper>
        </RestaurantContainer>
    );
};