"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const CardComponets = ({ productData }) => {
  const images = productData?.ProductImage || [
    "/watch/watchTwo.avif",
    "/watch/watchThree.avif",
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  useGSAP(() => {
    const headingSplit = SplitText.create(".available", {
      type: "chars",
    });
    const timeline = gsap.timeline();

    timeline.from(headingSplit.chars, {
      yPercent: -150,
      ease: "circ.inOut",
      stagger: 0.04,
    });
  }, []);

  return (
    <div className="rounded-3xl relative min-h-100 px-3 py-3 shadow-md w-80 bg-white">
      {productData.discountPercentage && (
        <div className="absolute -right-5 overflow-hidden top-0 -rotate-10 z-30">
          <div className=" dicount-para   rounded-full px-1.5 py-1 text-center  bg-zinc-900">
            <p className="text-yellow-400   font-semibold text-xs">
              {productData.discountPercentage}% OFF
            </p>
          </div>
        </div>
      )}
      <div className="relative  w-full h-52 rounded-3xl overflow-hidden">
        <Image
          src={images[current]}
          alt="product image"
          fill
          sizes=""
          className="object-cover transition-all duration-300"
        />

        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="px-2 mt-4  h-40 flex flex-col justify-between">
        <div className="">
          <h1 className="text-start  font-bold text-lg ">{productData.name}</h1>
          <p className="text-sm text-neutral-600 mt-1  line-clamp-3">
            {productData.ProductDescription}
          </p>
        </div>
        <div className="flex  justify-between  items-center  mt-3">
          <div className="flex flex-col ">
            <p className="font-bold line-through text-neutral-400">
              Rs {productData.BasePrice}
            </p>
            <p className="font-semibold">Rs {productData.discountedPrice}</p>
          </div>
          <button className="border border-green-800 px-4 py-1 rounded-full text-green-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponets;
