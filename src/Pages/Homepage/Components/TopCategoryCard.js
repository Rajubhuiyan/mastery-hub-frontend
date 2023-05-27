import { Card, CardMedia, Typography } from '@mui/material';
import React, { memo } from 'react';
import {  useNavigate } from 'react-router-dom'; 

const TopCategoryCard = ({ category }) => {
    const navigate = useNavigate()
    return (

        <Card onClick={() => {
            navigate(category.link)
        }} sx={{
            p: { xs: 1, md: 2 },
            border: '1px solid #E9ECEF',
            boxShadow: '-11.729px -11.729px 32px rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            cursor: 'pointer'
        }}>
            <CardMedia sx={{
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                objectFit: 'cover'
            }} component="img" image={category.image} />
            <Typography sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 500,
                color: '#002058',
                textAlign: 'center',
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }}>
                {category.title}
            </Typography>

            <Typography sx={{
                fontSize: { xs: '0.7rem', md: '0.9rem' },
                fontWeight: 500,
                color: '#685F78',
                textAlign: 'center',
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}>
                {category.coursesLength} Courses
            </Typography>

        </Card>
    );
};

export default memo(TopCategoryCard, (p, n) => (p.category.id === n.category.id));