"use client";
import React, { ReactNode } from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CartItems = ({ children }: { children: ReactNode }) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  if (cartItems.length == 0) {
    return (
      <div className=" flex flex-col justify-center items-center gap-3">
        <h2 className=" flex gap-3 font-semibold text-lg">
          <ShoppingCart />
          Your Cart is Empty
        </h2>
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
