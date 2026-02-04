"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const AdminTitle = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 1,
    });
    tl.from(
      ".headings",
      {
        yPercent: 120,
        ease: "power1.in",
      },
      "<",
    )
      .from(
        ".button-1",
        {
          yPercent: -200,
          ease: "power1.inOut",
        },
        "<+=0.2",
      )
      .from(
        ".button-2",
        {
          yPercent: 200,
          ease: "power1.inOut",
        },
        "<+=0.3",
      );
  }, []);
  return (
    <section className=" shadow-md mt-4 rounded-ld">
      <div className="flex md:flex-row justify-between flex-col items-center gap-4 py-3 md:px-3">
        <div className="heading overflow-hidden">
          <h1 className="headings font-bold text-2xl">Add Products</h1>
        </div>
        <div className="flex-col flex overflow-hidden  gap-4 md:flex-row">
          <button
            type="reset"
            className="text-red-500 button-1 border-1 px-2 rounded-md py-1.5"
          >
            Discard Changes
          </button>
          <button className="text-white button-2 bg-blue-500 font-semibold rounded-md px-2 py-1.5">
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
};
export default AdminTitle;
