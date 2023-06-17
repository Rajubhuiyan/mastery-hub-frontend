import { Box, Button,  Container,  Grid,  TextField, Typography, styled } from '@mui/material';
import React from 'react';
import graduateCapIcon from '../../Assets/Images/graduate-cap-icon.svg';
import { Link, useParams } from 'react-router-dom';

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

const ResetPassword = () => {


    const { token } = useParams()


    return (
        <Container>
            <Box sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 5
            }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>




                            <Box sx={{
                                height: '100%',
                                width: '100%',
                                maxWidth: { xs: 400, md: 500 },
                                px: { md: 5 }
                            }}>

                                <Box sx={{
                                    textAlign: 'center',
                                    mb: { xs: 7, sm: 9, lg: 10 }
                                }}>
                                    <Link to="/">
                                        <img src={graduateCapIcon} alt="" />
                                    </Link>
                                    <Typography sx={{ fontSize: '1.8rem', fontWeight: 600, color: '#F66962' }}>
                                        MasteryHub
                                    </Typography>
                                </Box>

                                <Typography gutterBottom sx={{ color: '#1A1439', fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 600, textAlign: 'center' }}>
                                    Change Password
                                </Typography>
                                <Typography sx={{ color: 'rgba(26, 20, 57, 0.68)', fontSize: { xs: '0.8rem', md: '0.9rem' }, textAlign: 'center' }}>
                                    Please enter your password and keep it safe.
                                </Typography>



                                <Typography sx={{
                                    color: '#635F78',
                                    mt: 5,
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    Password*
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
                                    mt: 2,
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    Confirm Password*
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





                                <Button sx={{
                                    mt: 7, backgroundColor: '#F66962', color: 'white', width: 1,
                                    height: { xs: 40, md: 50 },
                                    borderRadius: '10rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#F66962',
                                    }
                                }}>
                                    Change Password
                                </Button>


                                <Typography sx={{
                                    fontSize: '0.9rem',
                                    mt: 3,
                                    mb: 1,
                                    textAlign: 'center',
                                }}>
                                    Take me to {' '}
                                    <Link style={{
                                        color: '#F66962',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                    }}
                                        to="/login"
                                    >
                                        Login
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

export default ResetPassword;