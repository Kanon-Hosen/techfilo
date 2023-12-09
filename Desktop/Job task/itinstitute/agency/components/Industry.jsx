import Image from "next/image";

const Industry = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:px-10 px-6 md:mt-40 mb-20 h-full">
      <h1  className='md:text-4xl text-3xl font-bold text-center text-slate-800' data-aos="fade-down" data-aos-duration="3000">Industries We Serve</h1>
      <p data-aos="fade-up" data-aos-duration="3000" className="text-center text-base text-[#696564] font-medium mt-3">
        Our design process follows a proven approach. We begin with a deep
        understanding of <br></br> your needs and create a planning template.
          </p>
          <div className="my-10 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-7">
              <div data-aos="fade-right" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/house.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Real estate</p>
              </div>
              <div data-aos="fade-right" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/travel-case.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Tour & Travels</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/video-tutorials.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Education</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/taxi.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Transport</p>
              </div>
              <div data-aos="fade-right" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/event.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Event</p>
              </div>
              <div data-aos="fade-right" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/smartphone.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">eCommerce</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/joystick.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Game</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/healthcare.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Healthcare</p>
              </div>
              <div data-aos="fade-right" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/money-growth.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Finance</p>
              </div>
              <div data-aos="fade-right" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/baker.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Restaurant</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/mobile-app.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">On-Demand</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center rounded-lg justify-center gap-3 bg-gray-100 px-3 py-4">
                  <Image  height={100}   width={100} className="w-12" src="https://separateweb.com/demo-reevan/images/icons/groceries.svg" alt="" />
                  <p className="md:text-lg text-base text-slate-900 font-semibold">Grocery</p>
              </div>
            
          </div>
    </div>
  );
};

export default Industry;
