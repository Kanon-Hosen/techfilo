import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const TeamCard = ({ team }) => {
  return (
    <div className="relative mt-20 w-full rounded-md border border-gray-300 shadow-md  text-center">
      <div className="absolute w-full h-full -top-32 z-30 flex items-center justify-center">
        <img
          className="w-28 h-28 rounded-full border-4 bg-white border-cyan-500 bg-center bg-cover object-cover"
          src={team?.image}
          alt=""
        />
      </div>
      <div className="flex items-center flex-col justify-center pt-16 w-full p-4">
       
        <p className="font-semibold text-black text-xl">{team?.name}</p>
        <p className="text-gray-600 text-sm font-semibold">{team?.position}</p>
        <p className="mt-2 text-gray-800">
         {team?.tagline}
        </p>
        <div className="flex items-center justify-center gap-5 mt-5 text-cyan-500">
          <a href={team?.facebook} target="blank" className="text-xl hover:text-cyan-700 cursor-pointer transition-colors">
            <BsFacebook></BsFacebook>
          </a>
          <a href={team?.linkedin} target="blank" className="text-xl hover:text-cyan-700 cursor-pointer transition-colors">
            <BsLinkedin></BsLinkedin>
          </a>
          <a href={team?.instagram} target="blank" className="text-xl hover:text-cyan-700 cursor-pointer transition-colors">
            <BsInstagram></BsInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
