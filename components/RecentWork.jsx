"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import RecentWorkCard from "./RecentWorkCard";
import { useGetAllPortfolioQuery } from "@/Redux/AppApi/AppApi";
import Skeleton from "./Skeleton";
const RecentWork = () => {
  const { data, error, isLoading } = useGetAllPortfolioQuery("All");

  return (
    <div className="bg-[#dff4ff]">
      <div className="max-w-[1440px] mx-auto md:px-16 px-6 md:my-20 py-20">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-3xl font-bold text-slate-800">
            Our <span className="text-primary">Selected</span> Work
          </h1>
          <div>
            <Link
              href="/portfolio"
              className="flex items-center bg-primary text-white gap-2 md:text-lg font-medium px-6 py-2 hover:bg-transparent rounded-md  border-[3px] hover:text-primary  border-primary transition-colors duration-300"
            >
              <p>View all</p>
              <BsArrowRight></BsArrowRight>
            </Link>
          </div>
        </div>
        {isLoading ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-5">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div>
            {data?.data ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-3  gap-8 lg:gap-5 mt-16">
                {data?.data.slice(0, 9).map((item) => (
                  <RecentWorkCard item={item} key={item._id} />
                ))}
              </div>
            ) : (
              <div className="">
                <p>No work found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentWork;
