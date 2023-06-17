import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import headerRightImg from '../../../Assets/Images/Homepage/header-right-image.png';
import { Avatar, Card, IconButton, InputAdornment, Rating, TextField, Typography, styled } from '@mui/material';
import { ArrowForward, Search } from '@mui/icons-material';


const SearchTextField = styled(TextField)({
    '&': {
        backgroundColor: 'white',
        borderRadius: '30px'
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


const headerCardData = [
    {
        title: 'Online Courses',
        id: 1,
        img: 'https://i.ibb.co/0jZQYQH/online-courses.png',
        value: '10k'
    },
    {
        title: 'Online Courses',
        id: 2,
        img: 'https://i.ibb.co/0jZQYQH/online-courses.png',
        value: '10k'
    },
    {
        title: 'Online Courses',
        id: 3,
        img: 'https://i.ibb.co/0jZQYQH/online-courses.png',
        value: '10k'
    },
    {
        title: 'Online Courses',
        id: 4,
        img: 'https://i.ibb.co/0jZQYQH/online-courses.png',
        value: '10k'
    },
]

const Header = () => {
    return (
        <Container >
            <Box sx={{
                pt: { xs: 6, md: 9 },
                pb: { xs: 1.5, sm: 11, md: 11 },
                position: 'relative',
            }}>
                <Box>
                    <Typography color="#685F78" >
                        The Leader in Online Learning
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box>

                                <Typography sx={{
                                    color: '#002058',
                                    fontSize: { xs: '1.7rem', sm: '2.6rem', lg: '3.5rem' },
                                    fontWeight: 'bold',
                                    lineHeight: '1.2',
                                }}>
                                    Engaging &
                                    Accessible Online
                                    Courses For All
                                </Typography>
                            </Box>

                            {/* search bar */}
                            <Box sx={{
                                mt: 4
                            }}>
                                <SearchTextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <Search />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position='end' >
                                                <IconButton sx={{
                                                    color: 'white',
                                                    backgroundColor: '#FF6575',
                                                    '&:hover': {
                                                        backgroundColor: '#FF6575',
                                                    },
                                                }}>
                                                    <ArrowForward />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}

                                    fullWidth placeholder='Search School, Online eductional centers, etc' />
                            </Box>


                            {/* review */}

                            <Box sx={{
                                mt: 4
                            }}>
                                <Typography gutterBottom sx={{
                                    color: '#685F78',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    lineHeight: '1.2',
                                }}>
                                    Trusted by over 15K Users
                                </Typography>
                                <Typography sx={{
                                    color: '#685F78',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    lineHeight: '1.2',
                                }}>
                                    worldwide since 2022
                                </Typography>
                            </Box>

                            {/* rating */}
                            <Box sx={{
                                mt: 1,
                                display: 'flex',
                                gap: 3,
                                alignItems: 'center'
                            }}>
                                <Typography sx={{
                                    color: '#002058',
                                    fontSize: '2rem',
                                    fontWeight: '600'
                                }}>
                                    290+
                                </Typography>
                                <Typography sx={{
                                    color: '#002058',
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'center',
                                    fontSize: '2rem',
                                    fontWeight: '600'
                                }}>
                                    4.5
                                    <Rating size='small' name="read-only" value={4.5} readOnly />
                                </Typography>

                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box sx={{
                                height: { xs: 250, md: 450 },
                                display: 'flex',
                                justifyContent: 'center',
                                mt: { xs: 3, sm: 0 }
                            }}>
                                <img style={{
                                    width: 'auto',
                                    height: '100%',
                                }} src={headerRightImg} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{
                    position: { sm: 'absolute' },
                    width: '100%',
                    bottom: { xs: '-60px', sm: '-22px', md: '-33px' },
                    display: 'flex',
                    justifyContent: 'center',
                    mt: { xs: 5, sm: 0 }
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: { xs: '100%', lg: '80%' }
                    }}>
                        <Grid container spacing={{ xs: 1, md: 2 }}>
                            {
                                headerCardData.map((data) => (
                                    <Grid key={data.id} item xs={6} sm={3} md={3}>
                                        <Card sx={{
                                            p: { xs: 1, md: 2 },
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            boxShadow: 'none',
                                            border: '1px solid #E9ECEF',
                                        }}>
                                            <Avatar
                                                src={data.img}
                                                alt={data.title}
                                            />
                                            <Box>
                                                <Typography gutterBottom sx={{
                                                    color: '#002058',
                                                    fontWeight: '600',
                                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                                    lineHeight: '1'
                                                }} >
                                                    {data.value}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: { xs: '0.6rem', md: '0.8rem' }
                                                }}>
                                                    {data.title}
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>

            </Box>
        </Container>

    );
};

export default Header;