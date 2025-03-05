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
import Jewel from "../../assets/Jewel.jpg"; // You'll need to add this image

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

export const RestaurantPost1 = () => {
   return (
       <RestaurantContainer>
           <RestaurantWrapper>
               {/* Header */}
               <RestaurantHeader>
                   <Typography variant="h4" component="h1">
                       JEWEL OF INDIA
                   </Typography>
               </RestaurantHeader>

               {/* Restaurant Image */}
               <RestaurantImage 
                   src={Jewel}
                   alt="Jewel of India"
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
                       Jewel of India offers an exquisite dining experience featuring authentic Indian cuisine. Located in the heart of the city, the restaurant brings the rich flavors and traditional cooking techniques of India to your table.
                   </Typography>
               </RestaurantInfo>

               {/* Restaurant Details */}
               <RestaurantInfo>
                   <SectionTitle variant="h5">
                       Restaurant Details
                   </SectionTitle>
                   <Typography variant="body1">
                       <strong>Cuisine:</strong> Indian<br />
                       <strong>Specialties:</strong> Tandoori, Curries, Biryani<br />
                       <strong>Location:</strong> Downtown Area<br />
                       <strong>Hours:</strong> 11:30 AM - 10:30 PM
                   </Typography>
               </RestaurantInfo>

               {/* Menu Highlights */}
               <RestaurantInfo>
                   <SectionTitle variant="h5">
                       Menu Highlights
                   </SectionTitle>
                   <Typography component="ul" sx={{ pl: 2 }}>
                       <li>Butter Chicken</li>
                       <li>Lamb Rogan Josh</li>
                       <li>Vegetable Biryani</li>
                       <li>Paneer Tikka Masala</li>
                   </Typography>
               </RestaurantInfo>
           </RestaurantWrapper>
       </RestaurantContainer>
   );
};