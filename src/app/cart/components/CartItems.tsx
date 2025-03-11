import React from "react";
import CartItem from "./CartItem";

const cartItems = [
  {
    _id: "cartItem1",
    image:
      "https://ik.imagekit.io/kmnun0v9j/3114244c9e262162560f0655b45e12c4.jpg?updatedAt=1740145005342",
    name: "Margherita Pizza",
    priceConfiguration: {
      size: "Medium",
      crust: "Thin Crust",
      extraToppings: ["Olives", "Cheese"],
    },
    quantity: 2,
    price: 8.99,
  },
  {
    _id: "cartItem2",
    image:
      "https://ik.imagekit.io/kmnun0v9j/3114244c9e262162560f0655b45e12c4.jpg?updatedAt=1740145005342",
    name: "Pepperoni Pizza",
    priceConfiguration: {
      size: "Large",
      crust: "Cheese Burst",
      extraToppings: ["Jalapenos", "Extra Cheese"],
    },
    quantity: 1,
    price: 12.99,
  },
  {
    _id: "cartItem3",
    image:
      "https://ik.imagekit.io/kmnun0v9j/3114244c9e262162560f0655b45e12c4.jpg?updatedAt=1740145005342",
    name: "Veggie Delight Pizza",
    priceConfiguration: {
      size: "Small",
      crust: "Regular",
      extraToppings: ["Onions", "Bell Peppers", "Mushrooms"],
    },
    quantity: 3,
    price: 6.49,
  },
  {
    _id: "cartItem4",
    image:
      "https://ik.imagekit.io/kmnun0v9j/3114244c9e262162560f0655b45e12c4.jpg?updatedAt=1740145005342",
    name: "Cheesy Garlic Bread",
    priceConfiguration: {
      size: "Regular",
      sauce: "Spicy Mayo",
    },
    quantity: 2,
    price: 4.99,
  },
  {
    _id: "cartItem5",
    image:
      "https://ik.imagekit.io/kmnun0v9j/3114244c9e262162560f0655b45e12c4.jpg?updatedAt=1740145005342",
    name: "Chocolate Lava Cake",
    priceConfiguration: {
      size: "Single Serve",
    },
    quantity: 2,
    price: 3.49,
  },
];

const CartItems = () => {
  return (
    <>
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem._id} item={cartItem} />;
      })}
    </>
  );
};

export default CartItems;
