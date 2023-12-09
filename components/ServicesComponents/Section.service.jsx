import React from "react";
import Card from "./Card";

const SectionService = ({
  title,
  bg,

  btnText,
  card1Img,
  card2Img,
  card3Img,
  card4Img,
  card1Title,
  card2Title,
  card3Title,
  card4Title,
  card1Text,
  card2Text,
  card3Text,
  card4Text,
}) => {
  return (
    <div className={` grid md:grid-cols-3 gap-10 md:px-10 lg:px-20 px-6 `}>
      <div className="flex md:block flex-col items-center justify-center">
        <p className="md:text-4xl text-2xl md:text-left text-center text-slate-900 font-bold leading-snug">
          We make the collaboration of people and interface more intensive and
          exciting.
        </p>
        <button className="border-2 border-primary text-primary font-semibold hover:text-white hover:bg-primary transition-colors rounded-full px-10 py-4 bg-transparent mt-10">
          {btnText}
        </button>
      </div>
      <div className="md:col-span-2 ">
        <h1 className="md:text-5xl text-3xl font-bold text-slate-900 md:text-left text-center">
          {title}
        </h1>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Card
            card1Img={card1Img}
            card1Title={card1Title}
            card1Text={card1Text}
          ></Card>
          <Card
            card1Img={card2Img}
            card1Title={card2Title}
            card1Text={card2Text}
          ></Card>
          <Card
            card1Img={card3Img}
            card1Title={card3Title}
            card1Text={card3Text}
          ></Card>
          <Card
            card1Img={card4Img}
            card1Title={card4Title}
            card1Text={card4Text}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default SectionService;
