import MuxHeroVideoDialog from "@/components/ui/mux-hero-video-dialog";

export function HeroVideoDialogSection() {
  return (
    <div className="relative container py-10 mx-auto">
      <MuxHeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        playbackId="Ps4T2vVUg5TzRCVQ2HFvJbMw5302O95Rwwcks2qttptI"
        thumbnailSrc="/images/cover.jpg"
        thumbnailAlt="Cover Video"
      />
    </div>
  );
}
