import {
   Container,
   Typography,
   Box,
   Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import quesadilla from "../../assets/Quesadilla.jpg";

const RecipeContainer = styled(Container)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '100vh',
   backgroundColor: '#f0f2f5',
   padding: '20px',
});

const RecipeWrapper = styled(Box)({
   width: '100%',
   maxWidth: 1200,
   backgroundColor: 'white',
   borderRadius: '16px',
   overflow: 'hidden',
   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
});

const RecipeHeader = styled(Box)({
   backgroundColor: '#7787b5',
   color: 'white',
   padding: '20px',
   textAlign: 'center',
});

const RecipeContent = styled(Grid)({
   padding: '20px',
});

const RecipeImage = styled('img')({
   width: '100%',
   height: 500,
   objectFit: 'cover',
});

const SectionTitle = styled(Typography)({
   fontWeight: 'bold',
   marginBottom: '20px',
   textTransform: 'uppercase',
   color: '#7787b5',
   textAlign: 'left',
});

export const RecipePost5 = () => {
   return (
       <RecipeContainer>
           <RecipeWrapper>
               {/* Header */}
               <RecipeHeader>
                   <Typography variant="h4" component="h1">
                       CHICKEN QUESADILLA
                   </Typography>
               </RecipeHeader>

               {/* Image */}
               <RecipeImage 
                   src={quesadilla}
                   alt="Chicken Quesadilla"
               />

               {/* Main Content */}
               <RecipeContent container spacing={4}>
                   {/* Ingredients Section */}
                   <Grid item xs={12}>
                       <SectionTitle variant="h5">
                           Ingredients
                       </SectionTitle>
                       <Typography 
                           component="ul" 
                           sx={{ 
                               pl: 2,
                               textAlign: 'left',
                               '& li': {
                                   textAlign: 'left',
                                   marginBottom: '8px'
                               }
                           }}
                       >
                           <li>4 large flour tortillas</li>
                           <li>2 cups cooked, shredded chicken</li>
                           <li>2 cups shredded Mexican cheese blend</li>
                           <li>1/2 cup diced bell peppers</li>
                           <li>1/4 cup diced onions</li>
                           <li>2 tbsp chopped fresh cilantro</li>
                           <li>1 tsp ground cumin</li>
                           <li>1 tsp chili powder</li>
                           <li>Salt and pepper to taste</li>
                           <li>2 tbsp olive oil</li>
                           <li>Sour cream for serving</li>
                           <li>Salsa for serving</li>
                           <li>Guacamole for serving</li>
                       </Typography>
                   </Grid>

                   {/* Recipe Steps Section */}
                   <Grid item xs={12}>
                       <SectionTitle variant="h5">
                           Cooking Instructions
                       </SectionTitle>
                       <Typography 
                           component="ol" 
                           sx={{ 
                               pl: 2,
                               textAlign: 'left',
                               '& li': {
                                   textAlign: 'left',
                                   marginBottom: '12px'
                               }
                           }}
                       >
                           <li>
                               In a bowl, mix shredded chicken with cumin, chili powder, salt, and pepper.
                           </li>
                           <li>
                               Heat a large skillet over medium heat. Lightly brush with olive oil.
                           </li>
                           <li>
                               Place a tortilla in the skillet. Sprinkle half of the tortilla with cheese, then add the seasoned chicken.
                           </li>
                           <li>
                               Add diced bell peppers, onions, and chopped cilantro over the chicken.
                           </li>
                           <li>
                               Sprinkle additional cheese on top of the filling and fold the tortilla in half.
                           </li>
                           <li>
                               Cook for 2-3 minutes on each side until the tortilla is golden brown and crispy, and the cheese is melted.
                           </li>
                           <li>
                               Remove from skillet and repeat with remaining tortillas and filling.
                           </li>
                           <li>
                               Cut each quesadilla into wedges and serve hot with sour cream, salsa, and guacamole.
                           </li>
                       </Typography>
                   </Grid>
               </RecipeContent>
           </RecipeWrapper>
       </RecipeContainer>
   );
};