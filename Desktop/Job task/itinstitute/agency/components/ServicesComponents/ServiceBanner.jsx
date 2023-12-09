"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Service.css";
// import required modules
import { Autoplay, FreeMode, EffectCards } from "swiper/modules";

import Logo from "../../assets/portfolio/Aroma A letter logo.jpg";
import Cover from "../../assets/portfolio/45380001754_0a0a986900_o (1).png";
import Flyer from "../../assets/portfolio/a143ca95057445.5e8e234778f6d.jpg"
import Image from "next/image";

const ServiceBanner = ({ text, Description, image }) => {
  console.log(image)
  return (
    <div className="md:px-20 w-full h-screen py-10 bg-cyan-100">
      <div className=" w-full h-full z-30 backdrop-blur-3xl opacity-90 flex gap-14 items-center justify-between text-black">
        <div className="">
          <h1 className="text-5xl font-bold">{text}</h1>
          <p className=" mt-6 font-semibold">{Description}</p>
        </div>
        <div className="h-full pr-10">
          <Swiper
            effect={"cards"}
            autoplay={{ delay: 2000 }}
            grabCursor={true}
            modules={[EffectCards, FreeMode, Autoplay]}
            className="BannerSwiper"
          >
            {image &&
              image?.map((i) => {
                console.log(i);
                return (
                  <SwiperSlide>
                    <div className="relative group transition-all duration-500 w-full h-full cursor-pointer">
                      <Image
                        className="w-full h-full object-cover"
                        src={i}
                        alt=""
                        width={200}
                        height={200}
                      />
                      <div className="absolute top-0 bg-opacity-50 flex items-end justify-center z-20 w-full h-full ">
                        <div className="w-full group-hover:h-full transition-all duration-500  h-16 bg-cyan-500 bg-opacity-60 backdrop-blur-2xl flex items-center flex-col justify-center">
                          <p className="text-white font-bold text-2xl uppercase">
                            Logo Design
                          </p>
                          <button className="bg-black px-8 py-2 text-sm font-normal rounded-full mt-2 hidden group-hover:flex delay-500 duration-500 transition-all">
                            See More
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              } )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
