import React from 'react';
import Header from './Components/Header';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import HeaderBg from '../../Utilities/Images/Homepage/header-background.png';
import TopCategory from './Components/TopCategory';
import FeaturedCourses from './Components/FeaturedCourses';

const Homepage = () => {
    return (
        <Box sx={{ maxWidth: '100vw', mb: 5 }}>
            <Box sx={{
                backgroundImage: `url(${HeaderBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // height: '100vh',
                width: '100%',
                backgroundColor: 'white',
                backgroundPosition: 'center',
                mb: { xs: '80px', md: '50px' }
            }}>
                <Navbar />
                <Header />
            </Box>
            <TopCategory />
            <FeaturedCourses />
        </Box>
    );
};

export default Homepage;