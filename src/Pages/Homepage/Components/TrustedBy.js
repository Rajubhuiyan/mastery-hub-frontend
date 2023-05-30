import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const trustedCompany = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
    },
    {
        id: 2,
        image: "https://s3-alpha-sig.figma.com/img/9a3f/10c9/5822fe1360140e7b5549a3ecbc702738?Expires=1686528000&Signature=lQMSOOGegT40DtLdM4CqOP~Eqlz1X6Lidjd9OiqJONjRVafsuuwIHokX-F4fvV8ybijYksi~HYFky-EjvnXBewktkFVRFBjdHQPAGzbaS4n~OxfgZFvU6OH-9hIriTE27Ye3mxmHll1agQY1XVHLIYYPLmb9ML3u4iQZSnsnofr~XPZVXCNF1EOuBlxM5iEtqO8SGr6m~6ih-aQXq8cLMwAS~iw-3gIB4SsKLm~jOlY4jK8iZdxCwsqZ63tCpo-py7a7kztn6NJrOzU5f8aS00oAm~A0Vw0V1Kx6ZTEjFo-XfDon9sV3UJCmhSDQnJsPf9QVlLn5tEr12CTfad6~Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png"
    },
    {
        id: 4,
        image: "https://iili.io/HrWS9n4.png"
    },
    {
        id: 5,
        image: "https://s3-alpha-sig.figma.com/img/e39f/b1d0/50d99cb0783cd9ebecc570a9b95eb488?Expires=1686528000&Signature=N7SzmslP3HbctrKZAUu4rjDDizItiFoCLsdyBr5~j8XQa4eyRUt4oegZ6Y3zR-Dyqi80YDemHUCKghhm05Psr~0mcZ8CljcJyp13yV35INcGWSxi8uibDpyI1itdo7QuXd-WTa~Qb7~QHC~Rt~6UQUsXX0PoMx5lBNmMr3xTRnuHcqFw4bbOAFualJ4QhsrEngic5T--HtF1HsPFbo0kzSH9F2szrfjThqvHXo0o0tdaEKRHqmv1j9RGh3jPMg48XYwlfEBNHn9wgtDjYFZwRkWG9n2erIsL0GUUYFzue41H570~D2JRBDqtUDNafKdlTa~N4ryFtQtOWJnKz6sz~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id: 6,
        image: "https://s3-alpha-sig.figma.com/img/1ec4/f3d3/a8fada0a63cf1fe693822501e7b59a94?Expires=1686528000&Signature=Ah6KzOhaBx79tgSzGa-O7RL00aFGmpALkApj~sCaSZ4v6rkCjhzlId9oIR9Ie3Sl350tjOYj-ZFOmfBc3bAw3TEmmNsYDjDGgOUQaJp9IRl0jX3698kDe5BwY3SOqCVjqxk3~c-thD6hUdVlmgi--qugtZh50vK8F5lqca1UGIx~gH6eBvWCYf03bGOLFN8Ljx06Rox2Z6tgttod~UT3ZWBu1~3J6yoRpPjKIqGAgAAwkLD4uXZEbgwNQu6Rrs~Ke5RMaQQSgn4tSMLYF1Wu2aj7LCCCqXmeS6DDrkCezEswg9ZYXx0Tl3JIio4cy9l985smnF01-DiAp5e3TvFuvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id: 6,
        image: "https://s3-alpha-sig.figma.com/img/c234/7230/c1ff211402d1fc566756bc057c1baa13?Expires=1686528000&Signature=YnVof257V1ZsS822WkZYpkYeYTWHXwZRqBBUxPY3agdyROLtsozFf6glPRlBFR3RbsmkQM8sJG1th-GvV9by7wohkGxTQxqnHTtaYauN3nVOovoj~rLLdSwFjXLTS3hO3LrFtyAMphTO8aSZ7danA5PTxoDJQ48u2ht7Oe-V1UG-WDE-qYTriYM8S8R~Vm6i0~APsI1HhnNd6-dNtLX4Up9HqidILvWWTiJse4yFuUs22mahOT7xt7N3-CQERjase6DhMNlFzbAs5ZdbJJkkGxDFMZ-yNhoPXY8Mp2hxBwSY0ph~v~6mg0MOSGe8fqct3iI5C~NBO7jHLhbWebJu3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id: 6,
        image: "https://s3-alpha-sig.figma.com/img/c3ca/4d3c/7a9066de167e53e3ad3b90076e351730?Expires=1686528000&Signature=hT~sayIyRDlPr9NBpWjRtn0f~UPxvZ2zyocJTsu6lLxjINctFI3vLtm4rZLSi7t6sWzhUdiJ6qxtNavH~kQd8XvyRvVbVYssHtO6l~nGmgmKhIyrlP3z-RBr1x7tsN3OKP4OF90jvRTzDbH8FrJmo4VfOMQeSWR9PjtUWD2dUWorZ4jtVFmb2nhb3bAeF~Iy6sAMrP~Kf~UavxTGeE8YxuiFeZnJceQ9W~bKrRn6URVPKmAmnGKWl5axThWCklDUTc~HgprWrfzBRhhuHkJK~-hdL36zUjLObU9wIEBQjMNpvIgjb5aUknuYD1~zIZj27W1nFfWxxfJa4Efds3-B3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
]

const TrustedBy = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Box textAlign="center">
                <Typography sx={{ color: '#FF6575', fontWeight: 500 }}>
                    Trusted By
                </Typography>
                <Typography sx={{
                    color: '#002058',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 500,
                    mt: 2
                }}>
                    500+ Leading Universities And Companies
                </Typography>
            </Box>

            <Box sx={{
                mt: 4,
                '& .swiper-wrapper':{
                    alignItems: 'center',
                }

            }}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    style={{
                        paddingBottom: '60px'
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        900: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay,FreeMode]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} 
                    freeMode={true}
                >
                    {
                        trustedCompany.map((company, i) => (
                            <SwiperSlide key={company.id}>
                                <Box>
                                    <img style={{
                                        height:'50px',
                                         width:'100%',
                                         objectFit:'contain'
                                    }} src={company.image} alt="" />
                                </Box>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </Box>

        </Container>
    );
};

export default TrustedBy;