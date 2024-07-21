import styles from "./index.module.css";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
import User from "@/schemas/User.schema";
import logo from "@/assets/Logo.png";
import Link from "next/link";

interface HeaderProps {
  user?: User;
}

const Header = ({ user }: HeaderProps) => {
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
                  src={user.avatar}
                  width={50}
                  height={50}
                  alt="avatar"
                  className="avatar"
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
