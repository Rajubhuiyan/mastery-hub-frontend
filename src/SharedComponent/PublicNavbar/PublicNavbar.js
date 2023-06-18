import { Container } from '@mui/material';
import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const drawerWidth = 240;
const navItems = [
    {
        name: 'Home',
        path: '/',
        id: 1,
        child: [
        ]
    },
    {
        name: 'About Us',
        path: 'about-us',
        id: 2,
        child: [
        ]
    },
    // {
    //     name: 'Instructors',
    //     path: 'instructors',
    //     id: 3,
    //     child: [
    //     ]
    // },
    // {
    //     name: 'Students',
    //     path: 'students',
    //     id: 4,
    //     child: [
    //     ]
    // },
    // {
    //     name: 'Pages',
    //     path: 'pages',
    //     id: 5,
    //     child: [
    //     ]
    // },
    {
        name: 'Blog',
        path: 'blog',
        id: 6,
        child: [
        ]
    },
    {
        name: 'Contact Us',
        path: 'contact-us',
        id: 7,
        child: [
        ]
    },

];

const PublicNavbar = () => {

    const location = useLocation();
    const {t} = useTranslation()

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography

                variant="h6" sx={{ mt: 1.5, mb: 0.5 }}>
                <Box
                    component={Link}
                    to="/"
                    onClick={handleDrawerToggle}
                >
                    <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.5926 14.8892V22.0376C36.5926 23.0817 36.1019 24.0521 35.2942 24.5993C34.6151 25.0594 33.701 25.6456 32.6204 26.2565V14.8892H36.5926Z" fill="#FF4667" />
                        <path d="M32.4177 14.8892V26.3066C29.5058 27.9639 25.394 29.8014 21.4909 29.8014C16.1414 29.8014 10.3998 26.3481 7.89024 24.6427C7.08245 24.0934 6.59192 23.119 6.59192 22.0707V14.8892H32.4177Z" fill="#FF4667" />
                        <path d="M36.3945 14.7399V21.7215C36.3945 22.7446 35.9041 23.695 35.0964 24.2306C32.5871 25.8947 26.8457 29.2639 21.4957 29.2639C16.1458 29.2639 10.4045 25.8947 7.89508 24.2306C7.08751 23.695 6.59684 22.7446 6.59684 21.7215V14.7399H36.3945ZM37.2054 13.9282H36.3945H6.59695H5.78613V14.7399V21.7215C5.78613 23.0264 6.40712 24.2174 7.4473 24.9072C8.76938 25.7839 10.8593 27.0522 13.3074 28.1157C16.3007 29.4163 19.0556 30.0756 21.4957 30.0756C23.9358 30.0756 26.6907 29.4163 29.6842 28.1157C32.1321 27.0522 34.2219 25.7839 35.5441 24.9072C36.5842 24.2174 37.2054 23.0264 37.2054 21.7215V14.7399V13.9282Z" fill="#FF4667" />
                        <path d="M32.0421 27.9624C31.283 28.0543 30.584 28.421 30.0762 28.9933C29.5688 29.5659 29.2883 30.3044 29.2875 31.0697V33.831C29.2875 34.9503 29.8838 35.9849 30.8526 36.5446C31.8213 37.1045 33.0146 37.1045 33.9831 36.5446C34.9518 35.9849 35.5485 34.9503 35.5485 33.831V31.0697C35.5476 30.3044 35.2669 29.5659 34.7594 28.9933C34.2519 28.421 33.5526 28.0543 32.7936 27.9624" fill="#392C7D" />
                        <path d="M34.7967 31.4381H30.0389V31.1033C30.0389 29.7882 31.1041 28.7222 32.4177 28.7222C33.7315 28.7222 34.7967 29.7885 34.7967 31.1033V31.4381Z" fill="white" />
                        <path d="M32.4177 15.7632V31.9661" stroke="#392C7D" />
                        <path d="M40.4248 13.8144L22.4057 22.4016C21.7989 22.6907 21.0941 22.69 20.4878 22.3995L2.37031 13.7193C0.690674 12.9145 0.681756 10.5242 2.35531 9.70682L20.463 0.863805C21.0831 0.56096 21.8085 0.563092 22.4269 0.869587L40.4559 9.80583C42.121 10.6312 42.1026 13.015 40.4248 13.8144Z" fill="#392C7D" />
                        <path d="M21.4391 1.01159C21.6875 1.01159 21.9357 1.0672 22.164 1.17842L40.6199 10.1639C41.8419 10.7588 41.8283 12.4772 40.5972 13.0536L22.1486 21.6894C21.9265 21.7934 21.6864 21.8454 21.4464 21.8454C21.2052 21.8454 20.9642 21.793 20.7412 21.688L2.19453 12.9598C0.961866 12.3797 0.955378 10.6566 2.18348 10.0674L20.7228 1.17423C20.9489 1.0658 21.1941 1.01159 21.4391 1.01159ZM21.4391 0.214355C21.0697 0.214355 20.6992 0.298564 20.3673 0.457712L1.82803 9.35089C0.977776 9.75879 0.451854 10.5899 0.455401 11.52C0.458949 12.4501 0.991157 13.2773 1.84445 13.6789L20.391 22.407C20.7185 22.5611 21.0834 22.6425 21.4463 22.6425C21.8075 22.6425 22.1709 22.5618 22.4971 22.4091L40.9455 13.7733C41.7978 13.3743 42.332 12.5499 42.3393 11.6217C42.3466 10.6936 41.8256 9.86123 40.9796 9.44936L22.5238 0.463989C22.1884 0.300655 21.8133 0.214355 21.4391 0.214355Z" fill="#392C7D" />
                    </svg>
                </Box>

            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={handleDrawerToggle} component={Link} to={item.path} sx={{ color: location.pathname === item.path ? '#FF6575' : '#685F78', textAlign: 'center' }} >
                            <ListItemText primary={t(item.name)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Container >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ position: 'static', backgroundColor: 'transparent', boxShadow: 'none' }} >
                    <Toolbar sx={{px:0}}>
                        <Box sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: { xs: 1 }
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{  display: { md: 'none' }, color: 'black',p:0.2 }}
                                size='small'
                            >
                                <MenuIcon fontSize="small" />
                            </IconButton>
                            <Box sx={{
                                display: { xs: 'flex', },
                                alignItems: 'center',
                                gap: 0.7

                            }}>
                                <LanguageSwitcher/>
                                <Button sx={{
                                     backgroundColor: 'white',
                                     color: location.pathname === '/login' ? '#FF6575' : '#685F78',
                                     borderRadius: '3rem',
                                     textTransform: 'none',
                                     width: 80,
                                     whiteSpace: 'nowrap',
                                     borderColor: location.pathname === '/login' ? '#FF6575' :  '#ebe6e6',
                                     '&:hover': {
                                         backgroundColor: '#392C7D',
                                         color: 'white'
                                     },
                                     fontSize:'0.7rem',
                                     height:30
                                }}
                                    component={Link}
                                    to="/login"
                                    variant='outlined'
                                    size='small'
                                >
                                    {t("Login")}
                                </Button>
                                <Button variant='outlined' sx={{
                                     color: location.pathname === '/register' ? '#FF6575' : '#4C2BEF',
                                     borderRadius: '3rem',
                                     textTransform: 'none',
                                     width: 80,
                                     whiteSpace: 'nowrap',
                                     borderColor: location.pathname === '/register' ? '#FF6575' : '#4C2BEF',
                                     '&:hover': {
                                         backgroundColor: '#392C7D',
                                         color: 'white'
                                     },
                                     fontSize:'0.7rem',
                                     height:30
                                }}
                                    component={Link}
                                    to="/register"
                                    size='small'
                                >
                                    {t("Register")}
                                </Button>
                            </Box>
                        </Box>
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5926 14.8892V22.0376C36.5926 23.0817 36.1019 24.0521 35.2942 24.5993C34.6151 25.0594 33.701 25.6456 32.6204 26.2565V14.8892H36.5926Z" fill="#FF4667" />
                                <path d="M32.4177 14.8892V26.3066C29.5058 27.9639 25.394 29.8014 21.4909 29.8014C16.1414 29.8014 10.3998 26.3481 7.89024 24.6427C7.08245 24.0934 6.59192 23.119 6.59192 22.0707V14.8892H32.4177Z" fill="#FF4667" />
                                <path d="M36.3945 14.7399V21.7215C36.3945 22.7446 35.9041 23.695 35.0964 24.2306C32.5871 25.8947 26.8457 29.2639 21.4957 29.2639C16.1458 29.2639 10.4045 25.8947 7.89508 24.2306C7.08751 23.695 6.59684 22.7446 6.59684 21.7215V14.7399H36.3945ZM37.2054 13.9282H36.3945H6.59695H5.78613V14.7399V21.7215C5.78613 23.0264 6.40712 24.2174 7.4473 24.9072C8.76938 25.7839 10.8593 27.0522 13.3074 28.1157C16.3007 29.4163 19.0556 30.0756 21.4957 30.0756C23.9358 30.0756 26.6907 29.4163 29.6842 28.1157C32.1321 27.0522 34.2219 25.7839 35.5441 24.9072C36.5842 24.2174 37.2054 23.0264 37.2054 21.7215V14.7399V13.9282Z" fill="#FF4667" />
                                <path d="M32.0421 27.9624C31.283 28.0543 30.584 28.421 30.0762 28.9933C29.5688 29.5659 29.2883 30.3044 29.2875 31.0697V33.831C29.2875 34.9503 29.8838 35.9849 30.8526 36.5446C31.8213 37.1045 33.0146 37.1045 33.9831 36.5446C34.9518 35.9849 35.5485 34.9503 35.5485 33.831V31.0697C35.5476 30.3044 35.2669 29.5659 34.7594 28.9933C34.2519 28.421 33.5526 28.0543 32.7936 27.9624" fill="#392C7D" />
                                <path d="M34.7967 31.4381H30.0389V31.1033C30.0389 29.7882 31.1041 28.7222 32.4177 28.7222C33.7315 28.7222 34.7967 29.7885 34.7967 31.1033V31.4381Z" fill="white" />
                                <path d="M32.4177 15.7632V31.9661" stroke="#392C7D" />
                                <path d="M40.4248 13.8144L22.4057 22.4016C21.7989 22.6907 21.0941 22.69 20.4878 22.3995L2.37031 13.7193C0.690674 12.9145 0.681756 10.5242 2.35531 9.70682L20.463 0.863805C21.0831 0.56096 21.8085 0.563092 22.4269 0.869587L40.4559 9.80583C42.121 10.6312 42.1026 13.015 40.4248 13.8144Z" fill="#392C7D" />
                                <path d="M21.4391 1.01159C21.6875 1.01159 21.9357 1.0672 22.164 1.17842L40.6199 10.1639C41.8419 10.7588 41.8283 12.4772 40.5972 13.0536L22.1486 21.6894C21.9265 21.7934 21.6864 21.8454 21.4464 21.8454C21.2052 21.8454 20.9642 21.793 20.7412 21.688L2.19453 12.9598C0.961866 12.3797 0.955378 10.6566 2.18348 10.0674L20.7228 1.17423C20.9489 1.0658 21.1941 1.01159 21.4391 1.01159ZM21.4391 0.214355C21.0697 0.214355 20.6992 0.298564 20.3673 0.457712L1.82803 9.35089C0.977776 9.75879 0.451854 10.5899 0.455401 11.52C0.458949 12.4501 0.991157 13.2773 1.84445 13.6789L20.391 22.407C20.7185 22.5611 21.0834 22.6425 21.4463 22.6425C21.8075 22.6425 22.1709 22.5618 22.4971 22.4091L40.9455 13.7733C41.7978 13.3743 42.332 12.5499 42.3393 11.6217C42.3466 10.6936 41.8256 9.86123 40.9796 9.44936L22.5238 0.463989C22.1884 0.300655 21.8133 0.214355 21.4391 0.214355Z" fill="#392C7D" />
                            </svg>

                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center' }, flexGrow: 1,ml:'60px' }}>
                            {navItems.map((item) => (
                                <Button component={Link} to={item.path} key={item.id} sx={{ color: location.pathname === item.path ? '#FF6575' : '#685F78' }}>
                                    {t(item.name)}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 1

                        }}>
                            <LanguageSwitcher/>
                            <Button sx={{
                                backgroundColor: 'white',
                                color: location.pathname === '/login' ? '#FF6575' : '#685F78',
                                borderRadius: '3rem',
                                textTransform: 'none',
                                width: 95,
                                height:35,
                                fontSize:'0.8125rem',
                                whiteSpace: 'nowrap',
                                borderColor: location.pathname === '/login' ? '#FF6575' :  '#ebe6e6',
                                '&:hover': {
                                    backgroundColor: '#392C7D',
                                    color: 'white'
                                }

                            }}
                                component={Link}
                                to="/login"
                                variant='outlined'
                            >
                                {t("Login")}
                            </Button>
                            <Button variant='outlined' sx={{
                                color: location.pathname === '/register' ? '#FF6575' : '#4C2BEF',
                                borderRadius: '3rem',
                                textTransform: 'none',
                                width: 95,
                                whiteSpace: 'nowrap',
                                height:35,
                                fontSize:'0.8125rem',
                                borderColor: location.pathname === '/register' ? '#FF6575' : '#4C2BEF',
                                '&:hover': {
                                    backgroundColor: '#392C7D',
                                    color: 'white'
                                }
                            }}
                                component={Link}
                                to="/register" 
                            >
                                {t("Register")}
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box>
        </Container>
    );
};

export default PublicNavbar;