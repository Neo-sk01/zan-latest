import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <section id="about-us" className="bg-[#78b8e5] container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-12">
        <div className="lg:order-2">
          <Image
            src="/ceramics.svg"
            alt="Ceramic Braces"
            width={500}
            height={500}
            className="mix-blend-multiply"
          />
        </div>
        <div className="lg:order-1">
          <p className="text-2xl text-muted-foreground">About</p>
          <h2 className="text-5xl font-bold mb-4">
            Dr Zukiswa <br />
            Tandokazi Nombakuse
          </h2>
          <p className="text-lg text-muted-foreground mt-8">
            Our practice is led by the highly skilled and compassionate Dr. Nombakuse. With extensive qualifications including a BSc, BChD, a Post-Graduate Diploma in Aesthetic Dentistry, and a Master&rsquo;s in Orthodontics from Wits, she brings a wealth of knowledge and expertise to our community. Dr. Nombakuse is committed to using state-of-the-art technology to ensure your treatment is as comfortable and efficient as possible.
          </p>
        </div>
      </div>
    </section>
  );
};
