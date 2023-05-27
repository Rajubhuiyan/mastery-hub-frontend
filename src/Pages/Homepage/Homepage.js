import React from 'react';
import Header from './Components/Header';
import { Box } from '@mui/material';

const Homepage = () => {
    return (
        <Box sx={{maxWidth:'100vw', }}> 
            <Header/>
        </Box>
    );
};

export default Homepage;