"use client"

import { useState, useEffect } from "react";
import {BsFillEyeFill, BsLink} from "react-icons/bs"
const Portfolio = () => {
  const [navFilter, setFilter] = useState("Graphic");
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(`http://localhost:5000/portfolio/get?name=${navFilter}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         setItems(data?.data);
       return setLoader(false);
      });
  }, [navFilter]);

  console.log(items);
  return (
    <div id="portfolio" className="md:px-20 px-6 mt-32 md:h-screen">
      <h1  className="text-center text-3xl text-[#30303c] md:text-4xl font-bold md:my-6">
        Portfolio
      </h1>
      <p className="text-center text-base text-[#696564] font-medium mt-3">
        We don’t promise quality without proof. Browse our work <br></br> below
        to get an idea of what we can do.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3  font-semibold">
        <div
          onClick={(e) => setFilter(e.target.innerText)}
          className={`${
            navFilter === "Graphic"
              ? "bg-[#ff5b2e] text-white transition-transform "
              : ""
          } px-4 py-2 cursor-pointer rounded-md text-sm hover:bg-[#ff5b2e] hover:text-white transition-colors`}
        >
          Graphic
        </div>
        <div
          onClick={(e) => setFilter(e.target.innerText)}
          className={`${
            navFilter === "Website"
              ? "bg-[#ff5b2e] text-white transition-transform"
              : ""
          } px-4 py-2 cursor-pointer rounded-md text-sm hover:bg-[#ff5b2e] hover:text-white transition-colors`}
        >
          Website
        </div>
        <div
          onClick={(e) => setFilter(e.target.innerText)}
          className={`${
            navFilter === "Design"
              ? "bg-[#ff5b2e] text-white transition-transform"
              : ""
          } px-4 cursor-pointer py-2 rounded-md text-sm hover:bg-[#ff5b2e] hover:text-white transition-colors`}
        >
          Design
        </div>
      </div>
      {loader ? (
        <div className="flex items-center justify-center w-full h-full">
          <div
            className="inline-block h-14 w-14 animate-spin rounded-full border-4  border-r-transparent border-cyan-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid  md:grid-cols-3 gap-10 mt-10">
            {items?.map((item) => {
              return (
                <div key={item?._id}>
                  <div className="w-full h-full overflow-hidden group cursor-pointer relative">
                          <img className="group-hover:scale-125 w-full h-full transition-transform duration-300 " src={item.image} alt="" />
                          <div className="group-hover:scale-100 gap-4 flex flex-col transition-transform items-start  justify-end p-6 w-full h-full absolute top-0 bg-black bg-opacity-30 scale-0 backdrop-blur-sm">
                              <h1 className="text-white text-xl capitalize font-semibold">{item?.name}</h1>
                              <div className="flex items-center gap-6 text-xl text-white">
                              <BsFillEyeFill></BsFillEyeFill>
                                  <BsLink></BsLink>
                              </div>
                          </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-10">
            <button className="px-10 py-4 bg-cyan-500 text-base rounded-full text-white font-semibold ">
              View Gallery
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
