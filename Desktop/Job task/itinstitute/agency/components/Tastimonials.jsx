"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";
import "./Testi.css"
import { useGetAllTestimonailsQuery } from "@/Redux/AppApi/AppApi";

const Tastimonials = () => {
  const { data, isLoading } = useGetAllTestimonailsQuery();
  if (isLoading) {
    
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="md:px-10 w-full h-full px-6 my-36">
        <h1
          className="text-center uppercase font-semibold text-primary text-xl"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          TESTIMONIALS
        </h1>
        <h1
          className="text-center text-4xl font-bold my-5 mb-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Our clients praise us for our great results
        </h1>

        <div
          className="w-full h-full"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <Swiper
            autoplay={{ delay: 3000 }}
            grabCursor={true}
            // slidesPerView={3}

            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={true}
            modules={[Pagination, FreeMode, Autoplay]}
            className="TestimonailSwiper"
          >
            <SwiperSlide>
              <TestimonialCard></TestimonialCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard></TestimonialCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard></TestimonialCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard></TestimonialCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard></TestimonialCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tastimonials;
