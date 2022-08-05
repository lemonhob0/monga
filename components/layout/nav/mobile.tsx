import { faBook, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserIcon from "components/shared/usericon";
import { FunctionComponent } from "react";
import Style from "styles/layout/nav/mobile.module.scss";
import Link from "next/link";
const NavMobile: FunctionComponent = () => {
  return (
    <>
      <div className={Style.auth}>
        <UserIcon />
      </div>
      <nav className={Style.nav_mobile}>
        <ul>
          <Link href={"/"}>
            <li>
              <FontAwesomeIcon size="lg" icon={faHome} />
              <p> home</p>
            </li>
          </Link>
          <Link href={"/discover"}>
            <li className={Style.discover}>
              <FontAwesomeIcon size="lg" icon={faSearch} />
              <p> Discover</p>
            </li>
          </Link>
          <Link href={"/library"}>
            <li>
              <FontAwesomeIcon size="lg" icon={faBook} />
              <p>Library</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
