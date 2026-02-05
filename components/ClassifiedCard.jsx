import { Clock10 } from "lucide-react";
import React from "react";

const ClassifiedCard = ({ data }) => {
  return (
    <div className="shadow-md md:w-80 md:h-fit rounded-md">
      <div className="group relative transition-all rounded-t-md w-full h-62 group  overflow-hidden bg-black cursor-pointer  duration-300 ease-in-out">
        <img
          className="opacity-60 rounded-t-md group-hover:scale-120  transition-all w-full h-full object-cover  duration-300 ease-in-out group-hover:opacity-100  "
          src={data.ProductImage}
          alt=""
        />
        <div className="bg-[#4F47E5] m-2 hover:text-black transition-all duration-300 ease-in  hover:bg-white text-white absolute top-1 right-5 w-15 h-15 text-center flex flex-col items-center justify-center rounded-full">
          <span className="text-xs">27</span>
          <span className="text-xs">March</span>
        </div>
        <div className="bg-[#4F47E5] absolute bottom-0 hover:text-black hover:bg-white transition-all duration-300 ease-in w-fit px-3 text-white py-2">
          <p>Photos</p>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-8">
        <div className="py-4">
          <h1 className="font-bold text-xl">Best View in NewYork city</h1>
          <p className="text-neutral-400">The city that never sleeps</p>
        </div>
        <div className="flex items-center gap-1 py-9  w-fit">
          <Clock10 />
          <p className="font-bold">6 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default ClassifiedCard;
