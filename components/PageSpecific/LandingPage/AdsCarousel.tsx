import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { chakra } from '@chakra-ui/react';

const AdsCarousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            style={{
                width: '100%',
                margin: '2rem 0',
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {Array(1)
                .fill(0)
                .map((_, i) => (
                    <SwiperSlide key={i}>
                        <chakra.div
                            width="100%"
                            height={{
                                base: '22vw',
                                md: '25vw',
                            }}
                            position="relative"
                        >
                            <Image
                                src={'/barner1.png'}
                                alt={'title'}
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </chakra.div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default AdsCarousel;
