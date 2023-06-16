import { Avatar, Box, Typography } from '@mui/material';
import React, { memo } from 'react';

const ReviewCard = ({ review }) => {
    return (
        <Box>
            <Typography sx={{ color: 'white',textAlign:'center',fontSize:'0.8rem' }}>
                {review.review}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 0.6, alignItems: 'center' }}>
                <Avatar
                 sx={{
                    height: 65,
                    width: 65,
                 }}
                    src={review.img}
                />
                <Typography sx={{color:'#002058',fontWeight:600,fontSize:'1.3rem'}}>
                    {review.name}
                </Typography>
                <Typography sx={{color:'#685F78',fontSize:'0.7rem',fontWeight:500}}>
                    {review.position}
                </Typography>
            </Box>
        </Box>
    );
};

export default memo(ReviewCard, (prev, next) => (
    prev.review.id === next.review.id
));