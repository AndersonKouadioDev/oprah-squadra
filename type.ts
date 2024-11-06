export type Platform = "music" | "video";

export interface Music {
  authors: string;
  title: string;
  image: string;
  links: {
    youtube: string;
    spotify: string;
    appleMusic: string;
    boomplay: string;
    deezer: string;
  };
  iframes: {
    video: string;
    music: string;
  };
  description: string;
  year: string;
}
