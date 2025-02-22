"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { ProductType } from "@/lib/types";
import ToppingCard, { Topping } from "@/components/common/toppingCard";
import { DialogTitle } from "@radix-ui/react-dialog";
import _ from "lodash";

interface Props {
  product: ProductType;
}

const ProductModal = ({ product }: Props) => {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [toppings, setToppings] = useState<Topping[]>([]);

  const [selectedConfiguration, setSelectedConfiguration] = useState<{
    [key: string]: string;
  }>();

  const keys = _.keys(product.priceConfiguration);

  const avilableOptions = keys.map((key) => {
    return product.priceConfiguration[key]?.avilableOptions;
  });

  const handleSelectedToppings = (topping: Topping) => {
    setSelectedToppings(
      (prev) =>
        prev.some((i) => i._id === topping._id)
          ? prev.filter((i) => i._id !== topping._id) // Remove if already exists
          : [...prev, topping] // Add if not in array
    );
  };

  const handleCart = () => {
    //Todo
    console.log(`Adding to cart ....`);
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category/topping`)
      .then((res) => res.json())
      .then((data) => {
        setToppings(data.result);
      });
  }, []);

  const handlePriceConfiguration = (key: string, value: string) => {
    console.log(key, value);

    setSelectedConfiguration((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return (
    <Dialog>
      <DialogTrigger className=" h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        Choose
      </DialogTrigger>
      <DialogContent className=" max-w-3xl">
        <DialogTitle />
        <div className=" flex justify-between">
          <div className=" w-1/3 bg-white p-6 rounded-md flex justify-center items-center ">
            <Image
              src={product?.image[0]}
              width={400}
              height={400}
              alt={product.name}
            />
          </div>
          <div className=" w-2/3">
            <h2 className=" text-2xl font-bold">{product.name}</h2>
            <h4>{product.description}</h4>

            {keys.map((key, index) => (
              <div key={key}>
                <h4 className="mt-6">Choose the {_.capitalize(key)}</h4>
                <RadioGroup
                  onValueChange={(data) => {
                    handlePriceConfiguration(key, data);
                  }}
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  {Object.entries(avilableOptions[index]).map(
                    ([key, price]) => (
                      <span key={key}>
                        <RadioGroupItem
                          value={price}
                          id={key}
                          className="peer sr-only "
                          aria-label={_.capitalize(key)}
                        />
                        <Label
                          htmlFor={key}
                          className="flex flex-col items-center text-md justify-between rounded-md border-2 bg-white py-1 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {_.capitalize(key)}
                        </Label>
                      </span>
                    )
                  )}
                </RadioGroup>
              </div>
            ))}

            <Suspense fallback={"Loading..."}>
              {product.categoryId.name == "Pizza" && (
                <div>
                  <h4 className="mt-6">Choose the Toppings</h4>

                  <div className=" grid grid-cols-3 gap-4 mt-2">
                    {toppings.map((topping: Topping) => {
                      return (
                        <ToppingCard
                          key={topping._id}
                          topping={topping}
                          selectedToppings={selectedToppings}
                          handleCheckBoxCheck={handleSelectedToppings}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </Suspense>

            <div className=" flex justify-between mt-6">
              <span className=" font-bold">&#8377; 500</span>
              <Button className=" text-lg" onClick={handleCart}>
                <ShoppingCart size={20} />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
