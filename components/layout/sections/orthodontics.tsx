import React from "react";

export const OrthodonticsSection = () => {
  return (
    <section
      id="orthodontics"
      className="relative h-[700px] bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/background-SVG.svg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-16 text-center">
        <div className="grid md:grid-cols-2 gap-12 p-4 md:p-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">What is Orthodontics?</h3>
            <p className="mb-8">
              Orthodontics is the treatment of irregularities in the teeth and
              jaws. Orthodontic care involves the use of devices such as braces
              to straighten teeth and correct problems with bite.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              What is the difference between Orthodontists and Dentists?
            </h3>
            <p className="mb-8">
              Orthodontists specialise in aligning teeth and jaws, while Dentists
              help patients achieve a cleaner, healthier smile through cleanings,
              x-ray and even surgery.
            </p>

            <h3 className="text-2xl font-bold mb-4">What is an Orthodontist?</h3>
            <p>
              An orthodontist is a dentist trained to diagnose, prevent, and
              treat teeth and jaw irregularities. They correct existing conditions
              and are trained to identify problems that may develop in the
              future. Orthodontists work with people of all ages, from children
              to adults.
            </p>
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6">What Does an Orthodontist Do?</h2>
            <p className="mb-4">
              Orthodontists use fixed and removable dental devices, like braces,
              retainers, and bands, to change the position of teeth in the mouth. They
              treat dental abnormalities, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Crooked teeth</li>
              <li>Bite problems, like an over-bite or an under-bite</li>
              <li>Crowded teeth, or teeth that are too far apart</li>
              <li>Jaw misalignment</li>
            </ul>
            <p>
              The goal of orthodontic care is to improve a patient&rsquo;s bite. Teeth that
              are straight and evenly spaced will align with opposing teeth in the jaw.
              A healthy bite ensures you can eat, chew, and speak properly. In the
              past, seeing an orthodontist was associated with children or teenagers
              who needed braces. However, orthodontists can correct dental
              problems at any age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
