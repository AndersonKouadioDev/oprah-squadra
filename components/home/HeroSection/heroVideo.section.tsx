import HeroVideoDialog from "@/components/ui/hero-video-dialog";
export function HeroVideoDialogSection() {
  return (
    <div className="relative container max-w-screen-lg py-10 mx-auto">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc={"/videos/cover_oprah.mp4"}
        thumbnailSrc="/images/cover.jpg"
        thumbnailAlt="Cover Video"
      />
    </div>
  );
}
