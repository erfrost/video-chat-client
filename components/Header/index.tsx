import styles from "./index.module.css";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
import avatar from "@/assets/avatarWhite.svg";
import User from "@/schemas/User.schema";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

interface HeaderProps {
  user?: User;
}

const Header = ({ user }: HeaderProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const accessToken: string | undefined = getCookie("access_token");
    if (accessToken) setIsAuthorized(true);
    else setIsAuthorized(false);
  }, []);

  return (
    <header>
      <div className="header-container">
        <Link href="/catalog" className="logo-header">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="menu-head">
          <li>
            <Link href="">About Servise</Link>
          </li>
          <li>
            <Link href="">Plans</Link>
          </li>
        </ul>
        <div className="menu-right">
          <div className="head-lean">
            <Link href="">Ru</Link>
            <p>/</p>
            <Link href="">En</Link>
          </div>
          {user && (
            <Link href="/profile" className="profile">
              <Stack
                direction="column"
                alignItems="center"
                gap="5px"
                cursor="pointer"
              >
                <Image
                  src={user.avatar || avatar}
                  width={50}
                  height={50}
                  alt="avatar"
                  className={styles.avatar}
                />
              </Stack>
            </Link>
          )}
        </div>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span className="span-burger"></span>
          </label>
          <ul className="menu__box">
            <li className="content-burger">
              <ul className="list-header">
                <li>
                  <Link href="/profile">Профиль</Link>
                </li>
                <li>
                  <Link href="">About Servise</Link>
                </li>
                <li>
                  <Link href="">Plans</Link>
                </li>
                <li>
                  <Link href="">Ru</Link>
                </li>
                <li>
                  <Link href="">En</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
