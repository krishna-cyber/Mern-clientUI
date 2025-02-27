import { Topping } from "@/components/common/toppingCard";
import { ProductType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  product: ProductType;
  chosenConfiguration: {
    [key: string]: string;
  };
  selectedToppings?: Topping[];
  qty: number;
}
export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = {
        product: action.payload.product,
        chosenConfiguration: action.payload.chosenConfiguration,
        qty: action.payload.qty,
        ...(action.payload.selectedToppings && {
          selectedToppings: action.payload.selectedToppings,
        }),
      };
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify([...state.cartItems, newItem])
      );
      return {
        cartItems: [...state.cartItems, newItem],
      };
    },
    setInitialCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems.push(...action.payload);
    },
  },
});

export const { addToCart, setInitialCartItems } = cartSlice.actions;

export default cartSlice.reducer;
