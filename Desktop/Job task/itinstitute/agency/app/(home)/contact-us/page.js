"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import { useState } from "react";
const Contact = () => {
  const [isLoading, setLoading] = useState(false);
  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e?.target;
    fetch("/api/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: form?.fullName.value,
        email: form?.email.value,
        phoneNumber: form?.phoneNumber.value,
        whatsApp: form?.whatsApp.value,
        subject: form?.subject.value,
        interest: form?.interest.value,
        message:form?.message.value
      }),
    }).then(res => res.json())
    .then(data=>console.log(data))
  };
  return (
    <div className="">
      <div className="bg-secondary md:px-10 px-6">
        <div className="max-w-[1440px] mx-auto py-10 grid md:grid-cols-2 items-center gap-10 md:h-screen ">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 text-xl text-primary">
              <div>
                <TfiHeadphoneAlt></TfiHeadphoneAlt>
              </div>
              <p> LET'S TALK</p>
            </div>
            <h1 className="md:text-5xl text-4xl text-slate-800 font-bold leading-tight">
              Good talks make <br></br> good projects
            </h1>
            <p className="text-base font-normal text-gray-600">
              We would be happy to hear from you, Please fill in <br></br> the
              form below or mail us your requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 flex  gap-3">
              <div className="text-xl mt-1 text-neutral-600">
                <BsFillTelephoneFill></BsFillTelephoneFill>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neutral-600">
                  {" "}
                  Salse Department
                </p>
                <p className="text-lg">+91 1234567890</p>
                <p className="text-lg">+91 1234567890</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex  gap-3">
              <div className="text-xl mt-1 text-neutral-600">
                <BsFillTelephoneFill></BsFillTelephoneFill>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neutral-600"> HR Department</p>
                <p className="text-lg">+91 1234567890</p>
                <p className="text-lg">+91 1234567890</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex  gap-3">
              <div className="text-2xl mt-1 text-neutral-600">
                <MdEmail></MdEmail>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neutral-600">
                  {" "}
                  Salse Department
                </p>
                <p className="text-lg">sals@example.com</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex  gap-3">
              <div className="text-2xl mt-1 text-neutral-600">
                <MdEmail></MdEmail>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neutral-600"> HR Department</p>
                <p className="text-lg">hr@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secound Section::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <div className="bg-primary md:px-10  px-6 ">
        <div className="max-w-[1440px] mx-auto py-20">
          <h1 className=" text-xl text-white">INQUIRY</h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div>
              <h1 className="text-4xl text-white font-bold leading-tight">
                Trusted by The Thousands
              </h1>
              <p className="text-base font-normal text-white mt-4">
                We would be happy to hear from you, Please fill in the form
                below or mail us your requirements
              </p>
              <div className="grid grid-cols-3 gap-6 p-5 bg-white shadow-md mt-8 rounded-lg">
                <Image
                  width={100}
                  height={100}
                  src="https://separateweb.com/demo-reevan/images/brand-logo/partner-logo-1.svg"
                  alt=""
                />
                <Image
                  width={100}
                  height={100}
                  src="https://separateweb.com/demo-reevan/images/brand-logo/partner-logo-2.svg"
                  alt=""
                />
                <Image
                  width={100}
                  height={100}
                  src="https://separateweb.com/demo-reevan/images/brand-logo/partner-logo-3.svg"
                  alt=""
                />
                <Image
                  width={100}
                  height={100}
                  src="https://separateweb.com/demo-reevan/images/brand-logo/partner-logo-4.svg"
                  alt=""
                />
                <Image
                  width={100}
                  height={100}
                  src="https://separateweb.com/demo-reevan/images/brand-logo/partner-logo-5.svg"
                  alt=""
                />
                <Image
                  width={100}
                  height={100}
                  src="https://separateweb.com/demo-reevan/images/brand-logo/partner-logo-6.svg"
                  alt=""
                />
              </div>
              <div className="p-5 rounded-lg bg-white shadow-md mt-10">
                <div
                  className="w-full h-full"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <Swiper
                    autoplay={{ delay: 4000 }}
                    grabCursor={true}
                    slidesPerView={1}
                    pagination={true}
                    modules={[Pagination, FreeMode, Autoplay]}
                    className="contactSwiper"
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
            <div className=" bg-white shadow-md p-8 rounded-lg overflow-hidden w-full">
              <h1 className="font-bold text-xl text-slate-800">
                Please fill in the form below or mail us your requirements{" "}
              </h1>

              <form onSubmit={handleContact} className="w-full block">
                <div className="flex flex-col md:justify-between md:flex-row md:items-center gap-8 mt-12 w-full">
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name"
                      className="p-3 border-b-2 placeholder-neutral-600 outline-none rounded-md focus:border-primary border-neutral-400"
                    />
                    <input
                      type="text"
                      required
                      name="phoneNumber"
                      placeholder="Contact Number"
                      className="p-3 border-b-2 placeholder-neutral-600 outline-none rounded-md focus:border-primary border-neutral-400"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Emaill Address"
                      className="p-3 border-b-2 placeholder-neutral-600 outline-none rounded-md focus:border-primary border-neutral-400"
                    />
                    <input
                      type="text"
                      name="whatsApp"
                      placeholder="WhatsApp"
                      className="p-3 border-b-2 placeholder-neutral-600 outline-none rounded-md focus:border-primary border-neutral-400"
                    />
                  </div>
                </div>
                <div className="flex w-full mt-7">
                  <select
                    name="interest"
                    placeholder="Interested In"
                    className="p-3 w-full border-b-2 placeholder-neutral-600 outline-none rounded-md focus:border-primary border-neutral-400"
                  >
                    <option value="">Interested In</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <textarea
                  placeholder="Message"
                  className="p-3 border-b-2 placeholder-neutral-600 outline-none rounded-md mt-4 focus:border-primary border-neutral-400 w-full resize-none"
                  name="message"
                  rows="3"
                ></textarea>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    required
                    name="agree"
                    id="agree"
                    className="text-primary"
                  />
                  <label
                    className="text-neutral-600 cursor-default"
                    htmlFor="agree"
                  >
                    I agree to the Terms & Conditions of Reevan
                  </label>
                </div>
                <div className="w-full flex items-center cursor-pointer justify-center rounded-full bg-primary mt-10 text-white font-semibold">
                  <button className="w-full h-full py-4">
                    Send Your Inquiry
                  </button>
                </div>
                <p className="text-center mt-2 text-sm"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
