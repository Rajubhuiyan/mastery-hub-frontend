import React, { useRef } from 'react';
import reviewBg from '../../../Utilities/Images/Homepage/review-bg.jpg';
import { Box, Button, styled } from '@mui/material';
import quoteImg from '../../../Utilities/Images/Homepage/quote.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  } from "swiper";
import ReviewCard from './ReviewCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const reviewData = [
    {
        id: 1,
        name: 'John Doe',
        position: 'CEO, ABC Company',
        review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.`,
        img: 'https://i.ibb.co/7tGKGvb/Rectangle-28.png'
    },
    {
        id: 2,
        name: 'John Doe',
        position: 'CEO, ABC Company',
        review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.`,
        img: 'https://i.ibb.co/7tGKGvb/Rectangle-28.png'
    }
]


const PaginationButton = styled(Button)(({ theme }) => ({
    color: '#002058',
    backgroundColor: 'white',
    height: 35,
    width: 40,
    minWidth: 40,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'white',
        transform: 'scale(1.1)'
    },
    '&:focus': {
        backgroundColor: 'white',
    },
    '&:active': {
        backgroundColor: 'white',
        transform: 'scale(0.9)'
    },
    position: 'absolute',
    zIndex: '1111111111',
    top: '70%'
}));



const Review = () => {


    const swiperRef = useRef(null);

    console.log(swiperRef)

    return (
        <Box sx={{
            height: { xs: 450, md: 600 },
            backgroundImage: `url(${reviewBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: { xs:'100% 245px',sm: '100% 300px', md: '100% 400px' },
            width: '100%',
            backgroundColor: 'white',
            backgroundPosition: 'top',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <Box sx={{
                backgroundImage: `url(${quoteImg})`,
                backgroundRepeat: 'no-repeat',
                pt: 3,
                backgroundSize: '80px',
                backgroundPosition: '8px 0px',
                position: 'relative',
                top: { xs:0,sm: 20, md: 70 }
            }}>
                <Box sx={{
                    background: 'linear-gradient(180deg, #57504D 0%, #F2F3F6 100%)',
                    border: '8px solid #EDEDED',
                    padding: { xs: 1,sm:2, md: 5 },
                    width: { xs: '95vw', sm: 550, md: 700 },
                    borderRadius: 4,

                }}>
                    <Swiper

                        modules={[Navigation,]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                    >
                        {
                            reviewData.map(review => (
                                <SwiperSlide style={{
                                    position: 'relative'
                                }} key={review.id}>
                                    <ReviewCard review={review} />
                                    <PaginationButton sx={{
                                        left: 10
                                    }}
                                        onClick={() => swiperRef.current.slidePrev()}
                                    >
                                        <KeyboardBackspaceIcon />
                                    </PaginationButton>
                                    <PaginationButton sx={{
                                        right: 10,
                                    }}
                                        onClick={() => swiperRef.current.slideNext()}
                                    >
                                        <KeyboardBackspaceIcon sx={{
                                            transform: 'rotate(180deg)'
                                        }} />
                                    </PaginationButton>

                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
};

export default Review;