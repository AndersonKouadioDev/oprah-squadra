"use client";

import { Section } from "@/components/section";
import BeautifulTitle from "@/components/ui/beautifulTitle";
import { motion } from "framer-motion";
import Motion from "@/components/motion";
import Image from "next/image";
import { MusicsContent } from "./musics.content";
import musics from "@/datas/musics.json";

export default function MusicsSection() {
  return (
    <Section
      id="musics"
      className="min-h-screen relative bg-black w-full px-6 py-20 lg:px-12 lg:py-32"
    >
      {/* Content */}
      <div className="relative z-[2] flex flex-col gap-10">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center">
          <BeautifulTitle title="Musiques" />
          <div className="max-w-lg">
            <Motion
              variant="fadeIn"
              animationParams={{
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="body-overline">
                Chaque beat est une nouvelle histoire, chaque track est une
                partie de moi que je partage avec vous. Dans ma musique, je ne
                connais pas les limites, juste la vérité pure de ce que je
                ressens et de ce que je vis. Le rap n&apos;est pas qu&apos;un
                style pour moi, c&apos;est mon moyen d&apos;expression, ma façon
                de crier au monde qui je suis vraiment. Découvrez ici mes sons,
                mes clips, tout ce qui fait vibrer mon univers musical. Ce
                n&apos;est pas juste de la musique, c&apos;est mon histoire.
              </p>
            </Motion>
          </div>
        </div>
        <Motion
          variant="verticalSlideIn"
          animationParams={{
            stiffness: 200,
            damping: 8,
            mass: 1,
            offset: 100,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <MusicsContent musics={musics} />
        </Motion>
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="absolute top-0 left-0 w-full h-full z-[0]"
        style={{
          backgroundImage: "url('/images/motifs/motif_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
        transition={{ duration: 1, delay: 2 }}
      ></motion.div>

      {/* Shape z-1 */}
      <div
        className="absolute left-[20%] lg:left-[50%] z-[1] bottom-0 w-[40%] h-[15%] lg:w-[20%] lg:h-[20%]"
        style={{
          backgroundImage: "url('/images/illustrations/manuscrit_7.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute left-[-10%] z-[1] bottom-0 w-[20%] h-[50%]"
        style={{
          backgroundImage: "url('/images/illustrations/manuscrit_1.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute -top-10 right-0 z-[1]">
        <Image
          src="/images/illustrations/skotch_2.png"
          alt="skotch"
          width={200}
          height={100}
        />
      </div>
    </Section>
  );
}
