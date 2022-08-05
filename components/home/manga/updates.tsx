import { FunctionComponent, useEffect, useId, useState } from "react";
import Image from "next/image";
import Style from "styles/home/manga/updates.module.scss";

const data = [
  {
    id: 0,
    imgId: "1tNqyJHgGAozGzU_UxxZQnuAVFwVwXq-a",
    title:
      "Fairy Tail 100 Years Quest : dsadjsakldjlkjdlsakjd kldjaslkdjlasjdklasjd",
    sub: "My World",
    chapter: 91,
    date: "29/07/2022",
    freePages: [
      "1poNrSXI5V01ePz_sJxrJdxy6w_GXbgCB",
      "1imt36mc7-rD9mDU3hs92ae1p8DAOCpT-",
      "1aRc7kFVNassaGl46OIlnXTd9c_TWYnyZ",
    ],
  },
  {
    id: 1,
    imgId: "1UV2PBM_2tnGLUvSOD4OI6uLgcXpXlDmr",
    title: "One Punch Man :",
    sub: "Attention",
    chapter: 196,
    date: "04/08/2022",
    freePages: [],
  },
  {
    id: 2,
    imgId: "1bL3f_953gfLBg4VmhyVEcJHe6dEv2-O6",
    title: "Jujutsu Kaisen :",
    sub: "Sakurajima (2)",
    chapter: 192,
    date: "01/08/2022",
    freePages: [
      "1phMcdIp_IMcVnhXEHxU5UchI_PnPjvcF",
      "17XVOl8Ckx8vdtujZ4v1yJZvAP__UwwTG",
    ],
  },
  {
    id: 3,
    imgId: "1tNqyJHgGAozGzU_UxxZQnuAVFwVwXq-a",
    title:
      "Fairy Tail 100 Years Quest : dsadjsakldjlkjdlsakjd kldjaslkdjlasjdklasjd",
    sub: "My World",
    chapter: 91,
    date: "29/07/2022",
    freePages: [
      "1poNrSXI5V01ePz_sJxrJdxy6w_GXbgCB",
      "1imt36mc7-rD9mDU3hs92ae1p8DAOCpT-",
      "1aRc7kFVNassaGl46OIlnXTd9c_TWYnyZ",
    ],
  },
  {
    id: 4,
    imgId: "1UV2PBM_2tnGLUvSOD4OI6uLgcXpXlDmr",
    title: "One Punch Man :",
    sub: "Attention",
    chapter: 196,
    date: "04/08/2022",
    freePages: [],
  },
  {
    id: 5,
    imgId: "1bL3f_953gfLBg4VmhyVEcJHe6dEv2-O6",
    title: "Jujutsu Kaisen :",
    sub: "Sakurajima (2)",
    chapter: 192,
    date: "01/08/2022",
    freePages: [
      "1phMcdIp_IMcVnhXEHxU5UchI_PnPjvcF",
      "17XVOl8Ckx8vdtujZ4v1yJZvAP__UwwTG",
    ],
  },
];
const MangaUpdates: FunctionComponent = () => {
  const [result, setResult] = useState({
    ids: [0, 1, 2, 3],
    cards: [data[0], data[1], data[2], data[3]],
    deadend: false,
  });
  const [loading, setLoading] = useState(false);
  const displayMore = () => {
    if (result.deadend || loading) return;
    setLoading(true);
    const newResult: any = {
      ids: result.ids,
      cards: [],
    };
    for (
      let i = result.ids.length;
      i < data.length && newResult.cards.length < 3;
      i++
    ) {
      newResult.ids.push(data[i].id);
      newResult.cards.push(data[i]);
    }
    let timout = setTimeout(() => {
      setResult({
        ids: newResult.ids,
        cards: [...result.cards, ...newResult.cards],
        deadend: newResult.ids.length === data.length,
      });
    }, 2000);
    return () => {
      clearTimeout(timout);
    };
  };
  useEffect(() => {
    setLoading(false);
  }, [result]);
  const id = useId();
  return (
    <>
      <h2>Manga Upadates</h2>
      <section className={Style.updates}>
        <ul className={Style.list}>
          {result.cards.map((e, i) => (
            <Card
              key={`${id}_${i}`}
              imgId={e.imgId}
              title={e.title}
              sub={e.sub}
              chapter={e.chapter}
              date={e.date}
              freePages={e.freePages}
            />
          ))}
        </ul>
        {!result.deadend && (
          <button onClick={displayMore} className={Style.display_more}>
            {loading ? "loading..." : "display more"}
          </button>
        )}
      </section>
    </>
  );
};

const Card: FunctionComponent<{
  imgId: string;
  title: string;
  sub: string;
  chapter: number;
  date: string;
  freePages: string[];
}> = ({ imgId, title, sub, chapter, date, freePages }) => {
  const [index, setIndex] = useState<number | null>(null);

  let timout: ReturnType<typeof setTimeout>;
  const leave = () => {
    clearTimeout(timout);
    setIndex(null);
  };
  const changeIndex = () => {
    if (!freePages.length) return;
    if (index === null) return setIndex(0);
    clearTimeout(timout);
    timout = setTimeout(() => {
      if (index === freePages.length - 1) setIndex(0);
      else setIndex(index + 1);
    }, 1000);
  };
  useEffect(() => {
    if (index === null) return () => {};
    changeIndex();
  }, [index]);

  return (
    <li onMouseLeave={leave} onMouseEnter={changeIndex}>
      <Page imgId={imgId} freePages={freePages} index={index} />
      <Info
        title={title}
        sub={sub}
        chapter={chapter}
        date={date}
        freePages={freePages.length}
      />
    </li>
  );
};

const Page: FunctionComponent<{
  imgId: string;
  freePages: string[];
  index: number | null;
}> = ({ imgId, freePages, index }) => {
  return (
    <div className={Style.page_container}>
      <div className={Style.image}>
        <Image
          layout="fill"
          src={`https://drive.google.com/uc?export=view&id=${imgId}`}
        />
      </div>
      <div
        className={`${Style.pages}${index !== null ? ` ${Style.isHover}` : ""}`}
      >
        {freePages.map((pageId, i) => (
          <div
            key={`::manga_page_${i}::`}
            className={`${Style.page}${index === i ? ` ${Style.display}` : ""}`}
          >
            <div className={Style.image}>
              <Image
                layout="fill"
                src={`https://drive.google.com/uc?export=view&id=${pageId}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Info: FunctionComponent<{
  title: string;
  sub: string;
  chapter: number;
  date: string;
  freePages: number;
}> = ({ title, sub, chapter, date, freePages }) => {
  return (
    <article>
      <div className={Style.infos}>
        <h3>
          {title} <span>{sub}</span>
        </h3>
        <p>
          Chapter : <b>{chapter}</b> <span>{date}</span>
        </p>
        {freePages > 0 && (
          <button className={Style.freePages}>{freePages} free pages</button>
        )}
      </div>
      <div className={Style.btns}>
        <button className={Style.price}>10$</button>
        <button className={Style.magic}>420P.T</button>
      </div>
    </article>
  );
};

export default MangaUpdates;
