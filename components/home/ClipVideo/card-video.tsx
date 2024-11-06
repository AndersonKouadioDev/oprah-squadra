"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Modal } from "./modal-video";
// types.ts
export interface Artist {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
  year: string;
}

// Card.tsx
export interface CardProps {
  card: Artist;
}

export default function Card({ card }: CardProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.div className="p-4 w-full max-w-sm group transition-all duration-300 bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col w-full relative">
            <div className="absolute top-0 left-0 w-full rounded-xl flex justify-between items-center p-2 text-neutral-400 group-hover:text-white">
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
            <motion.div>
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full rounded-xl group-hover:border-gray-400 transition-all duration-300 object-cover object-top border border-neutral-600"
              />
            </motion.div>
            <div className="flex w-full justify-center flex-col">
              <motion.h3 className="font-title md:text-left text-base">
                {card.title}
              </motion.h3>
              <motion.p className="text-neutral-400 text-base">
                {card.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-screen-sm mx-auto bg-black/80 border-gray-400">
        <Modal card={card} />
        <DrawerClose className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 text-black">
          <X className="w-4 h-4" />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
