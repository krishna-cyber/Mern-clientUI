"use client";

import dynamic from "next/dynamic";
import React from "react";
const CartMenu = () => {
  const NoSSR = dynamic(() => import("../common/shoppingCart"), { ssr: false });

  return <NoSSR />;
};

export default CartMenu;
