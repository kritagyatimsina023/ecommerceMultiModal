import React from "react";

const AdminDetailPage = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-3  items-center ">
      <div className="rounded-full relative w-10 h-10 border-1 border-neutral-300 flex flex-col text-center justify-center items-center ">
        <img src="/avatar.png" alt="" />
        <span className="rounded-full w-3.5 h-3.5 border-1 border-white bg-green-500 absolute bottom-1 -right-0.5"></span>
      </div>
      <div>
        <h1 className="leading-4 flex flex-col md:flex-row md:gap-1 text-center items-center justify-center">
          <span>Ram</span>
          <span>Shrestha</span>
        </h1>
        <p className="text-start hidden md:inline text-neutral-500">Admin</p>
      </div>
    </div>
  );
};

export default AdminDetailPage;
