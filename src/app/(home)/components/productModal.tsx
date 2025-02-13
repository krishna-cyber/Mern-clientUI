import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart } from "lucide-react";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/lib/types";
import ToppingCard from "@/components/common/toppingCard";

const ProductModal = ({ product }: { product: ProductType }) => {
  return (
    <Dialog>
      <DialogTrigger className=" h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        Choose
      </DialogTrigger>
      <DialogContent className=" max-w-3xl">
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

            {/* {keys.map((key) => {
              return (
                <div key={key}>
                  <h4 className="mt-6">Choose the {key}</h4>

                  <RadioGroup className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <RadioGroupItem
                        value={"small"}
                        id={"small"}
                        className="peer sr-only"
                        aria-label={"Small"}
                      />
                      <Label
                        htmlFor={"small"}
                        className="flex flex-col items-center text-md justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        {"Small"}
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value={"medium"}
                        id={"medium"}
                        className="peer sr-only "
                        aria-label={"Medium"}
                      />
                      <Label
                        htmlFor={"medium"}
                        className="flex flex-col items-center text-md justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        {"Medium"}
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value={"large"}
                        id={"large"}
                        className="peer sr-only"
                        aria-label={"Large"}
                      />
                      <Label
                        htmlFor={"large"}
                        className="flex flex-col items-center text-md justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        {"Large"}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              );
            })} */}

            <div>
              <h4 className="mt-6">Choose the Size</h4>

              <RadioGroup className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <RadioGroupItem
                    value={"small"}
                    id={"small"}
                    className="peer sr-only "
                    aria-label={"Small"}
                  />
                  <Label
                    htmlFor={"small"}
                    className="flex flex-col items-center text-md justify-between rounded-md border-2 bg-white py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {"Small"}
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value={"medium"}
                    id={"medium"}
                    className="peer sr-only "
                    aria-label={"Medium"}
                  />
                  <Label
                    htmlFor={"medium"}
                    className="flex flex-col items-center text-md justify-between rounded-md border-2  bg-white py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {"Medium"}
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value={"large"}
                    id={"large"}
                    className="peer sr-only"
                    aria-label={"Large"}
                  />
                  <Label
                    htmlFor={"large"}
                    className="flex flex-col items-center text-md justify-between rounded-md border-2  bg-white py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {"Large"}
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h4 className="mt-6">Choose the Toppings</h4>

              <div className=" grid grid-cols-3 gap-4">
                {/* {toppings.map((topping) => {
                  return (
                    <ToppingCard
                      key={topping.id}
                      topping={topping}
                      selectedToppings={selectedToppings}
                      handleCheckBoxCheck={handleCheckBoxCheck}
                    />
                  );
                })} */}
              </div>
            </div>
            <div className=" flex justify-between mt-6">
              <span className=" font-bold">&#8377; 500</span>
              <Button className=" text-lg">
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
