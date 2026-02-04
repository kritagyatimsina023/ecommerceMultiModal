"use client";
import React, { useActionState, useEffect } from "react";
import EntryProduct from "./EntryProduct.action";
import { useFormState } from "react-dom";
import { Loader2 } from "lucide-react";

const ProductEntry = () => {
  const [state, formActionProduct, isPending] = useActionState(
    EntryProduct,
    null,
  );
  useEffect(() => {
    if (state) {
      console.log("successfully created", state);
    }
  }, [state]);
  return (
    <section className="text-black border-1 border-black/10 px-3">
      <form action={formActionProduct}>
        <div className="flex flex-col gap-2 my-3">
          <label htmlFor="name">Name</label>
          <input
            className="px-3 py-1 border-1"
            type="text"
            name="name"
            placeholder="enter prooduct name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="productImg">Product Image</label>
          <input
            className="px-3 py-1 border-1"
            type="file"
            accept="image/*"
            name="ProductImage"
            placeholder="add product image"
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label htmlFor="ProductDescription">Product Description</label>
          <input
            className="px-3 py-1 border-1"
            type="text"
            name="ProductDescription"
            placeholder="enter Product Description"
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label htmlFor="ProductClassification">Product Classification</label>
          <input
            className="px-3 py-1 border-1"
            type="text"
            name="ProductClassification"
            placeholder="enter Product Description"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="bg-black text-white rounded-md px-2">
            {isPending ? (
              <span className="flex items-center">
                {" "}
                <Loader2 className="animate-spin" /> Adding Products
              </span>
            ) : (
              "Add product"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProductEntry;
