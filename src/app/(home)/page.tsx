import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
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
          <Tabs defaultValue="Pizza" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pizza">Pizza</TabsTrigger>
              <TabsTrigger value="bevrages">Bevrages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">first contenet</TabsContent>
            <TabsContent value="bevrages">second contenet</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
