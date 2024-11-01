"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GalleryContent() {
  const images = [
    "/images/image_2.png",
    "/images/image_9.png",
    "/images/image_6.png",
    "/images/image_7.png",
  ];
  return (
    <div className="flex justify-center py-8 items-center">
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
  );
}