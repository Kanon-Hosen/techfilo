import ContactLink from "@/components/ContactLink";
import Industry from "@/components/Industry";
import SectionService from "@/components/ServicesComponents/Section.service";

const ServicePage = () => {
  return (
    <div>
      <div className=" bg-primary">
        <div className="max-w-[1440px] mx-auto md:px-10 px-6 lg:px-20 text-white h-96 flex items-center justify-center flex-col gap-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="md:w-96 text-center text-base font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
        </div>
      </div>
      <div className="my-16">
        <div className="md:my-20 my-14 max-w-[1440px] mx-auto">
          <SectionService
            title="Design Service"
            btnText="Need a Designer"
            card1Img="https://separateweb.com/demo-reevan/images/icons/web.svg"
            card1Title="Websites Design"
            card1Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
            card2Img="https://separateweb.com/demo-reevan/images/icons/mobile-app.svg"
            card2Title="Mobile Apps Design"
            card2Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
            card3Img="https://separateweb.com/demo-reevan/images/icons/ui.svg"
            card3Title="UX/UI Design"
            card3Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
            card4Img="https://separateweb.com/demo-reevan/images/icons/design-tools.svg"
            card4Title="Branding"
            card4Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
          ></SectionService>
        </div>
        <div className="bg-secondary ">
          <div className="max-w-[1440px] mx-auto py-28">
            <SectionService
              title="Development Service"
              btnText="Need a Developer"
              card1Img="https://separateweb.com/demo-reevan/images/icons/appcode.svg"
              card1Title="App Development"
              card1Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
              card2Img="https://separateweb.com/demo-reevan/images/icons/coding.svg"
              card2Title="Mobile Apps Design"
              card2Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
              card3Img="https://separateweb.com/demo-reevan/images/icons/buy-online.svg"
              card3Title="eCommerce Development"
              card3Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
              card4Img="https://separateweb.com/demo-reevan/images/icons/servers.svg"
              card4Title="Cloud Development"
              card4Text="We create comprehensive and sophisticated yet simple to use interfaces for your web app."
            ></SectionService>
          </div>
        </div>
      </div>
      <Industry></Industry>
      <ContactLink></ContactLink>
    </div>
  );
};

export default ServicePage;
