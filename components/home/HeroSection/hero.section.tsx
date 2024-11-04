"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HeroVideoDialogSection } from "./heroVideo.section";

export default function HeroSection() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollY, [0, 300], [0, -80]);
  const ySubTitle = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <Section
      id="hero"
      className="min-h-screen z-10 relative bg-black w-full overflow-hidden"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full z-[0]"
        style={{
          backgroundImage: "url('/images/image_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
        transition={{ duration: 1, delay: 2 }}
      ></motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="absolute top-0 left-0 w-full h-full bg-black z-[1]"
        transition={{ duration: 1, delay: 2.3 }}
      ></motion.div>
      {/* Text reverse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed top-20 right-6 lg:right-8 transform -rotate-90 origin-right z-[1]"
      >
        <p className="tracking-widest subtitle text-white whitespace-nowrap">
          oprah squadra
        </p>
      </motion.div>

      <main className="mx-auto flex flex-col gap-10 pt-16 sm:pt-24 md:pt-32 text-center px-4 relative z-[2]">
        <div className="relative">
          <motion.div
            initial={{ scale: 2, height: "80vh" }}
            animate={{ scale: 1, height: "10vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-20 md:mb-32 relative z-20"
            style={{ transformOrigin: "top", y: yTitle }}
          >
            <div className="font-bigTitle text-7xl md:text-[200px]">
              {siteConfig.name}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ y: ySubTitle }}
            className="absolute flex justify-center items-center title-2 md:mt-4 inset-0 top-20 md:top-48 lg:top-54 uppercase z-10"
          >
            <Image
              src="/images/squadra_2.png"
              alt="SQUADRA"
              width={250}
              height={100}
            />
          </motion.div>
        </div>
        <HeroVideoDialogSection />
      </main>
    </Section>
  );
}

// const AudioPlayer = ({ x, y }: { x: number; y: MotionValue<number> }) => {
//   return (
//     <motion.div
//       className="absolute cursor-pointer bottom-48 -left-4 md:left-20 bg-black/20 backdrop-blur-lg text-white p-4 rounded-xl w-80"
//       initial={{ opacity: 0, x: x }}
//       animate={{ opacity: 1, x: 0 }}
//       style={{ y: y }}
//       transition={{ duration: 1, delay: 1 }}
//     >
//       <div className="flex items-center gap-2 mb-3">
//         <Music2 className="w-5 h-5" />
//         <div className="text-start flex-1">
//           <div className="text font-medium">Oprah</div>
//           <div className="text-sm text-gray-300">Élément</div>
//         </div>
//         <AudioLines />
//       </div>
//       {/* Progress Bar */}
//       <div className="w-full bg-gray-700 h-1 rounded-full mb-3">
//         <div className="bg-white w-1/2 h-full rounded-full" />
//       </div>
//       {/* Controls */}
//       <div className="flex items-center justify-center gap-8">
//         <SkipBack className="w-5 h-5" />
//         <Play className="w-8 h-8" />
//         <SkipForward className="w-5 h-5" />
//       </div>
//     </motion.div>
//   );
// };
