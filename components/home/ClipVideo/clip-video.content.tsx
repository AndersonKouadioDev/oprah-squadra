"use client";
import React from "react";
import Card, { Artist } from "./card-video";
import cards from "@/datas/clip-video.json";

// ClipVideoContent.tsx
export function ClipVideoContent() {
  return (
    <>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start py-10">
        {cards.map((card) => (
          <Card
            key={card.title}
            card={card as unknown as Artist}
          />
        ))}
      </ul>
    </>
  );
}
