import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Cards from '../Cards/Cards';
import TextField from '@mui/material/TextField';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <Box>

            {/* Search, Filter  */}
            <NavBar />

            {/* Card Start  */}
            <Container sx={{ my: 5 }}>
                <Cards />
            </Container>
        </Box>
    );
};

export default Home;