"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
// Import Swiper styles
import './ProvideService.css'
import "swiper/css";
import "swiper/css/effect-cards";
// import "../Services/Service.css";
// import required modules
import Logo from '../../assets/portfolio/Aroma A letter logo.jpg'
import { EffectCards, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
const ProvideServicesImage = ({ graphics }) => {
    console.log("🚀 ~ file: ProvideServicesImage.jsx:16 ~ ProvideServicesImage ~ graphics:", graphics)
    return (
        <div className="h-full pr-10">
          <Swiper
            effect={"cards"}
            autoplay={{ delay: 2000 }}
            grabCursor={true}
            modules={[EffectCards, FreeMode, Autoplay]}
            className="ImageSwiper"
          >
          {
            graphics?.picture?.map(image => {
              return (
                <SwiperSlide>
              <div className="relative group transition-all duration-500 w-full h-full">
                <Image className="w-full h-full object-cover" src={image} alt="" width={100} height={200} />
              </div>
            </SwiperSlide>
              )
            })
           }
          </Swiper>
        </div>
    );
};

export default ProvideServicesImage;