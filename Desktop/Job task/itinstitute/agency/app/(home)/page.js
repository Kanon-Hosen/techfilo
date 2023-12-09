import Client from "@/components/Client";
import ContactLink from "@/components/ContactLink";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/ServicesComponents/Services";
import Tastimonials from "@/components/Tastimonials";
function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <RecentWork></RecentWork>
      {/* <About></About> */}
      <Services></Services>
      <Industry></Industry>
      {/* <Portfolio></Portfolio> */}
      <Client></Client>
      <Tastimonials></Tastimonials>
      <ContactLink></ContactLink>
    </div>
  );
}

export default Home;
