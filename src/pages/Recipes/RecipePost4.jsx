import {
    Container,
    Typography,
    Box,
    Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import adoboChicken from "../../assets/Adobo-Chicken.jpg";

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

export const RecipePost4 = () => {
    return (
        <RecipeContainer>
            <RecipeWrapper>
                {/* Header */}
                <RecipeHeader>
                    <Typography variant="h4" component="h1">
                        CHICKEN ADOBO
                    </Typography>
                </RecipeHeader>

                {/* Image */}
                <RecipeImage 
                    src={adoboChicken}
                    alt="Chicken Adobo"
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
                            <li>2 lbs chicken thighs or drumsticks</li>
                            <li>1/2 cup white vinegar</li>
                            <li>1/2 cup soy sauce</li>
                            <li>1 head of garlic, cloves peeled and crushed</li>
                            <li>1 tsp whole black peppercorns</li>
                            <li>3 bay leaves</li>
                            <li>1/4 cup vegetable oil</li>
                            <li>1 large onion, sliced</li>
                            <li>2 tbsp brown sugar</li>
                            <li>1/4 cup water</li>
                            <li>Green onions for garnish</li>
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
                                In a large bowl, combine chicken, vinegar, soy sauce, crushed garlic, peppercorns, and bay leaves. Marinate for 1-3 hours in the refrigerator.
                            </li>
                            <li>
                                Remove chicken from the marinade, reserving the marinade. Pat the chicken dry with paper towels.
                            </li>
                            <li>
                                Heat vegetable oil in a large skillet or Dutch oven over medium-high heat. Brown the chicken pieces on all sides, about 3-4 minutes per side.
                            </li>
                            <li>
                                Add sliced onions to the pan and sauté until they start to soften, about 2-3 minutes.
                            </li>
                            <li>
                                Pour in the reserved marinade, brown sugar, and water. Bring to a boil, then reduce heat to low.
                            </li>
                            <li>
                                Cover and simmer for 30-40 minutes, or until the chicken is fully cooked and tender, turning occasionally.
                            </li>
                            <li>
                                Remove bay leaves. If the sauce is too thin, increase heat and reduce until it reaches your desired consistency.
                            </li>
                            <li>
                                Garnish with chopped green onions and serve hot with steamed rice.
                            </li>
                        </Typography>
                    </Grid>
                </RecipeContent>
            </RecipeWrapper>
        </RecipeContainer>
    );
};