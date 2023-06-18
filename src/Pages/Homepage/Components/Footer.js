import { Box, Button, Container, Grid, InputAdornment, Stack, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LocationIcon from '../../../Assets/Images/Homepage/location-icon.svg'
import messageIcon from '../../../Assets/Images/Homepage/message-icon.svg'
import callIcon from '../../../Assets/Images/Homepage/call-icon.svg'


const EmailAddressInput = styled(TextField)({
    '&': {
        backgroundColor: 'white',
        borderRadius: '6px',
        border:'1px solid #e3e3e3'
    },

    '& .MuiInputBase-input': {
        fontSize: '0.8rem',
    },

    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
            display: 'none',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
            display: 'none'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
            display: 'none'
        },
    },
});

const Footer = () => {

    const forInstructorData = [
        {
            id: 1,
            name: 'Profile',
            link: '/profile'
        },
        {
            id: 2,
            name: 'Login',
            link: '/login'

        },
        {
            id: 3,
            name: 'Register',
            link: '/register'
        },
        {
            id: 4,
            name: 'Instructor',
            link: '/instructor'
        },
        {
            id: 5,
            name: 'Dashboard',
            link: '/dashboard'
        }
    ]
    const forStudentData = [
        {
            id: 1,
            name: 'Profile',
            link: '/profile'
        },
        {
            id: 2,
            name: 'Login',
            link: '/login'

        },
        {
            id: 3,
            name: 'Register',
            link: '/register'
        },
        {
            id: 4,
            name: 'Student',
            link: '/student'
        },
        {
            id: 5,
            name: 'Dashboard',
            link: '/dashboard'
        }
    ]

    return (
        <Box component="footer" sx={{ pt: { xs: 2, md: 9 }, pb: 5 }}>
            <Container >
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={5} md={4} lg={3}>
                        <Typography sx={{ color: '#685F78', mb: 1, fontSize: '0.8rem', }}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut consequat mauris Lorem
                            ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut consequat mauris
                        </Typography>
                        <Typography sx={{ color: '#685F78', fontSize: '0.8rem', }}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut consequat mauris Lorem
                            ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut consequat mauris
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={7} md={4} lg={5}>
                        <Box sx={{
                            display: 'flex',
                            gap: 1,

                        }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 500, color: '#002058' }}>
                                    For Instructor
                                </Typography>
                                <Stack spacing={2} mt={1}>
                                    {
                                        forInstructorData.map(data => (
                                            <Link style={{ textDecoration: 'none',width:'fit-content' }} key={data.id} to={data.link}>
                                                <Typography sx={{ color: '#685F78', fontSize: '0.9rem' }}>
                                                    {data.name}
                                                </Typography>

                                            </Link>
                                        ))
                                    }
                                </Stack>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 500, color: '#002058' }}>
                                    For Student
                                </Typography>
                                <Stack spacing={2} mt={1}>
                                    {
                                        forStudentData.map(data => (
                                            <Link style={{ textDecoration: 'none',width:'fit-content' }} key={data.id} to={data.link}>
                                                <Typography sx={{ color: '#685F78', fontSize: '0.9rem' }}>
                                                    {data.name}
                                                </Typography>

                                            </Link>
                                        ))
                                    }
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} lg={4}>
                        <Box sx={{
                            display: 'flex',
                            gap: 1,

                        }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, color: '#002058' }}>
                                    Address
                                </Typography>
                                <EmailAddressInput
                                    sx={{
                                        mt: 2, 
                                    }}
                                    placeholder='Enter your email address'
                                    size='medium'
                                    fullWidth
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>
                                            <Button size='small' variant='outlined' sx={{
                                                backgroundColor: '#FF6575',
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                border: '1px solid #FF6575 !important',
                                                '&:hover': {
                                                    color: '#FF6575'
                                                }
                                            }}>
                                                Submit
                                            </Button>
                                        </InputAdornment>
                                    }}
                                />

                                <Box sx={{
                                    mt: 2,
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'center',
                                     width:'fit-content'
                                }}>
                                    <img style={{
                                        height: '1.6rem',
                                        width: '1.6rem'
                                    }} src={LocationIcon} alt="" />
                                    <Typography sx={{ color: '#685F78', fontSize: '0.9rem' }}>
                                        Noakhali, Bangladesh
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 2,
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    width:'fit-content'
                                }}
                                    component='a'
                                    href='mailto:rajubhuiyaann@gmail.com'
                                >
                                    <img style={{
                                        height: '1.6rem',
                                        width: '1.6rem'
                                    }} src={messageIcon} alt="" />
                                    <Typography sx={{ color: '#685F78', fontSize: '0.9rem' }}>
                                        Rajubhuiyaann@gmail.com
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 2,
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    width:'fit-content'
                                }}
                                    component="a"
                                    href="tel:+8801602817341"
                                >
                                    <img style={{
                                        height: '1.6rem',
                                        width: '1.6rem'
                                    }} src={callIcon} alt="" />
                                    <Typography sx={{ color: '#685F78', fontSize: '0.9rem' }}>
                                        +8801602817341
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;