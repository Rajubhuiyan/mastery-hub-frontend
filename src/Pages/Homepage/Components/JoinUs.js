import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import joinUsImg from '../../../Assets/Images/Homepage/join-us-left-img.png';
import joinUsBg from '../../../Assets/Images/Homepage/jounus-bg.png';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const JoinUs = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${joinUsBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            backgroundColor: 'white',
            backgroundPosition: 'center',
        }}>
            <Container sx={{
                py: 10,
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <CardMedia component="img" sx={{ height: {xs:200,sm:300} }} image={joinUsImg} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography  sx={{ color: '#002058', fontWeight: 700,fontSize:{xs:'1.8rem',sm:'2.125rem'} }}>
                                Want to share your knowledge? Join  us a Mentor
                            </Typography>
                            <Typography sx={{ mt: 2, color: '#685F78', fontSize: '0.8rem' }}>
                                High-definition video is video of higher resolution and quality than
                                standard-definition. While there is no standardized meaning for high-
                                definition, generally any video.
                            </Typography>
                            <Typography sx={{ color: '#685F78', mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CheckCircleIcon fontSize='small' sx={{ color: '#FF6575', mt: '4px' }} /> Best Courses
                            </Typography>
                            <Typography sx={{ color: '#685F78', mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CheckCircleIcon fontSize='small' sx={{ color: '#FF6575', mt: '4px' }} /> Top rated Instructors
                            </Typography>
                            <Button sx={{
                                borderColor: '#B4A7F5',
                                color: '#392C7D',
                                borderRadius: '5rem',
                                fontSize: { xs: '0.7rem', md: '0.8rem' },
                                mt:3,
                                '&:hover': {
                                    backgroundColor: '#392C7D',
                                    color: 'white'
                                }
                            }} variant="outlined">
                                Read more
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default JoinUs;