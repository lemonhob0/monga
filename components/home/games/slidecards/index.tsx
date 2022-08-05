import { useState } from "react";
import { FunctionComponent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Style from "styles/home/slidecards/index.module.scss";
import CardsList from "./cardslist";
const SlideCards: FunctionComponent = () => {
  const swiper = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState<"right" | "left" | null>("left");
  const swipe = (factor: 1 | -1, direction: "right" | "left") => {
    const myswiper = swiper.current;
    if (!myswiper || !myswiper.firstChild?.firstChild || direction === edge)
      return;
    const numberOfCards = myswiper.firstChild.childNodes.length;
    const scrollLength = myswiper.scrollWidth - myswiper.offsetWidth;
    const newscrollLeft =
      myswiper.scrollLeft + (scrollLength / numberOfCards) * 2.5 * factor;
    myswiper.scrollLeft = newscrollLeft;
    if (
      Math.ceil(newscrollLeft) >=
      Math.ceil(myswiper.scrollWidth - myswiper.offsetWidth)
    )
      return setEdge("right");
    if (newscrollLeft <= 0) return setEdge("left");
    setEdge(null);
  };

  return (
    <>
      <h2>best of this week</h2>
      <section className={Style.slide_container}>
        <div ref={swiper} className={Style.slide_cards}>
          <CardsList />
        </div>
        <button
          onClick={() => swipe(1, "right")}
          className={`${Style.forward} ${Style.swiper} ${
            edge !== "right" ? Style.active : Style.inActive
          }`}
        >
          <FontAwesomeIcon icon={faCircleRight} />
        </button>
        <button
          onClick={() => swipe(-1, "left")}
          className={`${Style.backward} ${Style.swiper} ${
            edge !== "left" ? Style.active : Style.inActive
          }`}
        >
          <FontAwesomeIcon icon={faCircleLeft} />
        </button>
      </section>
    </>
  );
};

export default SlideCards;
