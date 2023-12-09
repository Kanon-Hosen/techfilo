import PriceCard from "@/components/PriceCard";

const Price = () => {
  return (
    <section className="">
      <div className="">
        <div className="mx-auto mb-16 text-center bg-orange-300 h-96 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold lg:text-6xl text-white leading-loose">
            No Hidden Charges! <br></br> Choose your plan
          </h2>
        </div>
        <div className="my-10 md:px-20 px-6">
          <h1 className="text-center font-bold text-5xl">Logo Design</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
            <PriceCard
              plan="BASIC PLAN"
              name="Logo Only"
              price="150"
              items={[
                "3 Concepts",
                " Source File",
                " High Resolution",
                " Logo Transparency",
                "Unlimited Revisions",
                "3 Days Delivery",
              ]}
              bg="bg-blue-700"
            ></PriceCard>
            <PriceCard
              plan="BASIC PLAN"
              name="Logo Only"
              price="150"
              items={[
                "3 Concepts",
                " Source File",
                " High Resolution",
                " Logo Transparency",
                "Unlimited Revisions",
                "3 Days Delivery",
              ]}
              bg="bg-green-700"
            ></PriceCard>
            <PriceCard
              plan="BASIC PLAN"
              name="Logo Only"
              price="150"
              items={[
                "3 Concepts",
                " Source File",
                " High Resolution",
                " Logo Transparency",
                "Unlimited Revisions",
                "3 Days Delivery",
              ]}
              bg="bg-indigo-700"
            ></PriceCard>
          </div>
        </div>
        <div className="my-44 relative ">
          <div className="w-full absolute -top-16 -z-10 h-96 bg-gradient-to-tr to-blue-700 from-green-500 "></div>
          <div className=" md:px-20 px-6 z-30">
            <h1 className="text-center font-bold md:text-5xl text-3xl text-white">
              Lead Magnet / E-book / PDF
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              <PriceCard
                plan="BASIC PLAN"
                name="Logo Only"
                price="150"
                items={[
                  "3 Concepts",
                  " Source File",
                  " High Resolution",
                  " Logo Transparency",
                  "Unlimited Revisions",
                  "3 Days Delivery",
                ]}
                bg="bg-orange-500"
              ></PriceCard>
              <PriceCard
                plan="BASIC PLAN"
                name="Logo Only"
                price="150"
                items={[
                  "3 Concepts",
                  " Source File",
                  " High Resolution",
                  " Logo Transparency",
                  "Unlimited Revisions",
                  "3 Days Delivery",
                ]}
                bg="bg-lime-700"
              ></PriceCard>
              <PriceCard
                plan="BASIC PLAN"
                name="Logo Only"
                price="150"
                items={[
                  "3 Concepts",
                  " Source File",
                  " High Resolution",
                  " Logo Transparency",
                  "Unlimited Revisions",
                  "3 Days Delivery",
                ]}
                bg="bg-purple-700"
              ></PriceCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
