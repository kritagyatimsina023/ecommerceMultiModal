"use client";
import { LayoutDashboard, ShoppingBagIcon, ShoppingBasket } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { sideBarBottom, SideBarData } from "@/constants/SideBarData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarCompo = () => {
  const pathName = usePathname();

  return (
    // note here px-1 md:px-4
    <div className="h-full flex flex-col justify-between">
      <section className=" relative  flex flex-col justify-between gap-4 ">
        <div className="mt-3">
          <h1 className="md:px-4 px-1 my-2">E-commerce</h1>
          {SideBarData.map((data, idx) => {
            const isActive = pathName === data.links;
            return (
              <div
                key={data.id}
                className={`flex cursor-pointer transition-all duration-300 ease-in ${isActive ? "" : ""}   py-2 relative items-center gap-1`}
              >
                <Link href={data.links}>
                  <div className="flex transition-colors duration-300 ease-in-out items-center gap-1 px-1 md:px-4 ml-2 md:ml-0">
                    <span
                      className={`transition-colors duration-300 ease-in-out ${isActive ? "text-[#4149F8]" : "text-[#B6B7B8]"}`}
                    >
                      {data.icons}
                    </span>
                    <span
                      className={`transition-colors duration-300 
                      ease-in-out hidden ${
                        isActive ? "text-[#4149F8] font-bold" : "text-[#B6B7B8]"
                      } md:block`}
                    >
                      {data.name}
                    </span>
                  </div>
                </Link>
                {isActive && (
                  <div className="bg-[#4149F8] transition-all duration-300 ease-in-out rounded-r-2xl absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <div className="bg-amber-300/10 py-2">
        {sideBarBottom.map((data, idx) => {
          const isActive = pathName === data.links;
          return (
            <div
              key={data.id}
              className={`flex cursor-pointer transition-all duration-300 ease-in ${isActive ? "" : ""}   py-2 relative items-center gap-1`}
            >
              <div className="flex transition-colors duration-300 ease-in-out items-center gap-1 px-1 md:px-4 ml-2 md:ml-0">
                <span
                  className={`transition-colors ${data.name === "Sign out" ? "text-red-500" : "text-[#B6B7B8]"} duration-300 ease-in-out ${isActive ? "text-[#4149F8]" : "text-[#B6B7B8]"}`}
                >
                  {data.icons}
                </span>
                <span
                  className={`transition-colors duration-300 
                      ease-in-out hidden ${data.name === "Sign out" ? "text-red-500" : "text-[#B6B7B8]"}  ${
                        isActive ? "text-[#4149F8] font-bold" : "text-[#B6B7B8]"
                      } md:block`}
                >
                  {data.name}
                </span>
              </div>

              {isActive && (
                <div className="bg-[#4149F8] transition-all duration-300 ease-in-out rounded-r-2xl absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarCompo;
