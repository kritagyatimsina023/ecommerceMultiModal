import React from "react";
import ClassifiedAction from "./ClassifiedProduct.action";

const ClassifiedProduct = () => {
  return (
    <form
      action={ClassifiedAction}
      className="flex flex-col gap-4 items-center "
    >
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
        Submit
      </button>
    </form>
  );
};

export default ClassifiedProduct;
