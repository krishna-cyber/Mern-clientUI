import ProductCard, { Product } from "@/components/common/productCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category } from "@/lib/types";
import Image from "next/image";

const products: Product[] = [
  {
    _id: "1",
    name: "Millet Pizza",
    description: "This is a very tasty pizza.",
    image: "/pizza-main.png",
  },
  {
    _id: "2",
    name: "Millet Pizza",
    description: "This is a very tasty pizza.",
    image: "/pizza-main.png",
  },
  {
    _id: "3",
    name: "Millet Pizza",
    description: "This is a very tasty pizza.",
    image: "/pizza-main.png",
  },
  {
    _id: "4",
    name: "Millet Pizza",
    description: "This is a very tasty pizza.",
    image: "/pizza-main.png",
  },
];

export default async function Home() {
  const response = await fetch(
    `${process.env.API_URL}/api/category/category/`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw Error("Failed to fetch category lists");
  }

  const data = await response.json();
  const result: Category[] = data?.result;

  return (
    <>
      <section className=" bg-white  ">
        <div className=" container py-10 mx-auto flex justify-between items-center">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold text-6xl leading-tight">
              Super Delicious Pizza In <br />
              <span className=" text-primary">Only 45 Minutes!</span>
            </h1>
            <p className=" max-w-lg leading-snug">
              Enjoy a free meal if your order takes more than 45 minutes!
            </p>
            <Button className=" w-fit rounded-full mt-8" size={"lg"}>
              Get your pizza now!
            </Button>
          </div>

          <Image
            src={"/pizza-main.png"}
            width={400}
            height={400}
            alt="main-hero-image"
          />
        </div>
      </section>
      <section>
        <div className=" container mx-auto">
          <Tabs defaultValue={result[0]._id}>
            <TabsList className="grid w-fit grid-cols-2 ">
              {result.map((category) => (
                <TabsTrigger key={category._id} value={category._id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={result[0]._id}>
              <div className=" grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => {
                  return <ProductCard product={product} key={product._id} />;
                })}
              </div>
            </TabsContent>
            <TabsContent value={result[1]._id}>
              {/* Bevrages  */}
              <div className=" grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => {
                  return <ProductCard product={product} key={product._id} />;
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
