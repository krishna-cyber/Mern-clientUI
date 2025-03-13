"use client";
import React, { ReactNode } from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CartItems = ({ children }: { children: ReactNode }) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  if (cartItems.length == 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link href={"/"}>
          <Button>Continue shopping</Button>
        </Link>
      </div>
    );
  }
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
