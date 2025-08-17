import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const imageSrc = "/hero-background.png";

  return (
    <section className="w-full h-[80vh] relative">
      <Image
        src={imageSrc}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10 bg-black bg-opacity-30">
        <div className="container space-y-8">


          <div className="max-w-screen-md mx-auto text-4xl sm:text-5xl md:text-6xl font-bold">
            <h1>
              Zan-orthodontics
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-lg sm:text-xl text-gray-300">
            Your path to perfect alignment
          </p>


        </div>
      </div>
    </section>
  );
};
