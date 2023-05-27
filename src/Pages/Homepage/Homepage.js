import React from 'react';
import Header from './Components/Header';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import HeaderBg from '../../Utilities/Images/Homepage/header-background.png';

const Homepage = () => {
    return (
        <Box sx={{ maxWidth: '100vw', }}>
            <Box sx={{
                backgroundImage: `url(${HeaderBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // height: '100vh',
                width: '100%',
                backgroundColor: 'white',
                backgroundPosition: 'center',
                mb:{xs:'100px',md:'50px'}
            }}>
                <Navbar />
                <Header />
            </Box>
        </Box>
    );
};

export default Homepage;