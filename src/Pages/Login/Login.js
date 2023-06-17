import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import rightImage from '../../Assets/Images/Login/right-image.svg';
import googleIcon from '../../Assets/Images/Login/google-icon.svg';
import { Link } from 'react-router-dom';

const Input = styled(TextField)({
    '&': {
        backgroundColor: 'white',
        borderRadius: '0.4rem',
        border: '1px solid #e3e3e3'
    },

    '& .MuiInputBase-input': {
        fontSize: '0.9rem',
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

const Login = () => {
    return (
        <Container>
            <Box sx={{ 
                minHeight:'100vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center', 
                py:5
            }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            height: '100%',
                            display: { xs: 'none', md: 'block' }
                        }}>
                            <img style={{ height: '100%', width: '100%' }} src={rightImage} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                height: '100%',
                                width: '100%',
                                maxWidth: {xs:400,md:500},
                                px: { md: 5 }
                            }}>
                                <Typography gutterBottom sx={{ color: '#1A1439', fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 600, textAlign: 'center' }}>
                                    Welcome Back 👋
                                </Typography>
                                <Typography sx={{ color: 'rgba(26, 20, 57, 0.68)', fontSize: { xs: '0.8rem', md: '0.9rem' }, textAlign: 'center' }}>
                                    Clarity gives you the blocks and components you need to create a truly professional website.
                                </Typography>
                                <Button sx={{
                                    mt: 3, backgroundColor: '#F0F0F0', color: 'black', width: 1,
                                    height: { xs: 40, md: 50 },
                                    borderRadius: '10rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#F0F0F0',
                                    }
                                }}>
                                    <img style={{ marginRight: '10px' }} src={googleIcon} alt="" /> Sign in with Google
                                </Button>


                                <Typography sx={{
                                    color: '#635F78',
                                    mt: 5,
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    Email Address
                                </Typography>
                                <Input
                                    sx={{
                                        mt: 2,
                                        '& .MuiOutlinedInput-input': {
                                            p: { xs: '11.5px 14px', md: '16.5px 14px' }
                                        }
                                    }}
                                    placeholder='Enter your email address'
                                    fullWidth
                                />
                                <Typography sx={{
                                    color: '#635F78',
                                    mt: 3,
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    Password
                                </Typography>
                                <Input
                                    sx={{
                                        mt: 2,
                                        '& .MuiOutlinedInput-input': {
                                            p: { xs: '11.5px 14px', md: '16.5px 14px' }
                                        }
                                    }} 

                                    placeholder='Enter your password'
                                    type='password'
                                    fullWidth
                                />

                                <Stack sx={{ mt: 2 }} direction="row" alignItems="center" justifyContent="space-between">
                                    <FormControlLabel sx={{

                                        '& .MuiFormControlLabel-label': {
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            color: '#6e6e6e',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: '1.1rem'
                                        }

                                    }} control={<Checkbox size='small' />} label="Remembered me" />
                                    <Link style={{ textDecoration: 'none' }} to="/forget-password">
                                        <Typography sx={{ color: '#F66962', fontSize: '0.9rem', fontWeight: 500 }}>
                                            Forgot Password?
                                        </Typography>
                                    </Link>
                                </Stack>

                                <Button sx={{
                                    mt: 7, backgroundColor: '#F66962', color: 'white', width: 1,
                                    height: { xs: 40, md: 50 },
                                    borderRadius: '10rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#F66962',
                                    }
                                }}>
                                    Login
                                </Button>


                                <Typography sx={{
                                    fontSize: '0.9rem',
                                    mt: 3,
                                    mb: 1
                                }}>
                                    Don't have an account? {' '}
                                    <Link style={{
                                        color: '#F66962',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                    }}
                                    to="/signup"
                                    >
                                        Create free account
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;