import {
    Container,
    Typography,
    Box,
    Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import bul from "../../assets/Beef-Bulgogi.jpg";

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

export const RecipePost2 = () => {
    return (
        <RecipeContainer>
            <RecipeWrapper>
                {/* Header */}
                <RecipeHeader>
                    <Typography variant="h4" component="h1">
                        BEEF BULGOGI
                    </Typography>
                </RecipeHeader>

                {/* Image */}
                <RecipeImage 
                    src={bul}
                    alt="Beef Bulgogi"
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
                            <li>2 lbs thinly sliced beef sirloin or rib-eye</li>
                            <li>1/2 cup soy sauce</li>
                            <li>1/4 cup brown sugar</li>
                            <li>4 cloves garlic, minced</li>
                            <li>2 tbsp sesame oil</li>
                            <li>2 tbsp mirin (rice wine)</li>
                            <li>1 tbsp grated fresh ginger</li>
                            <li>2 green onions, thinly sliced</li>
                            <li>2 tbsp toasted sesame seeds</li>
                            <li>1 Asian pear, grated (optional)</li>
                            <li>1/4 tsp black pepper</li>
                            <li>Vegetable oil for cooking</li>
                            <li>Steamed rice for serving</li>
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
                                In a large bowl, mix soy sauce, brown sugar, minced garlic, sesame oil, mirin, grated ginger, and black pepper to create the marinade.
                            </li>
                            <li>
                                If using Asian pear, grate it and add to the marinade for extra tenderizing and sweetness.
                            </li>
                            <li>
                                Add the thinly sliced beef to the marinade, ensuring each piece is well coated. Cover and refrigerate for at least 30 minutes, preferably 2-4 hours.
                            </li>
                            <li>
                                Heat a large skillet or grill pan over high heat. Add a small amount of vegetable oil.
                            </li>
                            <li>
                                Cook the marinated beef in batches, making sure not to overcrowd the pan. Cook for 2-3 minutes on each side until nicely browned and slightly caramelized.
                            </li>
                            <li>
                                Transfer cooked beef to a serving plate. Sprinkle with sliced green onions and toasted sesame seeds.
                            </li>
                            <li>
                                Serve hot with steamed rice. Optionally, you can wrap the beef in lettuce leaves for a traditional Korean-style serving.
                            </li>
                            <li>
                                Garnish with additional sesame seeds and green onions if desired.
                            </li>
                        </Typography>
                    </Grid>
                </RecipeContent>
            </RecipeWrapper>
        </RecipeContainer>
    );
};