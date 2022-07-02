import React, { useRef, useState } from 'react';
import '../../CSS/Navbar.css'
import '../../CSS/Home.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../CSS/styles.css'
import { Autoplay, Pagination, Navigation } from "swiper";

import Drone from '../../Images/Drone.png'
import Headphone from '../../Images/Headphone.png'
import Led from '../../Images/LED.png'

import Typed from 'react-typed';

const Home = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="hero height bc lg:px-20">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={Headphone} alt='' />
                            <div>
                                <h1 class="text-6xl font-bold">
                                    <Typed
                                        strings={[
                                            'The Drone Has An Attractive Gift Free!!'
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={70}
                                        loop >
                                    </Typed>
                                </h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="button px-6 py-2 rounded text-white duration-300">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="hero height bc lg:px-20">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={Drone} alt='' />
                            <div>
                                <h1 class="text-6xl font-bold">
                                    <Typed
                                        strings={[
                                            'The High Quality Product Is Ready!!'
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={70}
                                        loop >
                                    </Typed>
                                </h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="button px-6 py-2 rounded text-white duration-300">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="hero height bc lg:px-20">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={Led} alt='' />
                            <div>
                                <h1 class="text-6xl font-bold">
                                    <Typed
                                        strings={[
                                            'Get The Best Deal On Smart TV!!'
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={70}
                                        loop >
                                    </Typed>
                                </h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="button px-6 py-2 rounded text-white duration-300">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;