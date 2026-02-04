"use client";
import React, { useState } from "react";
import { sideBarBottom } from "@/constants/SideBarData";

const PricingForm = () => {
  const [price, setPrice] = useState(0);
  const [dicoundPercent, setDiscountPercentage] = useState(0);
  const [discounted, setDiscounted] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);

  const calculateDiscount = (priceVal, percent) => {
    if (isNaN(priceVal) || isNaN(percent)) return 0;
    return Math.floor(priceVal * (1 - percent / 100));
  };
  const handlePriceChange = (e) => {
    const priceVal = Number(e.target.value);
    setPrice(e.target.value);
    if (isNaN(priceVal)) {
      setPrice(0);
      alert("Please enter number in that field");
      return;
    }
    setDiscounted(calculateDiscount(priceVal, dicoundPercent));
    // if (!isNaN(priceVal)) {
    //   const dicountVal =.
    //     priceVal *
    //     (1 - Number(process.env.NEXT_PUBLIC_DISCOUNT_PERCENTAGE) / 100);
    //   setDiscounted(dicountVal);
    // } else {
    //   setDiscounted(0);
    // }
  };
  const handleDiscountChange = (e) => {
    const percent = Number(e.target.value);
    setDiscountPercentage(percent);
    if (!isNaN(percent)) {
      setDiscounted(calculateDiscount(Number(price), percent));
    }
  };

  return (
    <section className="mt-3 flex flex-col md:flex-row gap-5 mt-4">
      <div className="flex flex-col rounded-md  items-start w-full shadow-md rounded-md px-5 py-6">
        <h1 className="font-semibold overflow-hidden general-heading text-xl">
          Pricing
        </h1>
        <div className="flex flex-col overflow-hidden w-full gap-1 mt-1.5">
          <label htmlFor="BasePrice" className="text-neutral-500 labels">
            Base Price
          </label>
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            name="BasePrice"
            placeholder="Rs"
            className="border-1 inputs outline-none  border-neutral-300 rounded-md"
          />
        </div>
        <div className="flex flex-col overflow-hidden  w-full gap-1 mt-1.5">
          <label htmlFor="discountedPrice" className="text-neutral-500 labels">
            Discount Percentage ({dicoundPercent}%)
          </label>
          <input
            type="text"
            name="discountedPrice"
            value={isDiscount ? discounted : 0}
            readOnly
            className="border-1 inputs outline-none  border-neutral-300 rounded-md"
          />
        </div>

        <div className="flex flex-col overflow-hidden   gap-1 mt-1.5">
          <label
            htmlFor="ProductDescription"
            className="text-neutral-500 labels flex items-center gap-3"
          >
            Discount Type
            <input
              name="discountMode"
              value={isDiscount ? "Discount" : "NoDiscount"}
              type="text"
              readOnly
              className="hidden"
            />
            <div
              onClick={() => setIsDiscount(!isDiscount)}
              className={`relative flex items-center w-16 h-7 rounded-full transition-colors duration-300
    ${isDiscount ? "bg-green-500" : "bg-red-500"}`}
            >
              <span
                className={`absolute top-1 left-1 h-5 w-6 rounded-full bg-white transition-transform duration-300
      ${isDiscount ? "translate-x-8" : "translate-x-0"}`}
              />
            </div>
          </label>
          <select
            disabled={!isDiscount}
            onChange={handleDiscountChange}
            name="discountPercentage"
            className="outline-none inputs bg-transparent text-neutral-500 px-1 py-2 rounded-md border border-neutral-500"
          >
            <option value="0">Select category</option>
            <option value="3">Electronics (3%)</option>
            <option value="4">Fashion (4%)</option>
            <option value="6.65">Home & Kitchen (6.65%)</option>
            <option value="2">Beauty & Personal Care (2%)</option>
            <option value="7.45">Sports & Outdoors (7.45%)</option>
            <option value="6">Toys & Games (6%)</option>
            <option value="6.65">Automotive (6.65%)</option>
            <option value="6.65">Books, Music & Media (6.65%)</option>
            <option value="4.75">Health & Wellness (4.75%)</option>
            <option value="10">Grocery & Gourmet (10%)</option>
          </select>
        </div>
      </div>
      <div className="shadow-md rounded-md md:w-[70%] px-5 py-6 ">
        <h1 className="font-semibold overflow-hidden general-heading">
          Category
        </h1>

        <div className="flex flex-col overflow-hidden   gap-1 mt-1.5">
          <label
            htmlFor="ProductDescription"
            className="text-neutral-500 labels"
          >
            Product Category
          </label>
          <select
            name="ProductClassification"
            className="outline-none inputs bg-transparent text-neutral-500 px-1 py-2 rounded-md border border-neutral-500"
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home_kitchen">Home & Kitchen</option>
            <option value="beauty">Beauty & Personal Care</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="toys">Toys & Games</option>
            <option value="automotive">Automotive</option>
            <option value="books">Books, Music & Media</option>
            <option value="health">Health & Wellness</option>
            <option value="grocery">Grocery & Gourmet</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default PricingForm;
