"use client";

import Loading from "@/components/Loading";
import { useGetAllPortfolioQuery } from "@/Redux/AppApi/AppApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
function Portfolio() {
  const [active, setActive] = useState("All");

  const { data, isLoading } = useGetAllPortfolioQuery(active);
  const router = useRouter();
  return (
    <div className="my-10 mt-20 md:px-10 px-6">
      <h1 className="text-center font-bold text-4xl">Our work</h1>
      <div className="flex relative w-full items-center justify-center gap-8 mt-5 text-xl ">
        <p
          onClick={() => setActive("All")}
          className={` ${
            active === "All" ? "text-primary" : "text-gray-600"
          } hover:text-primary text-gray-600 transition-colors cursor-pointer`}
        >
          All
        </p>
        <div
          onClick={() => setActive("Graphic")}
          className={` ${
            active === "Graphic" ? "text-primary" : "text-gray-600"
          } hover:text-primary text-gray-600 w-full group  transition-colors cursor-pointer`}
        >
          Graphic
        </div>
        <div className="bg-white shadow p-4 group-hover:flex rounded-md  text-sm absolute top-7 left-0 hidden flex-col gap-3 z-40">
          <p className="inline-block cursor-pointer hover:text-primary transition-colors">
            Book Cover
          </p>
          <p className="inline-block cursor-pointer hover:text-primary transition-colors">
            Art
          </p>
          <p className="inline-block cursor-pointer hover:text-primary transition-colors">
            Logo
          </p>
          <p className="inline-block cursor-pointer hover:text-primary transition-colors">
            Banner Design
          </p>
        </div>

        <p
          onClick={() => setActive("Website")}
          className={` ${
            active === "Website" ? "text-primary" : "text-gray-600"
          } hover:text-primary text-gray-600 transition-colors cursor-pointer`}
        >
          Website
        </p>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-10">
          {data?.data.length !== 0 ? (
            <div className="xl:columns-4 mb-8 mt-5 lg:columns-4 md:columns-3 space-y-2 columns-2 gap-2">
              {data?.data.map((item, index) => (
                <div
                  onClick={() =>
                    router.push(`/portfolio-details/${item?.name}`)
                  }
                  key={index}
                  className="overflow-hidden relative w-full h-full cursor-pointer group duration-500 transition-transform"
                >
                  <Image
                    src={item?.image[0]}
                    alt="image"
                    className="h-auto max-w-full transition-transform hover:scale-110 duration-500"
                    width={500}
                    height={500}
                  />
                  <div className="w-full translate-y-full group-hover:translate-y-0 h-full top-0 left-0 group-hover:bg-neutral-900 group-hover:bg-opacity-70 transition-transform duration-500 absolute flex items-end py-4 justify-center">
                    <p className="text-gray-200 font-normal">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex itecm-center justify-center w-full h-[300px]">
              <h1 className="font-semibold text-3xl text-gray-600">
                No work found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
