import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import LatestBlogCard from './LatestBlogCard';


const latestBlogData = [
    {
        id: 1,
        name: 'Expand Your Career  Opportunities With Python',
        type: 'Courses',
        date: new Date(),
        img: "https://i.ibb.co/VSGfmVz/div-instructors-img-1.png"
    },
    {
        id: 2,
        name: 'Learn Webs Applications Development from Experts',
        type: 'Education', 
        date: new Date(),
        img: "https://i.ibb.co/5kps1W3/div-instructors-img.png"
    },
    {
        id: 3,
        name: 'Complete PHP Programming Career',
        type: 'Business',
        date: new Date(),
        img: "https://i.ibb.co/VSGfmVz/div-instructors-img-1.png"
    },
    {
        id: 4,
        name: 'Programming Content Guideline For Beginners',
        type: 'Cyber Security',
        date: new Date(),
        img: "https://i.ibb.co/5kps1W3/div-instructors-img.png"
    },
    {
        id: 5,
        name: 'Advance Python Programming Course',
        type: 'Programming',
        date: new Date(),
        img: "https://i.ibb.co/5kps1W3/div-instructors-img.png"
    },
    
]

const LatestBlog = () => {
    return (
        <Container>
            <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                <Typography sx={{
                    color: '#002058',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 500,
                    mt: 2,
                }}>
                    Lastest Blog
                </Typography>
                <Typography sx={{ fontWeight: 500, mt: 2, color: '#685F78', fontSize: '0.75rem', width: { xs: 1, md: '50%' } }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                    gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                </Typography>
            </Box>
            <Box sx={{
                mt: 3,
                '& .swiper-pagination-bullet-active': {
                    backgroundColor: '#FF6575 !important',
                    width: '28px !important',
                    height: '10px !important',
                    borderRadius: '10px !important'
                },
                '& .swiper-pagination-bullet': {
                    height: '10px',
                    width: '10px',
                    transitionDuration: '0.4s'
                },

            }}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    style={{
                        paddingBottom: '60px'
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        latestBlogData.map((blog, i) => (
                            <SwiperSlide key={blog.id}>
                                <LatestBlogCard
                                    blog={blog}
                                />
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </Box>
        </Container>
    );
};

export default LatestBlog;