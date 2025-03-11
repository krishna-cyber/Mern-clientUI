import Image from "next/image";
import React from "react";
import QuantityChanger from "./QuantityChanger";

const cartItem = {
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
};

const CartItem = ({ item }) => {
  return (
    <>
      <div className=" flex justify-between items-center py-2 ">
        <div className="flex items-center">
          <Image
            alt={cartItem.name}
            width={100}
            height={100}
            src={cartItem.image}
          />
          <h3>{cartItem.name}</h3>
        </div>
        <div>
          <QuantityChanger>{cartItem.quantity}</QuantityChanger>
        </div>
        <div>{cartItem.price}</div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
