import React, { ReactNode } from "react";

const QuantityChanger = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" flex rounded-full items-center gap-1 h-8 bg-gray-200">
      <button className=" rounded-full px-2 bg-gray-100">+</button>
      <div>{children}</div>
      <button className=" rounded-full px-2 bg-gray-100">-</button>
    </div>
  );
};

export default QuantityChanger;
