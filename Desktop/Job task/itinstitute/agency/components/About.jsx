import React from "react";
import aboutbg from "../assets/blob-scene-haikei.png";
import Logo from "../assets/portfolio/IT-Proshikkhon-Logo.png";
const About = () => {
  return (
    <div className="w-full md:h-screen mt-16">
      <div className=" z-30  px-20">
      
        <h1 className="text-center text-5xl font-semibold">
          About Us
        </h1>
              <div className="flex  gap-20 mt-10 justify-between">
              {/* <div className="w-1/2  border-2 shadow-inner  shadow-cyan-500 border-cyan-500">
          <img className="" src={Logo} alt="" />
        </div> */}
          <div className="text-left drop-shadow-lg ">
            <p className="">
              IT Institute is an independent branding and experience digital
              marketing agency based on worldwide. The team at IT Institute
              provides fresh and creative designs. We are experienced graphic
              designers and make it our goal to bring you success. Your passions
              and goals become our own. Call us to see how we can help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
