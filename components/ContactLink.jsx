import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";

const ContactLink = () => {
  return (
    <div className="bg-[#dff4ff]">
      <div className="max-w-[1440px] mx-auto md:px-10 px-6 flex justify-center gap-10 md:flex-row flex-col items-center py-16 md:justify-between">
        <div
          className="flex md:justify-start md:items-start justify-center items-center flex-col gap-4 md:w-1/2"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <p className="uppercase text-lg text-primary font-medium">
            Contact us
          </p>
          <h1 className="text-slate-900 text-center md:text-left text-3xl md:text-4xl font-bold leading-snug">
            Have a project in mind? Let's get to chat.
          </h1>
          <div className="mt-5 flex items-center gap-8">
            <Link
              href="/contact-us"
              className="flex items-center gap-2 px-8 py-4 hover:text-primary border border-primary hover:bg-white transition-all  bg-primary text-lg rounded-full text-white font-semibold"
            >
              <BsFillTelephoneFill></BsFillTelephoneFill>
              <p>Contact</p>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 hover:text-[#4ee564] border border-[#4ee564] hover:bg-white transition-all  bg-[#4ee564] text-lg rounded-full text-white font-semibold"
            >
              <BsWhatsapp></BsWhatsapp>
              <p> Whatsapp</p>
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="3000">
          <Image
            src="https://separateweb.com/demo-reevan/images/cta/team-support.svg"
            width={500}
            height={500}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
