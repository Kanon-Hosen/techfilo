"use client";
import React, { useEffect, useState } from "react";
// import GraphicImg from "../../assets/portfolio/graphic.png";
import ServiceBanner from "./ServiceBanner";
import ProvideServicesImage from "../ProvideServices/ProvideServicesImage";
import ProvideServicesText from "../ProvideServices/ProvideServicesText";
import Aroma from "../../assets/portfolio/Aroma A letter logo.jpg";
import Burger from "../../assets/portfolio/Burger Delivery Logo.png";
import Video from "../../assets/portfolio/Video com Logo.png";
import Logo from "../../assets/portfolio/image_processing20210522-19187-1dzwhgf.jpg";
import Logo2 from "../../assets/portfolio/image_processing20210322-14124-8p3v4e.jpg";
import Logo3 from "../../assets/portfolio/image_processing20210206-14164-1j3ov7n.jpg";
import Logo4 from "../../assets/portfolio/image_processing20201229-1057-1git16z.jpg";
const GraphicDesign = () => {
  const [img, setImg] = useState();

  // useEffect(() => {
  //     fetch("/graphic.json")
  //         .then((res) => res?.json())
  //         .then(data => {
  //           return setGraphic(data);
  //     })
  // }, []);

  const graphics = {
    category: "Logo Design",
    picture: [Aroma, Burger, Video, Logo, Logo2, Logo3, Logo4],
    description:
      "Logos serve to represent a given organization or company through a visual image that can be easily understood and recognized. A logo generally involves symbols, stylized text, or both. We design timeless business and modern minimalist logo design for our clients.",
  };

  // const data = graphics.map(image=> setImg(image))
  // console.log("🚀 ~ file: GraphicDesign.jsx:26 ~ GraphicDesign ~ data:", data)
  return (
    <div className="">
      <ServiceBanner
        text="Graphic Design"
        image={graphics?.picture}
        Description={graphics?.description}
      ></ServiceBanner>
      <h1 className="text-center text-4xl font-semibold my-12">
        Services we Provide
      </h1>
      <hr />

      <div className="grid md:grid-cols-1 gap-10 my-6 px-20">
        <div className="flex items-center gap-24 justify-between">
          <ProvideServicesImage graphics={graphics}></ProvideServicesImage>
          <ProvideServicesText
            Description={graphics?.description}
            Text={graphics?.category}
          ></ProvideServicesText>
        </div>
        <div className="flex flex-row-reverse items-center mt-3 justify-between">
          <ProvideServicesImage graphics={graphics}></ProvideServicesImage>
          <ProvideServicesText
            Description={graphics?.description}
            Text={graphics?.category}
          ></ProvideServicesText>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
