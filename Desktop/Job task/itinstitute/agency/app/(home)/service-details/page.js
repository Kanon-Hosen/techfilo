"use client";
import DigitalMarketing from "@/components/ServicesComponents/DigitalMarketing";
import GraphicDesign from "@/components/ServicesComponents/GraphicDesign";
import WebDesign from "@/components/ServicesComponents/WebDesign";
import { useSearchParams } from "next/navigation";

const ServiceDetails = () => {
  const name = useSearchParams();
  const searchParams = name.get("name");

  if (searchParams === "Graphic Design") {
    return <GraphicDesign></GraphicDesign>;
  }
  if (searchParams === "Web Design") {
    return <WebDesign></WebDesign>;
  }
  if (searchParams === "Digital Marketing") {
    return <DigitalMarketing></DigitalMarketing>;
  }
  // if (name === "Digital Marketing") {
  //     return hello

  return (
    <div className="">{/* <ServiceBanner text={name}></ServiceBanner> */}</div>
  );
};

export default ServiceDetails;
