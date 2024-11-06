"use client";
import React from "react";
import TackCard from "./track-card";
import { ClipVideo } from "@/type";

// ClipVideoContent.tsx
export function ClipVideoContent({ clipVideos }: { clipVideos: ClipVideo[] }) {
  return (
    <>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start py-10">
        {clipVideos.map((clipVideo, index) => (
          <TackCard
            key={clipVideo.title}
            index={index}
            clipVideo={clipVideo as unknown as ClipVideo}
          />
        ))}
      </ul>
    </>
  );
}
