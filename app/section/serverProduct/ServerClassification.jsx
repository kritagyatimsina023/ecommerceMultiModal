import { FetchClassifiedProduct } from "@/lib/ServerFetchProducts/ClassifiedProduct";
import React from "react";

const ServerClassification = async () => {
    const product = await FetchClassifiedProduct()
  return <div>ServerClassification</div>;
};

export default ServerClassification;
