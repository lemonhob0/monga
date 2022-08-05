import { FunctionComponent } from "react";
import Style from "styles/home/announcement.module.scss";
import Link from "next/link";
const Announcement: FunctionComponent = () => {
  return (
    <>
      <h2>Announcement</h2>
      <section className={Style.ann}>
        <article>
          <h1>Create An Account Or Login For A Better Experience</h1>
          <Link href={"/auth/signup"}>
            <button className={Style.signup}>Sign Up</button>
          </Link>
          <Link href={"/auth/login"}>
            <button className={Style.signin}>Login</button>
          </Link>
        </article>
      </section>
    </>
  );
};

export default Announcement;
