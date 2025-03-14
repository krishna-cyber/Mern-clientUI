import { useMemo } from "react";
import { CartItem } from "../store/feature/cartSlice";

export function useCalculateTotal(product: CartItem) {
  const totalPrice = useMemo(() => {
    const toppingTotalPrice = (product.selectedToppings ?? []).reduce(
      (accumulator, currentValue) => {
        return +currentValue.price + accumulator;
      },
      0
    );

    const totalConfigurationPrice = Object.entries(product.chosenConfiguration);
    const totalConfigurationPrice1 = totalConfigurationPrice.reduce(
      (accumulator, [key, value]) => {
        const getPrice =
          product.product.priceConfiguration[key].avilableOptions[value];
        return +getPrice + accumulator;
      },
      0
    );
    return toppingTotalPrice + totalConfigurationPrice1;
  }, [product]);

  return totalPrice;
}
