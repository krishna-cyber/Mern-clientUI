import { ProductType, Topping } from "@/lib/types";
import { hashProductCartItem } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  product: ProductType;
  chosenConfiguration: {
    [key: string]: string;
  };
  selectedToppings?: Topping[];
  qty?: number;
  itemHash?: string;
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
      const hashedCartItem = hashProductCartItem(action.payload);
      const newItem: CartItem = {
        product: action.payload.product,
        chosenConfiguration: action.payload.chosenConfiguration,
        qty: action.payload.qty,
        ...(action.payload.selectedToppings && {
          selectedToppings: action.payload.selectedToppings,
        }),
        itemHash: hashedCartItem,
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
