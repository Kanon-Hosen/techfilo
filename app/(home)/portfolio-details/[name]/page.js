"use client"

import { useGetOnePortfolioQuery } from '@/Redux/AppApi/AppApi'
import ContactLink from '@/components/ContactLink';
import Loading from '@/components/Loading';
import Image from 'next/image';

function PortfolioDetails({ params }) {
    console.log(params)
    const { data, isLoading } = useGetOnePortfolioQuery(params?.name);
    const item = data?.data;
    if (isLoading) {
        return <Loading/>
    }
  return (
    <div>
      <div className="w-full overflow-hidden h-[600px]">
        <Image
          className="w-full h-full bg-cover bg-center object-cover"
          src={item?.image[0]}
          alt={item?.name}
          width={1440}
          height={300}
        />
      </div>
      <div className="my-20">
        <h1 className="text-center mt-6 text-5xl font-bold text-neutral-900">
          {item?.name}
        </h1>
          </div>
          <ContactLink/>
    </div>
  );
}

export default PortfolioDetails