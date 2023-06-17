import { Box, Button, Container, Grid, Typography } from '@mui/material';
import featuredCrBg from '../../../Assets/Images/Homepage/featured-courses-bg.png'
import featuredPsuedo from '../../../Assets/Images/Homepage/featured-courses-psuedo.png'
import React from 'react';
import CourseCard from './CourseCard';


const coursesData = [
    {
        "id": "course1",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course2",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course3",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course4",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course5",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course6",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course7",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
    {
        "id": "course8",
        "image": "https://i.ibb.co/y5RvKRc/div-product-img-1.png",
        "price": {
            "amount": 29.99,
            "currency": "USD"
        },
        "name": "Web Development 101",
        "total_lessons": 20,
        "rating": 4.5,
        "course_hours": 12,
        "instructor": {
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "name": "John Smith"
        }
    },
]



const FeaturedCourses = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${featuredCrBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundColor: '#272727',
            mt: 10

        }}>
            <Box sx={{
                backgroundImage: `url(${featuredPsuedo})`,
                height: 1,
                width: 1,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>


                <Container sx={{
                    pt: 5,
                    pb: 8
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Box>
                            <Typography sx={{
                                color: '#FF6575',
                            }}>
                                What’s New
                            </Typography>

                            <Typography sx={{
                                color: '#002058',
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                fontWeight: 500,
                                mt: 2
                            }}>
                                Featured Courses
                            </Typography>

                        </Box>
                        <Button sx={{
                            borderColor: '#B4A7F5',
                            color: '#392C7D',
                            borderRadius: '5rem',
                            fontSize: { xs: '0.7rem', md: '0.8rem' },
                            '&:hover': {
                                backgroundColor: '#392C7D',
                                color: 'white'
                            }
                        }} variant="outlined">
                            All Courses
                        </Button>
                    </Box>


                    {/* courses */}


                    <Box sx={{ mt: 4 }}>
                        <Grid container spacing={1.3}>
                            {
                                coursesData.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))
                            }
                        </Grid>
                    </Box>

                </Container>

            </Box>
        </Box>
    );
};

export default FeaturedCourses;