
const PriceCard = ({ plan, price, items, name, bg }) => {
  return (
    <div className=" w-full">
      <div className={`flex flex-col p-6 space-y-6 rounded shadow sm:p-8 ${bg} text-white `}>
        <div className="space-y-2">
          <h4 className="text-2xl font-bold">{plan}</h4>
          <span className="text-6xl font-bold">${price}</span>
        </div>
        <p className="leading-relaxed">{name}</p>
        <ul className="flex-1 space-y-2">
          {items?.map((item, i) => {
            return (
              <li key={i} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                    <span>{item}</span>
              </li>
            );
          })}
        </ul>
        <button
          className="flex items-center justify-center rounded-full  w-full px-5 py-3 font-semibold tracking-wider bg-white text-black"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
