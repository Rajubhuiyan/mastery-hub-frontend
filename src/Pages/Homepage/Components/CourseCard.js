import { FavoriteBorder } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardMedia, Divider, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, Rating, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import bookIcon from '../../../Utilities/Images/Homepage/course-book-icon.svg';
import clockIcon from '../../../Utilities/Images/Homepage/course-clock-icon.svg';
function convertHourToMinutesOrHours(hour) {
    if (hour >= 1) {
        return Math.floor(hour) + " hours";
    } else {
        var minutes = Math.round(hour * 60);
        return minutes + " minutes";
    }
}
const CourseCard = ({ course }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>

            <Card sx={{
                borderRadius: 2,
                p: { xs: 1.5, sm: 2 },
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: '1px 1px 20px #ddd3d3',
                },
                cursor: 'pointer'
            }}>
                <Box sx={{
                    position: 'relative',
                }}>
                    <CardMedia
                        component="img"
                        image={course.image}
                        sx={{
                            height: 200,
                            borderRadius: 2
                        }}
                    />
                    <Box sx={{
                        backgroundColor: 'white', position: 'absolute', bottom: 10, right: 10,
                        padding: '0px 8px',
                        borderRadius: '6px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography sx={{ color: '#159F46', fontWeight: 500 }}>
                            {course.price.amount === 0 ? 'Free' : `$${course.price.amount}`}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 1 }}>
                    <ListItem sx={{
                        px: 0,
                        '& .MuiListItemText-primary': {
                            color: '#002058',
                        },
                        '& .MuiListItemText-secondary': {
                            fontSize: '0.8rem',
                            color: '#685F78'
                        }
                    }}>
                        <ListItemAvatar>
                            <Avatar src={course.instructor.image} />
                        </ListItemAvatar>
                        <ListItemText primary={course.instructor.name} secondary="Instructor" />
                        <IconButton sx={{ p: 0 }} size='small'>
                            <FavoriteBorder sx={{ color: '#FF6575' }} />
                        </IconButton>
                    </ListItem>
                    <Typography sx={{ color: '#002058', fontWeight: 500 }}>
                        {course.name}
                    </Typography>

                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                        <Stack spacing={1} direction="row" alignItems="center">
                            <img style={{ height: '1.3rem', width: '1.3rem' }} src={bookIcon} alt="" />
                            <Typography sx={{ fontSize: '0.8rem', color: '#685F78' }}>
                                {course.total_lessons} Lessons
                            </Typography>
                        </Stack>
                        <Stack spacing={1} direction="row" alignItems="center">
                            <img style={{ height: '1.3rem', width: '1.3rem' }} src={clockIcon} alt="" />
                            <Typography sx={{ fontSize: '0.8rem', color: '#685F78' }}>
                                {convertHourToMinutesOrHours(course.course_hours)}
                            </Typography>
                        </Stack>
                    </Box>
                    <Divider sx={{ my: 1.5 }} />

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Rating readOnly precision={0.5}  size='small' value={course.rating} />
                        <Button sx={{
                            borderColor: '#B4A7F5',
                            color: '#392C7D',
                            borderRadius: '5rem',
                            fontSize: { xs: '0.6rem', md: '0.7rem' },
                            '&:hover': {
                                backgroundColor: '#392C7D',
                                color: 'white'
                            }
                        }} variant="outlined">
                            Buy Now
                        </Button>
                    </Box>
                </Box>
            </Card>

        </Grid>
    );
};

export default memo(CourseCard);