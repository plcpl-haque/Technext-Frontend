import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Cards from '../Cards/Cards';

const Home = () => {
    return (
        <Box>
            <Container sx={{ my: 5 }}>
                <Cards />
            </Container>
        </Box>
    );
};

export default Home;