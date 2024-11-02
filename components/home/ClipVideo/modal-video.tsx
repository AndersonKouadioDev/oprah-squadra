"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Artist } from "./card-video";
import { YoutubeIcon } from "lucide-react";

// Modal.tsx
interface ModalProps {
  card: Artist;
}

export const Modal: React.FC<ModalProps> = ({ card }) => {
  return (
    <div className="grid place-items-center">
      <motion.div className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col sm:rounded-3xl overflow-hidden">
        <motion.div>
          <Image
            priority
            width={200}
            height={200}
            src={card.src}
            alt={card.title}
            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
          />
        </motion.div>
        <ModalContent card={card} />
      </motion.div>
    </div>
  );
};

// ModalContent.tsx
interface ModalContentProps {
  card: Artist;
}

const ModalContent: React.FC<ModalContentProps> = ({ card }) => {
  return (
    <div>
      <div className="flex justify-between items-start p-4">
        <div>
          <motion.h3 className="font-medium ext-neutral-200 text-base">
            {card.title}
          </motion.h3>
          <motion.p className="text-neutral-400 text-base">
            {card.description}
          </motion.p>
        </div>
        <motion.a
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          href={card.ctaLink}
          target="_blank"
          className="px-4 py-1 text-sm rounded-[6px] font-bold bg-[red] text-white"
        >
          <span className="flex gap-2 items-center">
            <YoutubeIcon className="w-4 h-4" />
            Youtube
          </span>
        </motion.a>
      </div>
      <div className="pt-4 relative px-4">
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)]"
        >
          <div className="w-full flex justify-between items-center text-white">
            <div className="flex gap-2 items-center">
              <Image
                width={25}
                height={25}
                src="/images/brands/spotify.png"
                alt="spotify"
                className="cursor-pointer"
              />
              <Image
                width={25}
                height={25}
                src="/images/brands/boomplay.png"
                alt="boomplay"
                className="cursor-pointer"
              />
              <Image
                width={25}
                height={25}
                src="/images/brands/apple-music.png"
                alt="apple-music"
                className="cursor-pointer"
              />
              <Image
                width={25}
                height={25}
                src="/images/brands/deezer.png"
                alt="deezer"
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-2 items-center">
              <h3 className="font-bold transition-all duration-300 text-base">
                {card.year}
              </h3>
            </div>
          </div>
          {typeof card.content === "function" ? card.content() : card.content}
        </motion.div>
      </div>
    </div>
  );
};
