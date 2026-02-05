"use client";
import React, { useActionState, useEffect, useState } from "react";
import ClassifiedAction from "./ClassifiedProduct.action";
import { Loader2 } from "lucide-react";
import ClassifiedCard from "./ClassifiedCard";

const ClassifiedProduct = () => {
  const [state, formAction, isPending] = useActionState(ClassifiedAction, null);
  const [productType, setProductType] = useState("");
  useEffect(() => {
    if (state) {
      console.log(state.data);
    }
  }, [state]);
  return (
    <>
      <form action={formAction} className="flex flex-col gap-4 items-center ">
        <select
          name="classifiedValue"
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
        <button
          type="submit"
          className="bg-black text-white px-4 py-1 rounded-md"
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Submit"}
        </button>
      </form>
      <h1 className="font-bold text-4xl uppercase">
        {state?.data?.[0]?.ProductClassification}
      </h1>
      {state?.data.length >= 0 ? (
        <div className="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-4">
          {state?.data?.map((item, idx) => (
            <ClassifiedCard key={idx} data={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1>No Product Found</h1>
        </div>
      )}
    </>
  );
};

export default ClassifiedProduct;
