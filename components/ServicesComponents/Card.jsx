import React from 'react';

const Card = ({card1Img, card1Text, card1Title}) => {
    return (
        <div className="rounded-xl bg-white shadow-md p-6 flex flex-col gap-3">
        <img className="w-20" src={card1Img} alt="" />
        <p className="font-bold text-2xl text-slate-900">{card1Title}</p>
        <p className="text-base text-neutral-700">{card1Text}</p>
      </div>
    );
};

export default Card;