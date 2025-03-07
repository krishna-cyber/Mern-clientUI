import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductType } from "./types";
import _ from "lodash";
import { CartItem } from "./store/feature/cartSlice";
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMinimumProductPrice(product: ProductType) {
  const basePrice = _.keys(product.priceConfiguration)
    .map((key) => {
      return Object.values(product.priceConfiguration[key].avilableOptions);
    })
    .reduce((accumulator, currentValue) => {
      const minimumPrice = Math.min(...currentValue);
      return accumulator + minimumPrice;
    }, 0);

  //step 1 ['key1','key2','key3']
  //[[90,100,150],[10,20],[0,25,20,30]] get array of price from priceConfiguration
  //last step get sum of minimum from each array

  return basePrice;
}

export function hashProductCartItem(product: CartItem): string {
  const cartItem = JSON.stringify({ product, qty: undefined });

  const hashedValue = CryptoJS.SHA256(cartItem).toString();

  return hashedValue;
}
