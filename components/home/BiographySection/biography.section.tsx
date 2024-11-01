"use client";

import { Section } from "@/components/section";
import BeautifulTitle from "@/components/ui/beautifulTitle";
import { motion } from "framer-motion";
import BioContent from "./bio-content";

export default function BiographySection() {
  return (
    <Section
      id="biography"
      className="min-h-screen relative bg-black w-full p-6 lg:p-12 py-20 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-[2]">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center">
          <BeautifulTitle title="Biographie" />
          <div className="max-w-lg">
            {/* <Motion
              variant="fadeIn"
              animationParams={{
                delay: 0.6,
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="body-overline">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit molestias dicta, similique dolorem animi magni
                maxime neque explicabo, eveniet ipsa a voluptas. Quia dicta esse
                error consequuntur corporis quibusdam repellendus omnis earum,
                repudiandae veniam necessitatibus sunt nam aliquid sit nostrum,
                aliquam officiis quam praesentium quas! Magni aspernatur iure
              </p>
            </Motion> */}
          </div>
        </div>
        <BioContent />
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="absolute top-0 left-0 w-full h-full z-[0]"
        style={{
          backgroundImage: "url('/images/motifs/motif_4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
        transition={{ duration: 1, delay: 2 }}
      ></motion.div>

      {/* Shape z-1 */}
      <div
        className="absolute left-[20%] lg:left-[50%] z-10 bottom-0 w-[40%] h-[15%] lg:w-[20%] lg:h-[20%]"
        style={{
          backgroundImage: "url('/images/illustrations/manuscrit_7.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute left-[-10%] z-10 bottom-0 w-[20%] h-[50%]"
        style={{
          backgroundImage: "url('/images/illustrations/manuscrit_1.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Section>
  );
}
