import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import rightImg from '../../../Assets/Images/Homepage/master-kill-right-img.png';
import masterCertified from '../../../Assets/Images/Homepage/master-certified.svg';
import masterCloud from '../../../Assets/Images/Homepage/master-cloud.svg';
import masterCourses from '../../../Assets/Images/Homepage/master-courses.svg';
import masterIns from '../../../Assets/Images/Homepage/master-ins.svg';



const MasterSkillData = [
    {
        id: 1,
        img: masterCertified,
        tittle: 'ContentStay motivated with engaging instructors',

    },
    {
        id: 2,
        img: masterCloud,
        tittle: 'Keep up with in the latest in cloud',
    },
    {
        id: 3,
        img: masterCourses,
        tittle: 'Get certified with 100+ certification courses',
    },
    {
        id: 4,
        img: masterIns,
        tittle: 'Build skills your way, from labs to courses',
    }


]

const MasterSkill = () => {
    return (
        <Container sx={{ backgroundColor: 'background.paper', pt: 10 }}>
            <Grid container>
                <Grid item xs={12} md={6.5}>
                    <Box>
                        <Typography sx={{ color: '#FF6575', fontWeight: 500 }}>
                            What’s New
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700, mt: 2, color: '#002058' }}>
                            Master the skills to drive your career
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 500, mt: 2, color: '#685F78', }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                            gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                        </Typography>
                        <Box sx={{ mt: {xs:1.5,md:2,lg:3,},pb:{md:6} }}>
                            <Grid container sx={{pb:{xs:2,md:0}}} spacing={{ xs: 1.5, md: 2 }} >
                                {
                                    MasterSkillData.map((item) => (
                                        <Grid item xs={12} sm={6} md={6} key={item.id}>
                                            <Card sx={{ p: { xs: 1.5, sm: 2, }, display: 'flex', gap: 1.5, alignItems: 'center', boxShadow: 'none', borderRadius: 3, border: '1px solid #E9ECEF' }}>
                                                <CardMedia
                                                    component="img"
                                                    image={item.img}
                                                    sx={{
                                                        height: { xs: 30, sm: 40, md: 50 },
                                                        width: { xs: 30, sm: 40, md: 50 },
                                                    }}
                                                />
                                                <Typography sx={{ color: '#685F78', fontSize: { xs: '0.7rem', lg: '0.9rem' }, fontWeight: 400 }}>
                                                    {item.tittle}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5.5}>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'end',
                        height: 1
                    }}>
                        <img style={{ height: 400 }} src={rightImg} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MasterSkill;