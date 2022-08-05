import { FunctionComponent, useId } from "react";
import Image from "next/image";
import Style from "styles/home/slidecards/cardslist.module.scss";
const data = [
  {
    imgUrl: "1l1A8mkpCqYDy_7gc4wb8ze2Ui-98W-xJ",
    title: "UnderTale",
    price: 100,
    points: 4200,
  },
  {
    imgUrl: "15m1kfZ7gc1oxC65afbj1XtKgsNSO12EZ",
    title: "Hades",
    price: 10,
    points: 420,
  },
  {
    imgUrl: "1eWzsJ050T8o2HhBwMS8_LA5aB7g3nx_c",
    title: "Five Nights At Fredy",
    price: 30,
    points: 1260,
  },
  {
    imgUrl: "1HTa17g8heiwbOo9nZVQBkWPkrtVcZ7mG",
    title: "Spiderman",
    price: 20,
    points: 840,
  },
  {
    imgUrl: "1l2QJ61sObxnQol0mvICvIbYEZZn02mYh",
    title: "Super Smash Bros Ultimate",
    price: 26,
    points: 1092,
  },
  {
    imgUrl: "1Mz6bY9de8JEgd8Vt8UIyrfu8TuAiO2fC",
    title: "Celest",
    price: 41,
    points: 1722,
  },
  {
    imgUrl: "1UaYewgzRBI0UsyZ4taFETCXEt3myAnA4",
    title: "Hotline Miami",
    price: 34,
    points: 1428,
  },
  {
    imgUrl: "1Vm0N1J1hrd0lfKQHGyYy0Aj0NDDp_XBE",
    title: "Minecraft",
    price: 30,
    points: 1260,
  },
  {
    imgUrl: "1qWoagwlGyHuug254HW9GGRvjfxm9x1gV",
    title: "Sonic Mania",
    price: 26,
    points: 1092,
  },
];

const CardsList: FunctionComponent = () => {
  const id = useId();
  return (
    <>
      <ul className={Style.cardsList}>
        {data.map((e, i) => (
          <Card
            key={`${id}_${i}`}
            imgUrl={e.imgUrl}
            title={e.title}
            price={e.price}
            points={e.points}
          />
        ))}
      </ul>
    </>
  );
};

const Card: FunctionComponent<{
  imgUrl: string;
  title: string;
  price: number;
  points: number;
}> = ({ imgUrl, title, price, points }) => {
  return (
    <li>
      <div className={Style.image}>
        <Image
          layout="fill"
          src={`https://drive.google.com/uc?export=view&id=${imgUrl}`}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          praesentium repudiandae, perspiciatis magnam ipsam veritatis
          temporibus nemo reprehenderit vero. Corrupti est doloremque a atque
          recusandae iste sapiente eos eveniet magnam.
        </p>
      </div>
      <article>
        <h3>{title}</h3>
        <ul>
          <li>Horror</li>
          <li>Servival</li>
          <li>Rouge Like</li>
        </ul>
        <div>
          <button className={Style.price}>{price}$</button>
          <button className={Style.magic}>{points}P.T</button>
        </div>
      </article>
    </li>
  );
};

export default CardsList;
