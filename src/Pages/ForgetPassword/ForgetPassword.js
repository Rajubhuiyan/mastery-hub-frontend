import { Box, Button, Container, Grid, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import graduateCapIcon from '../../Assets/Images/graduate-cap-icon.svg';
import { Link } from 'react-router-dom';
import MasteryCustomInput from '../../SharedComponent/CustomComponents/MasteryCustomInput';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PublicNavbar from '../../SharedComponent/PublicNavbar/PublicNavbar';


const schema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),

});

const ForgetPassword = () => {


    const defaultValues = {
        email: ""
    }

    const { handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues
    });
    const handleResetLinkSent = (data) => {
        console.log(data)
    };

    return (
        <>
            <PublicNavbar />
            <Container>
                <Box sx={{
                    minHeight: `calc(100vh - 64px)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pb: 2
                }}
                    component="form"
                    onSubmit={handleSubmit(handleResetLinkSent)}
                >
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
                                        Forget Password?
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(26, 20, 57, 0.68)', fontSize: { xs: '0.8rem', md: '0.9rem' }, textAlign: 'center' }}>
                                        Please enter your email below to get the password reset link.
                                    </Typography>



                                    <Typography sx={{
                                        color: '#635F78',
                                        mt: 5,
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}>
                                        Email Address*
                                    </Typography>

                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field: { ref, ...field }, fieldState }) => (
                                            <MasteryCustomInput
                                                sx={{
                                                    mt: 2,
                                                    '& .MuiOutlinedInput-input': {
                                                        p: { xs: '11.5px 14px', md: '16.5px 14px' }
                                                    }
                                                }}
                                                placeholder='Enter your email address'
                                                fullWidth
                                                {...field}
                                                inputRef={ref}
                                                error={!!errors.email}
                                                helperText={errors?.email?.message}
                                            />
                                        )}
                                    />






                                    <Button sx={{
                                        mt: 7, backgroundColor: '#F66962', color: 'white', width: 1,
                                        height: { xs: 40, md: 50 },
                                        borderRadius: '10rem',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#F66962',
                                        }
                                    }}
                                        type='submit'
                                    >
                                        Send Reset Code
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
        </>
    );
};

export default ForgetPassword;