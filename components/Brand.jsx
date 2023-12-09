"use client";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";
import { useGetAllCompanyQuery } from "@/Redux/AppApi/AppApi";
const Brand = () => {
  const { data, isLoading } = useGetAllCompanyQuery();
  console.log(data?.data)
  if (isLoading) {
    return <div className="text-center">Loading...</div>
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <Swiper
        autoplay={{ delay: 1500 }}
        grabCursor={true}
        // slidesPerView={3}

        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="BrandSwiper "
      >
        {data?.data[0]?.image.map((i, index) => (
          <SwiperSlide key={index}>
            <Image width={200} className="overflow-hidden bg-center bg-cover" height={200} src={i} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
