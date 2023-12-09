

import WebImage from "../../assets/portfolio/flyers.png"
import ProvideServicesImage from '../ProvideServices/ProvideServicesImage';
import ServiceBanner from './ServiceBanner';
import ProvideServicesText from '../ProvideServices/ProvideServicesText';
const WebDesign = () => {
    const web= "lorem skf sfkn vfn nsfjakn fvjnfkn svnjs vvn"
    return (
        <div className=''>
        <ServiceBanner text="Web Design & Development" Image={WebImage} Description={web}></ServiceBanner>
        <h1 className='text-center text-4xl font-semibold my-12'>Services we Provide</h1>
        <hr />
        
        <div className='grid md:grid-cols-1 gap-10 my-6 px-20'>
            <div className='flex items-center justify-between'>
                <ProvideServicesImage></ProvideServicesImage>
                <ProvideServicesText></ProvideServicesText>
            </div>
            <div className='flex flex-row-reverse items-center mt-3 justify-between'>
                <ProvideServicesImage></ProvideServicesImage>
                <ProvideServicesText></ProvideServicesText>
            </div>
        </div>
    </div>  
    );
};

export default WebDesign;