import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" bg-white  ">
      <div className=" container py-12 mx-auto flex justify-between items-center">
        <div className=" flex flex-col gap-4">
          <h1 className=" font-semibold text-6xl leading-tight">
            Super Delicious Pizza In <br />
            <span className=" text-primary">Only 45 Minutes!</span>
          </h1>
          <p className=" max-w-lg leading-snug">
            Enjoy a free meal if your order takes more than 45 minutes!
          </p>
          <Button className=" w-fit rounded-full mt-12" size={"lg"}>
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
  );
}
