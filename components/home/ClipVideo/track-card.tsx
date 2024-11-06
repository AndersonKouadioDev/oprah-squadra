"use client";
import { Music, Video } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ClipVideo, Platform } from "@/type";
import Motion from "@/components/motion";

export default function TackCard({
  index,
  clipVideo,
}: {
  index: number;
  clipVideo: ClipVideo;
}) {
  const [platform, setPlatform] = useState<Platform>("music");
  return (
    <Motion
      variant="verticalSlideIn"
      animationParams={{
        stiffness: 200,
        damping: 8,
        mass: 1,
        offset: 100,
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <div className="relative rounded-t-3xl mx-auto h-48 md:h-60 max-w-xl group mb-[28%]">
        {clipVideo.iframes[platform] ? (
          <iframe
            className="rounded-t-3xl bg-neutral-800"
            src={clipVideo.iframes[platform]}
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-gray-800 to-black rounded-t-3xl">
            <p className="text-white font-bold text-lg">
              Aucune vidéo disponible
            </p>
          </div>
        )}
        <div className="py-2 bg-neutral-800 rounded-b-3xl backdrop-blur-lg">
          <PlateformesControl
            clipVideo={clipVideo}
            platform={platform}
            setPlatform={setPlatform}
          />
        </div>
      </div>
    </Motion>
  );
}

export const PlateformesControl = ({
  platform,
  setPlatform,
  className,
  clipVideo,
}: {
  platform: Platform;
  setPlatform: Dispatch<SetStateAction<Platform>>;
  className?: string;
  clipVideo: ClipVideo;
}) => {
  return (
    <div
      className={`w-full px-4 md:px-6 flex gap-2 items-center justify-between ${className}`}
    >
      {platform === "video" ? (
        <MusicButton onClick={() => setPlatform("music")} />
      ) : (
        <VideoButton onClick={() => setPlatform("video")} />
      )}
      <Plaform clipVideo={clipVideo} />
    </div>
  );
};

export const VideoButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[red]/10 flex items-center justify-center rounded-full backdrop-blur-md size-20 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center bg-gradient-to-b from-[red]/30 to-[red] shadow-md rounded-full size-12 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}
      >
        <Video className="size-6 text-white  fill-[red] group-hover:scale-105 scale-100 transition-transform duration-200 ease-out" />
      </div>
    </div>
  );
};

export const MusicButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      className={`bg-blue-500/10 flex items-center justify-center rounded-full backdrop-blur-md size-20 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center bg-gradient-to-b from-blue-500/30 to-blue-500 shadow-md rounded-full size-12 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}
      >
        <Music className="size-6 text-white  fill-blue-500 group-hover:scale-105 scale-100 transition-transform duration-200 ease-out" />
      </div>
    </div>
  );
};

export const Plaform = ({
  clipVideo,
  className,
}: {
  clipVideo: ClipVideo;
  className?: string;
}) => {
  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      <AnimatedTooltip
        imageClassName="h-10 w-10"
        items={[
          {
            id: 1,
            name: "Youtube",
            image: "/images/brands/youtube.png",
            link: clipVideo?.links.youtube,
          },
          {
            id: 2,
            name: "Spotify",
            image: "/images/brands/spotify.png",
            link: clipVideo?.links.spotify,
          },
          {
            id: 3,
            name: "Apple Music",
            image: "/images/brands/apple-music.png",
            link: clipVideo?.links.appleMusic,
          },
          {
            id: 4,
            name: "Boomplay",
            image: "/images/brands/boomplay.png",
            link: clipVideo?.links.boomplay,
          },
          {
            id: 5,
            name: "Deezer",
            image: "/images/brands/deezer.png",
            link: clipVideo?.links.deezer,
          },
        ]}
      />
    </div>
  );
};
