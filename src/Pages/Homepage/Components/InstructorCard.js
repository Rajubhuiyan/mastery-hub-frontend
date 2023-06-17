import { Box, Card, CardMedia, Typography } from '@mui/material';
import booKIcon from '../../../Assets/Images/Homepage/instructor-book-icon.svg';
import React, { memo } from 'react';

const InstructorCard = ({ instructor }) => {
    return (
        <Card sx={{
            borderRadius: 2,
            boxShadow:'0px 5px 13px 6px rgba(212, 211, 254, 0.23)',
            border:'1px solid #E9ECEF',
            cursor:'pointer',
            '&:hover':{
                boxShadow:'0px 5px 13px 6px rgba(212, 211, 254, 0.23)', 
            }
        }}>
            <CardMedia
                component="img"
                image={instructor.img}
                sx={{
                    height: 220,
                }}
            />
            <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{
                    color: '#002058',
                    fontSize:{xs:'1.4rem',xl:'1.5rem'},
                    fontWeight:600
                }}>
                    {instructor.name}
                </Typography>
                <Typography sx={{ color: '#685F78',fontSize:'0.9rem' }}>
                    Instructor
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <img style={{height:'1rem',width:'1rem'}} src={booKIcon} alt="book-icon" />
                    <Typography sx={{ color: '#685F78',fontSize:'0.9rem' }}>
                        {instructor.courses} Courses
                    </Typography> 
                </Box>
            </Box>
        </Card>
    );
};

export default memo(InstructorCard);