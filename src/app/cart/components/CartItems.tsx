"use client";
import React, { ReactNode } from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "@/lib/store/hooks";

const CartItems = ({ children }: { children: ReactNode }) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.itemHash} item={cartItem} />;
      })}
      {children}
    </>
  );
};

export default CartItems;
