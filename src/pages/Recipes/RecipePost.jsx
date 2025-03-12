import {
    Container,
    Typography,
    Box,
    Grid,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import shrimp from "../../assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210204-shrimp-scampi-pasta-sauce-daniel-gritzer-16-f01e8b8cc5dc4591b968bb1acc1b6f.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RecipeContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
    position: 'relative'
});

const BackButton = styled(IconButton)({
    position: 'absolute',
    top: '40px',
    left: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    }
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

export const RecipePost = () => {
    return (
        <RecipeContainer>
            <BackButton 
                aria-label="back"
                onClick={() => window.history.back()}
            >
                <ArrowBackIcon fontSize="medium" />
            </BackButton>
            <RecipeWrapper>
                {/* Header */}
                <RecipeHeader>
                    <Typography variant="h4" component="h1">
                        SHRIMP PASTA
                    </Typography>
                </RecipeHeader>

                {/* Image */}
                <RecipeImage 
                    src={shrimp}
                    alt="Shrimp Scampi Pasta"
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
                            <li>1 lb large shrimp, peeled and deveined</li>
                            <li>1 lb linguine pasta</li>
                            <li>4 cloves garlic, minced</li>
                            <li>1/2 cup white wine</li>
                            <li>1/4 cup fresh lemon juice</li>
                            <li>1/2 cup unsalted butter</li>
                            <li>1/4 cup olive oil</li>
                            <li>1/4 cup chopped fresh parsley</li>
                            <li>Red pepper flakes, to taste</li>
                            <li>Salt and black pepper, to taste</li>
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
                                Bring a large pot of salted water to a boil. Cook linguine according to package instructions until al dente. Reserve 1/2 cup pasta water before draining.
                            </li>
                            <li>
                                In a large skillet, heat olive oil over medium-high heat. Add minced garlic and cook for 30 seconds until fragrant.
                            </li>
                            <li>
                                Add shrimp to the skillet. Cook for 1-2 minutes on each side until they turn pink and are almost cooked through.
                            </li>
                            <li>
                                Pour in white wine and lemon juice. Let it simmer for 2 minutes to reduce slightly.
                            </li>
                            <li>
                                Add butter to the skillet, creating a rich sauce. Stir until butter is melted and sauce is smooth.
                            </li>
                            <li>
                                Add cooked pasta to the skillet, tossing to coat with the sauce. If needed, add reserved pasta water to help the sauce coat the pasta.
                            </li>
                            <li>
                                Season with salt, black pepper, and red pepper flakes to taste.
                            </li>
                            <li>
                                Garnish with fresh chopped parsley before serving.
                            </li>
                        </Typography>
                    </Grid>
                </RecipeContent>
            </RecipeWrapper>
        </RecipeContainer>
    );
};
