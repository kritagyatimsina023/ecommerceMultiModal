"use server";
import Product from "@/app/model/Products";
import { FetchClassifiedProduct } from "@/lib/ServerFetchProducts/ClassifiedProduct";
import React from "react";

const ClassifiedAction = async (prevState, formData) => {
  const classifiedValue = formData.get("classifiedValue");
  return await FetchClassifiedProduct(classifiedValue);
};

export default ClassifiedAction;
