import React from "react";

const Client = () => {
  return (
    <div className="bg-[#dff4ff]">
      <div className="md:px-10 mt-20 px-6 max-w-[1440px] mx-auto py-10">
        <h1
          className="text-center text-3xl md:text-4xl font-bold my-10"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          Why Our Clients Keep <br></br>Coming Back
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-12 my-10">
          <div
            className="flex items-center justify-center flex-col text-center shadow-md  bg-blue-400 p-8 rounded-2xl"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <img
              src="https://graphicsolo.com/wp-content/uploads/2020/03/communication.png"
              alt=""
            />
            <div className="flex items-center justify-center gap-4 flex-col">
              <h1 className="text-white font-bold text-2xl">Communication</h1>
              <p className="text-white text-xl ">
                We talk to you throughout the design process, including
                understanding what you want, keeping you updated, and revising
                if necessary.
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center flex-col shadow-md text-center  bg-red-400 p-8 rounded-2xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src="https://graphicsolo.com/wp-content/uploads/2020/03/quality.png"
              alt=""
            />
            <div className="flex items-center justify-center gap-4 flex-col">
              <h1 className="text-white font-bold text-2xl">Quality</h1>
              <p className="text-white text-xl ">
                Our clients love the clean designs that we come up with. Even
                better, their clients do too, which can lead to years of repeat
                business.
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center shadow-md flex-col text-center  bg-indigo-400 p-8 rounded-2xl"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              src="https://graphicsolo.com/wp-content/uploads/2020/03/result.png"
              alt=""
            />
            <div className="flex items-center justify-center gap-4 flex-col">
              <h1 className="text-white font-bold text-2xl">Results</h1>
              <p className="text-white text-xl ">
                Ultimately, the most important thing is getting results. We make
                it happen by lowering your expenses and workload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
