import Product from "@/app/model/Products";
import ClassifiedProduct from "@/components/ClassifiedProduct";
import React from "react";

const Products = () => {
  // const productGrocery = await Product.find({
  //   ProductClassification: "grocery",
  // });
  // console.log("This is product from Products ", productGrocery);
  // const productElectroincs = await Product.find({
  //   ProductClassification: "electronics",
  // });
  // console.log("Product Electronics", productElectroincs);
  return (
    <section>
      <ClassifiedProduct />
    </section>
  );
};

export default Products;
