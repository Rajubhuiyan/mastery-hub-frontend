import { Box, Button, Card, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopCategoryCard from './TopCategoryCard';
import { Pagination, Autoplay } from 'swiper';


const TopCategoryData = [
    {
        title: 'Web Development',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 1,
        link: '/category/web-development'
    },
    {
        title: 'Mobile Development',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 2,
        link: '/category/mobile-development'
    },
    {
        title: 'Data Science',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 3,
        link: '/category/data-science'
    },
    {
        title: 'Design',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 4,
        link: '/category/design'
    },
    {
        title: 'Marketing',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 5,
        link: '/category/marketing'
    },
    {
        title: 'IT & Software',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 6,
        link: '/category/it-and-software'
    },
    {
        title: 'Personal Development',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 7,
        link: '/category/personal-development'
    },
    {
        title: 'Business',
        image: 'https://i.ibb.co/qMxVLGf/categories-icon-png.png',
        coursesLength: 10,
        id: 8,
        link: '/category/business'
    },


]

const TopCategory = () => {
    return (
        <Container sx={{
            mt: { xs: 8, sm: 12 }
        }}  >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: { xs: '1.5rem', md: '2.2rem' },
                        fontWeight: 500,
                        color: '#002058'
                    }}>
                        Top Category
                    </Typography>
                </Box>
                <Button sx={{
                    borderColor: '#392C7D',
                    color: '#392C7D',
                    borderRadius: '5rem',
                    fontSize: { xs: '0.8rem', md: '1rem' },
                }} variant="outlined">
                    All Categories
                </Button>
            </Box>
            <Typography sx={{ color: '#685F78', mt: 0.7, width: { xs: 1, md: 1 / 2 } }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                gravida maecenas augue elementum et neque. Suspendisse imperdiet.
            </Typography>


            {/* card */}
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
                    slidesPerView={2}
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
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        TopCategoryData.map((category, i) => (
                            <SwiperSlide key={category.id}>
                                <TopCategoryCard
                                    category={category}
                                />
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </Box>

        </Container>
    );
};

export default TopCategory;