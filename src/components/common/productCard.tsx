import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { ProductType } from "@/lib/types";
import _ from "lodash";
import ProductModal from "@/app/(home)/components/productModal";
import { getMinimumProductPrice } from "@/lib/utils";

export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface PropType {
  product: ProductType;
}

const ProductCard = ({ product }: PropType) => {
  const keys = _.keys(product.priceConfiguration);

  const avilableOptions = keys.map((key) => {
    return product.priceConfiguration[key]?.avilableOptions;
  });

  return (
    <Card className=" w-lg rounded-lg">
      <CardHeader>
        <Image
          src={product?.image[0]}
          alt={product?.name}
          height={140}
          width={140}
        />
      </CardHeader>
      <CardContent>
        <h1 className=" text-2xl font-bold ">{product?.name}</h1>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className=" flex justify-between items-center">
        <p>
          <span>From </span>
          <span className=" font-bold">
            ${getMinimumProductPrice(product)}{" "}
          </span>
        </p>
        <ProductModal product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
