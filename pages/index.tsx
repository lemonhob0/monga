import AnimeHero from "components/home/manga/hero";
import GameHero from "components/home/games/hero";
import { NextPage } from "next";
import Style from "styles/home/index.module.scss";
import SlideCards from "components/home/games/slidecards";
import Announcement from "components/home/announcement";
import MangaUpdates from "components/home/manga/updates";
const Home: NextPage = () => {
  return (
    <main className={Style.home}>
      <GameHero />
      <SlideCards />
      <Announcement />
      <AnimeHero />
      <MangaUpdates />
    </main>
  );
};

export default Home;
