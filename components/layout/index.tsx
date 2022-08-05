import { NextPage } from "next";
import { FunctionComponent, ReactNode } from "react";
import Footer from "./footer";
import Nav from "./nav";

const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
