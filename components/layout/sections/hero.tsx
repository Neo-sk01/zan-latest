"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const images = [
    "/demo-img.jpg",
    "/hero-image-dark.jpeg",
    "/hero-image-light.jpeg",
  ];

  return (
    <section className="w-full h-[80vh] relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full border-none rounded-none">
                <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10 bg-black bg-opacity-30">
        <div className="space-y-8">


          <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold">
            <h1>
              Zan-orthodontics
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-gray-300">
            Your path to perfect alignment
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
