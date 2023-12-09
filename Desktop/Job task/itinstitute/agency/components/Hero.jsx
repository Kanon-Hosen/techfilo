"use client";
import appMockup from "../assets/hero/LOGO-01.png";
import { BsArrowRight } from "react-icons/bs";
// import Brand from "./Brand";
import Link from "next/link";
import Image from "next/image";
import Brand from "./Brand";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  FreeMode,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <div className="px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto md:mt-0  bg-[#ffffff] mt-14 lg:my-10  md:overflow-hidden ">
        <Swiper
          cssMode={true}
          autoplay={{ delay: 4000 }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard, Autoplay, FreeMode]}
          className="hero"
        >
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center md:flex-row md:justify-between items-center ">
              <div className="md:w-1/2 flex flex-col  md:items-start md:justify-start items-center justify-center ">
                <h1 className="lg:text-5xl text-4xl text-center md:text-left font-bold text-[#30303c] leading-relaxed">
                  Top Mobile App Development Company in India
                </h1>
                <p className="mt-5 font-medium text-center md:text-left text-[#525259] text-lg ">
                  Reevan solve the world's biggest problems with Expertise.
                  Reevan helps global brand with digital products on web, mobile
                  and connected platforms.
                </p>
                <Link
                  href="/contact"
                  className="bg-primary text-center  py-4 flex items-center justify-center gap-3 w-40 mt-6 rounded-full px-2 text-white font-semibold text-lg"
                >
                  <p>Let's Talk</p>
                  <div className="text-white text-xl">
                    <BsArrowRight></BsArrowRight>
                  </div>
                </Link>
              </div>
              <div
                className="md:w-1/2 md:mt-0 mt-5"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <Image
                  className="w-full  bg-cover bg-center"
                  src={appMockup}
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center md:flex-row md:justify-between items-center ">
            <div className="md:w-1/2 flex flex-col  md:items-start md:justify-start items-center justify-center ">
              <h1 className="lg:text-5xl text-4xl text-center md:text-left font-bold text-[#30303c] leading-relaxed">
                Top Mobile App Development Company in India
              </h1>
              <p className="mt-5 font-medium text-center md:text-left text-[#525259] text-lg ">
                Reevan solve the world's biggest problems with Expertise. Reevan
                helps global brand with digital products on web, mobile and
                connected platforms.
              </p>
              <Link
                href="/contact"
                className="bg-[#ff5b2e] text-center  py-4 flex items-center justify-center gap-3 w-40 mt-6 rounded-full px-2 text-white font-semibold text-lg"
              >
                <p>Let's Talk</p>
                <div className="text-white text-xl">
                  <BsArrowRight></BsArrowRight>
                </div>
              </Link>
            </div>
            <div
              className="md:w-1/2 md:mt-0 mt-5"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Image
                className="w-full  bg-cover bg-center"
                src={appMockup}
                width={300}
                height={300}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center md:flex-row md:justify-between items-center ">
            <div className="md:w-1/2 flex flex-col  md:items-start md:justify-start items-center justify-center ">
              <h1 className="lg:text-5xl text-4xl text-center md:text-left font-bold text-[#30303c] leading-relaxed">
                Top Mobile App Development Company in India
              </h1>
              <p className="mt-5 font-medium text-center md:text-left text-[#525259] text-lg ">
                Reevan solve the world's biggest problems with Expertise. Reevan
                helps global brand with digital products on web, mobile and
                connected platforms.
              </p>
              <Link
                href="/contact"
                className="bg-[#ff5b2e] text-center  py-4 flex items-center justify-center gap-3 w-40 mt-6 rounded-full px-2 text-white font-semibold text-lg"
              >
                <p>Let's Talk</p>
                <div className="text-white text-xl">
                  <BsArrowRight></BsArrowRight>
                </div>
              </Link>
            </div>
            <div
              className="md:w-1/2 md:mt-0 mt-5"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Image
                className="w-full  bg-cover bg-center"
                src={appMockup}
                width={300}
                height={300}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide> */}
        </Swiper>
        <div className="mt-6">
          <Brand></Brand>
        </div>
      </div>
    </div>
  );
};

export default Hero;
