import CardComponets from "@/components/CardComponets";
import ClientCard from "@/components/ClientCard";
import { FetchProducts } from "@/lib/ServerFetchProducts/FetchProducts";
import React from "react";

const AllProducts = async () => {
  const data = await FetchProducts();
  // console.log("this is data", data);
  return (
    <section className="min-h-screen flex justify-center">
      <div className=" mt-8 ">
        <h1 className="font-bold text-3xl available overflow-hidden md:text-4xl text-center">
          {data.length > 0 ? "Available Products" : "No products"}
        </h1>
        {/* card components  */}
        <div className=" grid grid-cols-1 relative  md:grid-cols-2 lg:grid-cols-3 justify-center gap-8  mt-4">
          <ClientCard data={data} />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
