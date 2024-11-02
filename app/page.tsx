import FullPageMenu from "@/components/FullPageMenu/FullPageMenu";
import AlbumSection from "@/components/home/AlbumSection/album.section";
import BiographySection from "@/components/home/BiographySection/biography.section";
import ClipVideoSection from "@/components/home/ClipVideo/clip-video.section";
import HeroSection from "@/components/home/HeroSection/hero.section";

export default function Home() {
  return (
    <div>
      <FullPageMenu />
      <HeroSection />
      <AlbumSection />
      <ClipVideoSection />
      <BiographySection />
    </div>
  );
}
