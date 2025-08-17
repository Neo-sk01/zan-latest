import React from "react";

export const OrthodonticsSection = () => {
  return (
    <section
      id="orthodontics"
      className="relative min-h-[700px] bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/background-SVG.svg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container py-8 sm:py-12 md:py-16 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 p-2 sm:p-4 md:p-6">
          <div className="text-left space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 break-words">What is Orthodontics?</h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-words">
                Orthodontics is the treatment of irregularities in the teeth and
                jaws. Orthodontic care involves the use of devices such as braces
                to straighten teeth and correct problems with bite.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 break-words">
                What is the difference between Orthodontists and Dentists?
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-words">
                Orthodontists specialise in aligning teeth and jaws, while Dentists
                help patients achieve a cleaner, healthier smile through cleanings,
                x-ray and even surgery.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 break-words">What is an Orthodontist?</h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-words">
                An orthodontist is a dentist trained to diagnose, prevent, and
                treat teeth and jaw irregularities. They correct existing conditions
                and are trained to identify problems that may develop in the
                future. Orthodontists work with people of all ages, from children
                to adults.
              </p>
            </div>
          </div>
          <div className="text-left space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 break-words">What Does an Orthodontist Do?</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 break-words">
              Orthodontists use fixed and removable dental devices, like braces,
              retainers, and bands, to change the position of teeth in the mouth. They
              treat dental abnormalities, including:
            </p>
            <ul className="list-disc list-inside mb-3 sm:mb-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed space-y-1 sm:space-y-2">
              <li className="break-words">Crooked teeth</li>
              <li className="break-words">Bite problems, like an over-bite or an under-bite</li>
              <li className="break-words">Crowded teeth, or teeth that are too far apart</li>
              <li className="break-words">Jaw misalignment</li>
            </ul>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-words">
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
