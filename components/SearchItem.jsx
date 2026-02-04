import { Search } from "lucide-react";
import React from "react";
import AdminDetailPage from "./AdminDetailPage";

const SearchItem = () => {
  return (
    <div
      className="mx-auto max-w-7xl px-9
       py-4 md:px-30 relative flex justify-between 
    items-center    mt-4"
    >
      <div>
        <Search
          size={18}
          className="text-neutral-400 shadow-md absolute mt-2 ml-1"
        />
        <input
          type="text"
          className="border-1 border-gray-400 px-9 rounded-md py-1 outline-none"
          placeholder="Search Stock or orders"
        />
      </div>
      <AdminDetailPage />
    </div>
  );
};

export default SearchItem;
