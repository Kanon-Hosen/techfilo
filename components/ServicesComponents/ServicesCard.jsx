import Image from 'next/image';
// import Link from 'next/link';
// import {BsArrowRight} from 'react-icons/bs'
const ServicesCard = ({ image, text, pra, bg }) => {
    return (
        <div className={` ${bg} rounded-2xl flex flex-col px-8 py-10
         shadow-2xl shadow-gray-300 cursor-pointer md:items-start md:justify-start items-center justify-center hover:scale-105 transition-transform duration-500`}>
            <h1 className='font-bold md:text-2xl text-3xl  text-[#30303c]' >{text}</h1>
            <p className='text-[#696564] md:text-base text-lg md:text-left text-center mt-3 font-medium'>{pra}</p>
            <Image width={200} height={200} src={image} alt="" />
        </div>
    );
};

export default ServicesCard;