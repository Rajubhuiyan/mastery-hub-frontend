import { Box, Card, CardMedia, Typography } from '@mui/material';
import calendarIcon from '../../../Assets/Images/Homepage/calendar-icon.svg';
import React, { memo } from 'react';

const LatestBlogCard = ({ blog }) => {
    return (
        <Card sx={{
            borderRadius: 2,
            boxShadow: '0px 5px 13px 6px rgba(212, 211, 254, 0.23)',
            border: '1px solid #E9ECEF',
            cursor: 'pointer',
            '&:hover': {
                boxShadow: '0px 5px 13px 6px rgba(212, 211, 254, 0.23)',
            }
        }}>
            <CardMedia
                component="img"
                image={blog.img}
                sx={{
                    height: 220,
                }}
            />
            <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{
                    color: '#002058',
                    fontSize: { xs: '1rem', xl: '1.2rem' },
                    fontWeight: 600
                }}>
                    {blog.name}
                </Typography>
                <Typography sx={{ color: '#685F78', fontSize: '0.8rem' }}>
                    {blog.type}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <img style={{ height: '1rem', width: '1rem' }} src={calendarIcon} alt="book-icon" />
                    <Typography sx={{ color: '#685F78', fontSize: '0.8rem' }}>
                        {
                            new Date(blog.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })

                        }
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default memo(LatestBlogCard);