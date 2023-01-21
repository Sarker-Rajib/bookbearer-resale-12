import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "./Affiliate.css";


const AffiliatedBusiness = () => {
    return (
        <div className="p-2  pt-24 overflow-hidden">
            <div className="text-center">
                <h2 className="mb-8 text-5xl font-bold">Our Allied Companies</h2>
            </div>
            <Swiper
                // loop={true}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                autoplay={{
                    delay: 2000,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        width: 320,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    992: {
                        width: 992,
                        slidesPerView: 4,
                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 4,
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="p-2">
                        <div className="p-2 w-full rounded-lg bg-white h-full">
                            <div className='rounded'>
                                <h2 className="title">Knowledge Store</h2>
                                <p className="type">Book Store</p>
                                <p className="address">Address: 45, link street, Dhaka</p>
                                <p className="mail">email: e@mail.com</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2">
                        <div className="p-2 w-full rounded-lg bg-white h-full">
                            <div className='rounded'>
                                <h2 className="title">Explore</h2>
                                <p className="type">Book Store</p>
                                <p className="address">Address: 45, link street, Dhaka</p>
                                <p className="mail">email: e@mail.com</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2">
                        <div className="p-2 w-full rounded-lg bg-white h-full">
                            <div className='rounded'>
                                <h2 className="title">Heavenly books</h2>
                                <p className="type">Book Store</p>
                                <p className="address">Address: 45, link street, Dhaka</p>
                                <p className="mail">email: e@mail.com</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2">
                        <div className="p-2 w-full rounded-lg bg-white h-full">
                            <div className='rounded'>
                                <h2 className="title">Over the border</h2>
                                <p className="type">Book Store</p>
                                <p className="address">Address: 45, link street, Dhaka</p>
                                <p className="mail">email: e@mail.com</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2">
                        <div className="p-2 w-full rounded-lg bg-white h-full">
                            <div className='rounded'>
                                <h2 className="title">Know More</h2>
                                <p className="type">Book Store</p>
                                <p className="address">Address: 45, link street, Dhaka</p>
                                <p className="mail">email: e@mail.com</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2">
                        <div className="p-2 w-full rounded-lg bg-white h-full">
                            <div className='rounded'>
                                <h2 className="title">Book Zone</h2>
                                <p className="type">Book Store</p>
                                <p className="address">Address: 45, link street, Dhaka</p>
                                <p className="mail">email: e@mail.com</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AffiliatedBusiness;