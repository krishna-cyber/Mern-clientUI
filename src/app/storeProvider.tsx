"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store/store";
import { setInitialCartItems } from "@/lib/store/feature/cartSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  const isLocalStorageAvilable =
    typeof window !== "undefined" && window.localStorage;

  if (isLocalStorageAvilable) {
    const cartItems = window.localStorage.getItem("cartItems");
    try {
      const parsedItems = JSON.parse(cartItems as string);
      storeRef.current.dispatch(setInitialCartItems(parsedItems));
    } catch (error) {
      console.log(error);
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
