import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <section id="about-us" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-12">
        <div className="lg:order-2">
          <Image
            src="/demo-img.jpg"
            alt="About Us Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:order-1">
          <h2 className="text-lg text-primary mb-2 tracking-wider">About Us</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Smile, Our Passion
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We are a team of dedicated professionals committed to providing you with the highest quality orthodontic care. Our state-of-the-art facility and personalized treatment plans are designed to help you achieve the beautiful, healthy smile you deserve.
          </p>
        </div>
      </div>
    </section>
  );
};
