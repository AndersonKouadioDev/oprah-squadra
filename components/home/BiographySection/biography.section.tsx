"use client";

import Motion from "@/components/motion";
import { Section } from "@/components/section";
import BeautifulTitle from "@/components/ui/beautifulTitle";
import { motion } from "framer-motion";
import Image from "next/image";

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
            <Motion
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
            </Motion>
          </div>
        </div>
        <AnimatedModalDemo />
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

export function AnimatedModalDemo() {
  const images = [
    "/images/image_1.png",
    "/images/image_9.png",
    "/images/image_6.png",
    "/images/image_7.png",
    "/images/image_2.png",
    "/images/image_5.png",
  ];
  return (
    <div className="py-10 flex flex-col gap-10">
      <p className="body mx-auto max-w-3xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maiores
        nisi ab eveniet obcaecati quas? Vel animi quam similique obcaecati
        doloremque placeat quae reprehenderit? Molestias, provident veniam? Ad
        voluptas rerum, blanditiis consequuntur quod eius tempore autem dicta
        iure officiis odit quas quasi consectetur aspernatur inventore, ea
        itaque officia. Rem porro blanditiis aut sapiente magnam, soluta
        tempore. Quibusdam, temporibus libero molestias accusamus sunt tenetur
        sit facere in, assumenda non eaque ad ipsa iste cum cupiditate!
        Similique, libero voluptates inventore est aspernatur expedita explicabo
        nobis sit, perferendis nostrum quidem iure officiis perspiciatis id
        blanditiis qui laboriosam ab autem eius numquam accusantium!
        Voluptatibus?
      </p>
      <div className="flex justify-center items-center">
        {images.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
