"use client";
import React from "react";
import TackCard from "./track-card";
import { Music } from "@/type";

export function MusicsContent({ musics }: { musics: Music[] }) {
  return (
    <>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start py-10">
        {musics.map((music, index) => (
          <TackCard
            key={music.title}
            index={index}
            music={music as unknown as Music}
          />
        ))}
      </ul>
    </>
  );
}
