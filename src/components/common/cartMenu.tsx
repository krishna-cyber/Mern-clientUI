"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartMenu = () => {
  const cartItems = useAppSelector((state) => state.cart?.cartItems);
  return (
    <Link
      href={"/cart"}
      className=" relative cursor-pointer hover:text-primary"
    >
      <ShoppingCart />
      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        {cartItems?.length}
      </div>
    </Link>
  );
};

export default CartMenu;
