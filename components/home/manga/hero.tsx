import { FunctionComponent } from "react";
import Image from "next/image";
import Style from "styles/home/hero.module.scss";
const AnimeHero: FunctionComponent = () => {
  return (
    <>
      <div className={Style.hero}>
        <Image
          objectFit="cover"
          alt="Brand logo"
          layout="fill"
          src="/anime.jpg"
        />
      </div>
    </>
  );
};

export default AnimeHero;
