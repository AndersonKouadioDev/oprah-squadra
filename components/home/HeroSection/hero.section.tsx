"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { AudioLines, Music2, Play, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [100, 0]);
  //   const y2 = useTransform(scrollY, [0, 300], [50, 0]);
  //   const y3 = useTransform(scrollY, [0, 300], [0, 0]);
  //   const y4 = useTransform(scrollY, [0, 300], [50, 0]);
  //   const y5 = useTransform(scrollY, [0, 300], [100, 0]);
  //   const opcacity = useTransform(scrollY, [0, 300], [0.3, 1]);

  return (
    <Section
      id="hero"
      className="min-h-screen relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/image_5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <main className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center px-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 4.5, height: "80vh" }}
            animate={{ scale: 1, height: "10vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-16 relative z-20"
            style={{ transformOrigin: "top" }}
          >
            <div className="title">{siteConfig.name}</div>
          </motion.div>
          <motion.div
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute flex justify-center items-center title-2 inset-0 top-20 lg:top-28 uppercase z-10"
          >
            <Image
              src="/images/squadra_2.png"
              alt="SQUADRA"
              width={250}
              height={100}
            />
          </motion.div>
        </div>
        <div className="max-w-5xl mx-auto bottom-32">
          <AudioPlayer x={-200} y={y1} />
          <div className="relative top-40 left-40">
            <div className="w-16 h-16 rounded-full border-4 border-white border-dashed" />
          </div>

          <div className="absolute bottom-60 -right-10 md:right-20 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 bg-black h-32 relative">
                <div className="absolute -right-4 top-8 w-8 h-2 bg-white" />
                <div className="absolute -left-4 top-16 w-8 h-2 bg-white" />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
          <motion.img
            src="/images/image_1.jpg"
            alt="iPhone"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/images/image_2.jpg"
            alt="iPhone"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y2 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/images/image_3.jpg"
            alt="iPhone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ y: y3 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/images/image_6.jpg"
            alt="iPhone"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y4 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/images/image_7.jpg"
            alt="iPhone"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y5 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
        </div> */}
      </main>
    </Section>
  );
}

const AudioPlayer = ({ x, y }: { x: number; y: MotionValue<number> }) => {
  return (
    <motion.div
      className="absolute cursor-pointer bottom-48 -left-4 md:left-20 bg-black/20 backdrop-blur-lg text-white p-4 rounded-xl w-80"
      initial={{ opacity: 0, x: x }}
      animate={{ opacity: 1, x: 0 }}
      style={{ y: y }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Music2 className="w-5 h-5" />
        <div className="text-start flex-1">
          <div className="text font-medium">Oprah</div>
          <div className="text-sm text-gray-300">Élément</div>
        </div>
        <AudioLines />
      </div>
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-1 rounded-full mb-3">
        <div className="bg-white w-1/2 h-full rounded-full" />
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-8">
        <SkipBack className="w-5 h-5" />
        <Play className="w-8 h-8" />
        <SkipForward className="w-5 h-5" />
      </div>
    </motion.div>
  );
};
