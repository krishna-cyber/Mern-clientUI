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
      return {
        cartItems: [
          ...state.cartItems,
          {
            product: action.payload.product,
            chosenConfiguration: action.payload.chosenConfiguration,
            qty: action.payload.qty,
            ...(action.payload.selectedToppings && {
              selectedToppings: action.payload.selectedToppings,
            }),
          },
        ],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
