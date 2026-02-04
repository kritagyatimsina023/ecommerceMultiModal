import AdminTitle from "@/components/AdminTitle";
import EntryProduct from "@/components/EntryProduct.action";
import InfoMedia from "@/components/InfoMedia";
import PricingForm from "@/components/PricingForm";
import SearchItem from "@/components/SearchItem";
import React from "react";

const DashBoard = () => {
  return (
    <div className="max-w-7xl">
      <form action={EntryProduct}>
        <SearchItem />
        <AdminTitle />
        <InfoMedia />
        <PricingForm />
      </form>
    </div>
  );
};

export default DashBoard;
