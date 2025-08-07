import {
  Smile,
  Users,
  Baby,
  Sparkles,
  Heart,
  Shield,
  Star,
  Crown,
  Zap
} from "lucide-react";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AppointmentScheduler } from "@/components/shared/AppointmentScheduler";

const orthodonticServices = [
  {
    icon: Sparkles,
    title: "Initial Consultation",
    description: "Comprehensive assessment including digital X-rays and 3D imaging."
  },
  {
    icon: Star,
    title: "Traditional Braces",
    description: "Standard braces for children and adolescents."
  },
  {
    icon: Crown,
    title: "Ceramic Braces",
    description: "Aesthetic braces for adults and teens."
  },
  {
    icon: Shield,
    title: "Clear Aligners (Invisalign)",
    description: "Discreet treatment for adult professionals and image-conscious teenagers."
  },
  {
    icon: Heart,
    title: "Retention Programs",
    description: "Retainers and follow-up care post-treatment."
  },
  {
    icon: Zap,
    title: "Orthodontic Monitoring",
    description: "Use of remote consultations and digital check-ins."
  }
];

const ServicesPage = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
            Our Orthodontic Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of orthodontic solutions to create healthy, beautiful smiles for patients of all ages.
          </p>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {orthodonticServices.map((service, index) => {
              const IconComponent = service.icon;
              let imageSrc;
              if (index === 0) {
                imageSrc = "/Copy of ZAN ORTHODONTIST (Your Story).svg";
              } else if (index === 1) {
                imageSrc = "/Copy of ZAN ORTHODONTIST-5.svg";
              } else if (index === 2) {
                imageSrc = "/ChatGPT Image May 6, 2025, 03_03_19 PM.png";
              } else if (index === 3) {
                imageSrc = "/ceramics.svg";
              } else if (index === 4) {
                imageSrc = "/Copy of Black and White Pink Letter 3D Logo.svg";
              } else if (index === 5) {
                imageSrc = "/Copy of ZAN ORTHODONTIST.svg";
              } else {
                imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg";
              }
              
              return (
                <Card key={service.title}>
                  <CardHeader className="pb-1">
                    <IconComponent className="size-4" strokeWidth={1} />
                  </CardHeader>
                  <CardContent className="text-left">
                    <h2 className="mb-1 text-lg font-semibold">{service.title}</h2>
                    <p className="leading-snug text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end pr-0 pb-0">
                    <Image
                      width={400}
                      height={400}
                      role="presentation"
                      className="h-40 w-full rounded-tl-md object-cover object-center"
                      src={imageSrc}
                      alt={`${service.title} illustration`}
                    />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <section id="book-appointment" className="mt-20 container">
        <AppointmentScheduler />
      </section>
    </div>
  );
};

export default ServicesPage;
