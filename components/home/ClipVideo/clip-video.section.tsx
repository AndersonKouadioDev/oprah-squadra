"use client";

import { Section } from "@/components/section";
import BeautifulTitle from "@/components/ui/beautifulTitle";
import { motion } from "framer-motion";
import Motion from "@/components/motion";
import Image from "next/image";
import { ClipVideoContent } from "./clip-video.content";
import clipVideos from "@/datas/clip-videos.json";

export default function ClipVideoSection() {
  return (
    <Section
      id="clip-video"
      className="min-h-screen relative bg-black w-full px-6 py-20 lg:px-12 lg:py-32"
    >
      {/* Content */}
      <div className="relative z-[2] flex flex-col gap-10">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center">
          <BeautifulTitle title="Clip Video" />
          <div className="max-w-lg">
            <Motion
              variant="fadeIn"
              animationParams={{
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="body-overline">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit molestias dicta, similique dolorem animi magni
                maxime neque explicabo, eveniet ipsa a voluptas. Quia dicta esse
                error consequuntur corporis quibusdam repellendus omnis earum,
                repudiandae veniam necessitatibus sunt nam aliquid sit nostrum,
                aliquam officiis quam praesentium quas! Magni aspernatur iure
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
          <ClipVideoContent clipVideos={clipVideos} />
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