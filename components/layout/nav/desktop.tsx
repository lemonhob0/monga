import { FunctionComponent } from "react";
import Style from "styles/layout/nav/desktop.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import UserIcon from "components/shared/usericon";
const NavDesktop: FunctionComponent = () => {
  return (
    <nav className={Style.nav_desktop}>
      <div className={Style.links}>
        <Logo />
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/discover"}>
            <li>Discover</li>
          </Link>
          <Link href={"/library"}>
            <li>Library</li>
          </Link>
        </ul>
      </div>
      <Search />
      <Auth />
    </nav>
  );
};

const Logo: FunctionComponent = () => {
  return (
    <Link href={"/"}>
      <div className={Style.logo}>
        <Image layout="fill" src={"/logo.png"} />
      </div>
    </Link>
  );
};

const Search: FunctionComponent = () => {
  return (
    <div className={Style.search}>
      <form>
        <input type="text" placeholder="Type Something..." />
        <button>
          <FontAwesomeIcon size="lg" icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

const Auth: FunctionComponent = () => {
  return (
    <div className={Style.auth}>
      <UserIcon />
    </div>
  );
};

export default NavDesktop;
