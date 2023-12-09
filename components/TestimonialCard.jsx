import Image from "next/image";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const TestimonialCard = () => {
  return (
    <div className="p-4 rounded-md ">
      {/* <div className="flex items-center gap-2 mb-4">
        <div className="text-cyan-500">
          <BsFillStarFill></BsFillStarFill>
        </div>
        <div className="text-cyan-500">
          <BsFillStarFill></BsFillStarFill>
        </div>
        <div className="text-cyan-500">
          <BsFillStarFill></BsFillStarFill>
        </div>
        <div className="text-cyan-500">
          <BsFillStarFill></BsFillStarFill>
        </div>
        <div className="text-cyan-500">
          <BsFillStarFill></BsFillStarFill>
        </div>
      </div> */}

      <p className="text-base font-medium text-gray-700">
        <span className="text-2xl inline-block mx-1 text-primary">
          <RiDoubleQuotesL></RiDoubleQuotesL>
        </span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam,
        error placeat minus nulla fugiat fuga dolorum ducimus voluptas unde
        <span className="text-2xl inline-block mx-1 text-primary">
          <RiDoubleQuotesR></RiDoubleQuotesR>
        </span>
      </p>
      <div className="flex items-center gap-3 mt-5">
        {}
        <div>
          <p className="font-semibold text-black text-lg">Client Name</p>
          <p className="text-sm text-gray-600">Adress </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
