import {
    Container,
    Typography,
    Box,
    Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import chicken from "../../assets/chicken.png";

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

export const RecipePost1= () => {
    return (
        <RecipeContainer>
            <RecipeWrapper>
                {/* Header */}
                <RecipeHeader>
                    <Typography variant="h4" component="h1">
                        CHICKEN TIKKA MASALA
                    </Typography>
                </RecipeHeader>

                {/* Image */}
                <RecipeImage 
                    src={chicken}
                    alt="Chicken Tikka Masala"
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
                            <li>2 lbs boneless, skinless chicken breasts, cut into cubes</li>
                            <li>1 cup plain yogurt</li>
                            <li>2 tbsp lemon juice</li>
                            <li>2 tsp ground cumin</li>
                            <li>2 tsp ground red chili powder</li>
                            <li>2 tsp ground coriander</li>
                            <li>1 tsp garam masala</li>
                            <li>1 large onion, finely chopped</li>
                            <li>4 cloves garlic, minced</li>
                            <li>1 tbsp fresh ginger, grated</li>
                            <li>1 can (14 oz) tomato sauce</li>
                            <li>1 cup heavy cream</li>
                            <li>Fresh cilantro for garnish</li>
                            <li>Salt to taste</li>
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
                                In a large bowl, mix yogurt, lemon juice, cumin, red chili powder, coriander, and garam masala. Add chicken cubes and marinate for at least 1 hour.
                            </li>
                            <li>
                                Preheat the oven to 400°F (200°C). Spread marinated chicken on a baking sheet and bake for 15-20 minutes until cooked through.
                            </li>
                            <li>
                                In a large skillet, heat oil over medium heat. Sauté onions until golden brown, about 5-7 minutes.
                            </li>
                            <li>
                                Add minced garlic and ginger, cook for another 1-2 minutes until fragrant.
                            </li>
                            <li>
                                Pour in tomato sauce and bring to a simmer. Cook for 5 minutes, stirring occasionally.
                            </li>
                            <li>
                                Add the baked chicken to the sauce, stirring to coat evenly.
                            </li>
                            <li>
                                Stir in heavy cream and simmer for 5-10 minutes until the sauce thickens.
                            </li>
                            <li>
                                Season with salt to taste. Garnish with fresh cilantro before serving.
                            </li>
                        </Typography>
                    </Grid>
                </RecipeContent>
            </RecipeWrapper>
        </RecipeContainer>
    );
};