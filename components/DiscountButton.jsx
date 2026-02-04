import React from "react";

const DiscountButton = () => {
  return (
    <button
      onClick={() => setIsDiscount(!isDiscount)}
      className={`rounded-full ${isDiscount ? "bg-green-500" : "bg-red-400"}  px-1 py-1`}
    >
      (off)
    </button>
  );
};

export default DiscountButton;
