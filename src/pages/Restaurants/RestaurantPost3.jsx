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
import it from "../../assets/italy.jpg";

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

export const RestaurantPost3 = () => {
    return (
        <RestaurantContainer>
            <RestaurantWrapper>
                <RestaurantHeader>
                    <Typography variant="h4" component="h1">
                        LITTLE ITALY
                    </Typography>
                </RestaurantHeader>

                <RestaurantImage 
                    src={it}
                    alt="Little Italy"
                />

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

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        About Restaurant
                    </SectionTitle>
                    <Typography variant="body1">
                        Little Italy brings the essence of Italian cuisine to your table. Our chefs craft traditional recipes using fresh, locally sourced ingredients and time-honored techniques.
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Restaurant Details
                    </SectionTitle>
                    <Typography variant="body1">
                        <strong>Cuisine:</strong> Italian<br />
                        <strong>Specialties:</strong> Pasta, Pizzas, Risottos<br />
                        <strong>Location:</strong> Historic District<br />
                        <strong>Hours:</strong> 5 PM - 11 PM
                    </Typography>
                </RestaurantInfo>

                <RestaurantInfo>
                    <SectionTitle variant="h5">
                        Menu Highlights
                    </SectionTitle>
                    <Typography component="ul" sx={{ pl: 2 }}>
                        <li>Handmade Pappardelle with Truffle</li>
                        <li>Margherita Pizza</li>
                        <li>Osso Buco</li>
                        <li>Tiramisu</li>
                    </Typography>
                </RestaurantInfo>
            </RestaurantWrapper>
        </RestaurantContainer>
    );
};