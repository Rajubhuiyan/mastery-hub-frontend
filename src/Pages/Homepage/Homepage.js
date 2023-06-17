import React from 'react';
import Header from './Components/Header';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import HeaderBg from '../../Assets/Images/Homepage/header-background.png';
import TopCategory from './Components/TopCategory';
import FeaturedCourses from './Components/FeaturedCourses';
import MasterSkill from './Components/MasterSkill';
import trendingCourseBg from '../../Assets/Images/Homepage/trending-course-bg.png';
import TrendingCourse from './Components/TrendingCourse';
import FeaturedInstructors from './Components/FeaturedInstructors';
import TrustedBy from './Components/TrustedBy';
import JoinUs from './Components/JoinUs';
import Footer from './Components/Footer';
import LatestBlog from './Components/LatestBlog';
import Review from './Components/Review';

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
            <MasterSkill />

            <Box sx={{
                backgroundImage: `url(${trendingCourseBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                backgroundColor: 'white',
                backgroundPosition: 'center',
            }}>
                <TrendingCourse />
                <FeaturedInstructors />
            </Box>

            <TrustedBy />
            <JoinUs/>

            <Review/>

            <Box sx={{
                backgroundImage: `url(${trendingCourseBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                backgroundColor: 'white',
                backgroundPosition: 'center',
                py:4
            }}>
                <LatestBlog/>
            </Box>
            <Footer/>

        </Box>
    );
};

export default Homepage;