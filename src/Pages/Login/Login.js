import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import rightImage from '../../Assets/Images/Login/right-image.svg';
import googleIcon from '../../Assets/Images/Login/google-icon.svg';
import { Link } from 'react-router-dom';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import MasteryCustomInput from '../../SharedComponent/CustomComponents/MasteryCustomInput';
import PublicNavbar from '../../SharedComponent/PublicNavbar/PublicNavbar';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setLoggedUserData } from '../../Redux/LoggedUser/loggedUserReducer';


const schema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required").min(8, "Password is too short - should be 8 chars minimum.")
});

const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();



    const defaultValues = {
        email: "",
        password: "",
        rememberMe: false
    }

    const { handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues
    });
    const handleLogin = (data) => {
        console.log(data)
    };



    const dispatch = useDispatch()



    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log({
                    token, user
                })

                const userData = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid,
                    accessToken: user.accessToken,
                    role: 'ROLE_ADMIN'
                }


                sessionStorage.setItem('userInfo', JSON.stringify(userData))

                dispatch(setLoggedUserData(userData))


            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

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
                    onSubmit={handleSubmit(handleLogin)}
                >
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
                                    maxWidth: { xs: 400, md: 500 },
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
                                    }}
                                        onClick={handleGoogleLogin}
                                    >
                                        <img style={{ marginRight: '10px' }} src={googleIcon} alt="" /> Sign in with Google
                                    </Button>


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

                                    <Typography sx={{
                                        color: '#635F78',
                                        mt: 3,
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}>
                                        Password*
                                    </Typography>

                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field: { ref, ...field }, fieldState }) => (
                                            <MasteryCustomInput
                                                sx={{
                                                    mt: 2,
                                                    '& .MuiOutlinedInput-input': {
                                                        p: { xs: '11.5px 14px', md: '16.5px 14px' }
                                                    }
                                                }}
                                                placeholder='Enter your password'
                                                type='password'
                                                fullWidth
                                                {...field}
                                                inputRef={ref}
                                                error={!!errors.password}
                                                helperText={errors?.password?.message}
                                            />
                                        )}
                                    />


                                    <Stack sx={{ mt: 2 }} direction="row" alignItems="center" justifyContent="space-between">

                                        <Controller
                                            name="rememberMe"
                                            control={control}
                                            render={({ field: { ref, ...field }, fieldState }) => (
                                                <FormControlLabel sx={{

                                                    '& .MuiFormControlLabel-label': {
                                                        fontSize: '0.9rem',
                                                        fontWeight: 500,
                                                        color: '#6e6e6e',
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: '1.1rem'
                                                    }

                                                }} control={<Checkbox checked={field.value} onChange={field.onChange} size='small' />} label="Remembered me" />
                                            )}
                                        />

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
                                    }}
                                        type='submit'
                                    >
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
                                            to="/register"
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
        </>
    );
};

export default Login;