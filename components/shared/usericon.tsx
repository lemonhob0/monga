import { FunctionComponent } from "react";
import Style from "styles/shared/usericon.module.scss";
import Link from "next/link";
const UserIcon: FunctionComponent = () => {
  return (
    <Link href={"/auth"}>
      <div className={Style.usericon}></div>
    </Link>
  );
};

export default UserIcon;
