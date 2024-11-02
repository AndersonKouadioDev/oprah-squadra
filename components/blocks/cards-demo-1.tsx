"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
// types.ts
interface Artist {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

interface CardProps {
  card: Artist;
  id: string;
  onClick: (card: Artist) => void;
}

export default function CardDemo({ card, id, onClick }: CardProps) {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      onClick={() => onClick(card)}
      className="max-w-xs w-full"
    >
      <motion.div
        layoutId={`image-${card.title}-${id}`}
        className={cn(
          "group cursor-pointer overflow-hidden relative w-full h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent border-neutral-800",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="text relative z-50">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-bold text-xl md:text-3xl text-gray-50 relative"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="font-normal text-base text-gray-50 relative my-4"
          >
            {card.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
