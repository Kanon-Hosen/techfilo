import Image from "next/image";
import Link from "next/link";
function RecentWorkCard({ item }) {
  return (
    <Link href={`/portfolio-details/${item?.name}`} className="rounded-2xl cursor-pointer  z-20 overflow-hidden ">
      <div className="overflow-hidden rounded-2xl md:h-[270px] h-[300px] bg-white relative">
            {item.image.map((item, index) => (
                <Image
                  src={item}
                  alt={item?.name}
                  width={200}
                  height={400}
                  className="bg-center bg-cover object-cover hover:scale-110 h-full w-full  hover:duration-500 transition-transform"
                />
            ))}
        <Image
          width={200}
          height={400}
          // loading="lazy"
          className="bg-center bg-cover object-cover hover:scale-110 h-full w-full  hover:duration-500 transition-transform"
          src={item?.image[0]}
          alt=""
        />
        <p className="bg-black text-white absolute bottom-0 left-0 px-2 py-1 font-normal rounded-tr-xl">
          {item?.category}
        </p>
      </div>
      <div className="py-2 mt-2 flex flex-col gap-3">
        <h1 className="lg:text-xl md:text-xl text-xl font-bold text-slate-900">
          {item?.name}
        </h1>
        <p className="text-slate-600 md:text-base lg:text-lg">
          {item?.subcategory}
        </p>
      </div>
    </Link>
  );
}

export default RecentWorkCard;
