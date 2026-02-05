"use server";
import Product from "@/app/model/Products";
import { FetchClassifiedProduct } from "@/lib/ServerFetchProducts/ClassifiedProduct";
import React from "react";

const ClassifiedAction = async (formData) => {
  const classifiedValue = formData.get("classifiedValue");
  console.log("Classified Value is ", classifiedValue);
  try {
    const productData = await FetchClassifiedProduct(classifiedValue);
    return productData;
  } catch (error) {
    console.log("Error from form action", error);
    return {
      status: 500,
      message: error,
    };
  }
};

export default ClassifiedAction;
