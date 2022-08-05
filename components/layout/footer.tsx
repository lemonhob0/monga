import { FunctionComponent } from "react";
import Style from "styles/layout/footer.module.scss";
import Image from "next/image";
const Footer: FunctionComponent = () => {
  return (
    <footer className={Style.footer}>
      <article>
        <div className={Style.links}>
          <div>
            <h3>Documentation</h3>
            <ul>
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
              <li>link4</li>
            </ul>
          </div>
          <div>
            <h3>Links</h3>
            <ul>
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
              <li>link4</li>
            </ul>
          </div>
          <div>
            <h3>Don't know</h3>
            <ul>
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
              <li>link4</li>
            </ul>
          </div>
        </div>
        <div className={Style.image}>
          <Image layout="fill" src="/logo.png" />
        </div>
      </article>
      <p>All Copyright goes to me</p>
    </footer>
  );
};

export default Footer;
