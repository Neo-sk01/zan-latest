"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

interface Sponsor {
  src: string;
  name: string;
}

const sponsors: Sponsor[] = [
  {
    src: "/SADA.svg",
    name: "SADA",
  },
  {
    src: "/HPCSA.svg",
    name: "HPCSA",
  },
  {
    src: "/Ortho SA.svg",
    name: "Ortho SA",
  },
  // Add more sponsors here
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container pb-24 sm:pb-32">


      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center h-20 w-48"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
