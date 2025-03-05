import {
    Container,
    Typography,
    Box,
    Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import yakiUdon from "../../assets/Yaki-Udon.jpg";

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

export const RecipePost3 = () => {
    return (
        <RecipeContainer>
            <RecipeWrapper>
                {/* Header */}
                <RecipeHeader>
                    <Typography variant="h4" component="h1">
                        YAKI UDON
                    </Typography>
                </RecipeHeader>

                {/* Image */}
                <RecipeImage 
                    src={yakiUdon}
                    alt="Yaki Udon"
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
                            <li>14 oz thick udon noodles</li>
                            <li>1/2 lb chicken or beef, thinly sliced</li>
                            <li>1 cup mixed vegetables (cabbage, carrots, onions)</li>
                            <li>3 green onions, chopped</li>
                            <li>3 tbsp soy sauce</li>
                            <li>2 tbsp mirin</li>
                            <li>2 tbsp oyster sauce</li>
                            <li>2 cloves garlic, minced</li>
                            <li>1 tbsp grated ginger</li>
                            <li>2 tbsp vegetable oil</li>
                            <li>1 tsp sesame oil</li>
                            <li>Sesame seeds for garnish</li>
                            <li>Salt and pepper to taste</li>
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
                                If using dried udon noodles, cook according to package instructions. If using pre-cooked udon, rinse under warm water to separate.
                            </li>
                            <li>
                                In a small bowl, mix soy sauce, mirin, oyster sauce, minced garlic, and grated ginger to create the sauce.
                            </li>
                            <li>
                                Heat vegetable oil in a large wok or skillet over medium-high heat. Add sliced meat and cook until browned, about 3-4 minutes.
                            </li>
                            <li>
                                Add mixed vegetables to the pan and stir-fry for 2-3 minutes until they start to soften.
                            </li>
                            <li>
                                Add the udon noodles to the pan, breaking up any clumps. Pour the sauce over the noodles and meat.
                            </li>
                            <li>
                                Stir-fry everything together, ensuring the noodles are well-coated with sauce and heated through, about 3-4 minutes.
                            </li>
                            <li>
                                Drizzle with sesame oil and sprinkle with chopped green onions.
                            </li>
                            <li>
                                Serve hot, garnished with sesame seeds and additional green onions if desired.
                            </li>
                        </Typography>
                    </Grid>
                </RecipeContent>
            </RecipeWrapper>
        </RecipeContainer>
    );
};