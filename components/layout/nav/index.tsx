import { FunctionComponent, useEffect, useState } from "react";
import NavDesktop from "./desktop";
import NavMobile from "./mobile";
const Nav: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const resizeme = () => {
    setIsMobile(window.innerWidth <= 986);
  };
  useEffect(() => {
    setIsMobile(window.innerWidth <= 986);
    window.addEventListener("resize", resizeme);
    return () => {
      window.removeEventListener("resize", resizeme);
    };
  }, []);
  if (isMobile === undefined) return <></>;
  return !isMobile ? <NavDesktop /> : <NavMobile />;
};

export default Nav;
