import ServicesCard from "./ServicesCard";
import graphic from "../../assets/portfolio/appdevelop.svg";
import WebDesign from "../../assets/portfolio/graphic.svg";
import app from "../../assets/portfolio/stracture.svg";
import digital from "../../assets/portfolio/prototype.svg";
const Services = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:px-10 mt-20 px-6 h-full">
      <h1
        className="text-center text-3xl text-[#30303c] md:text-4xl font-bold md:my-6"
      >
        Awesome Services
      </h1>
      <p
       
        className="text-center text-base text-[#696564] font-medium mt-3"
      >
        We partner with marketing agencies, provide a variety of <br></br>
        graphic design services for them, and do it at a <br></br> surprisingly
        low price.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-8 my-8">
        <div data-aos="fade-right" data-aos-duration="2000">
          <ServicesCard
            bg="bg-[#fff2e2]"
            image={graphic}
            text="Graphic Design"
            data-aos="fade-right"
            data-aos-duration="3000"
            pra="
          We don't just build websites, we build websites that SELLS"
          ></ServicesCard>
        </div>
        <div data-aos="fade-down" data-aos-duration="3000">
          <ServicesCard
            bg="bg-[#feeae3]"
            text="Web Design"
            image={WebDesign}
            pra="
          We don't just build websites, we build websites that SELLS"
          ></ServicesCard>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <ServicesCard
            bg="bg-[#c8ebff]"
            image={app}
            text="Digital Marketing"
            pra="
          We don't just build websites, we build websites that SELLS"
          ></ServicesCard>
        </div>
        <div data-aos="fade-left" data-aos-duration="3000">
          <ServicesCard
            text="App Development"
            image={digital}
            bg="bg-[#eee0f7]"
            pra="
          We don't just build websites, we build websites that SELLS"
          ></ServicesCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
