import FullPageMenu from "@/components/FullPageMenu/FullPageMenu";
import AlbumSection from "@/components/home/AlbumSection/album.section";
import HeroSection from "@/components/home/HeroSection/hero.section";

export default function Home() {
  return (
    <div>
      <FullPageMenu />
      <HeroSection />
      <AlbumSection />
    </div>
  );
}
