import Image from "next/image";
import styles from "./index.module.css";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const Footer = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const accessToken: string | undefined = getCookie("access_token");
    if (accessToken) setIsAuthorized(true);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-left">
            <Link href="">
              <Image src={logo} alt="logo" />
            </Link>
            <p>
              Name is a tool to help increase online sales by growing website
              conversions and offering personalized customer service.
            </p>
            <h5>
              © Logo, 2020–2024 <br />
              Technical support: <Link href="">support@example.ru</Link>
            </h5>
          </div>
          <div className="footer-container-block">
            <h3>О проекте</h3>
            <ul>
              <li>
                <Link href="">Возможности</Link>
              </li>
              <li>
                <Link href="">Приимущества</Link>
              </li>
              <li>
                <Link href="">Для кого?</Link>
              </li>
              <li>
                <Link href="">Подписки</Link>
              </li>
              <li>
                <Link href="">Как пользоваться?</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container-right">
            {!isAuthorized && (
              <Link href="/signUp" className="btn-register-footer">
                Регистрация
              </Link>
            )}
            <div className="footer-social">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M23.2198 4.60325L19.9658 19.9487C19.7204 21.0318 19.0801 21.3013 18.1703 20.7912L13.2125 17.1376L10.8203 19.4385C10.5556 19.7032 10.3341 19.9247 9.82388 19.9247L10.18 14.8752L19.369 6.57195C19.7685 6.2158 19.2824 6.01841 18.748 6.37461L7.38826 13.5275L2.49774 11.9968C1.43396 11.6646 1.41474 10.933 2.71913 10.4228L21.8479 3.05333C22.7335 2.72122 23.5086 3.25062 23.2198 4.60325Z"
                    fill="url(#paint0_linear_3128_27773)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3128_27773"
                      x1="1.71875"
                      y1="2.95703"
                      x2="25.9942"
                      y2="15.9853"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A088FB" />
                      <stop offset="1" stopColor="#B8A6FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M23.8 7.3C23.8 7.1 23.5 5.5 22.8 4.8C21.9 3.8 20.9 3.7 20.4 3.7H20.3C17.2 3.5 12.6 3.5 12.5 3.5C12.5 3.5 7.8 3.5 4.7 3.7H4.6C4.1 3.7 3.1 3.8 2.2 4.8C1.5 5.6 1.2 7.2 1.2 7.4C1.2 7.5 1 9.3 1 11.2V12.9C1 14.8 1.2 16.6 1.2 16.7C1.2 16.9 1.5 18.5 2.2 19.2C3 20.1 4 20.2 4.6 20.3H4.9C6.7 20.5 12.2 20.5 12.4 20.5C12.4 20.5 17.1 20.5 20.2 20.3H20.3C20.8 20.2 21.8 20.1 22.7 19.2C23.4 18.4 23.7 16.8 23.7 16.6C23.7 16.5 23.9 14.7 23.9 12.8V11.1C24 9.3 23.8 7.4 23.8 7.3ZM16.4 12.2L10.4 15.4C10.3 15.4 10.3 15.5 10.2 15.5C10.1 15.5 10 15.5 10 15.4C9.9 15.3 9.8 15.2 9.8 15V8.5C9.8 8.3 9.9 8.2 10 8.1C10.1 8 10.3 8 10.5 8.1L16.5 11.3C16.7 11.4 16.8 11.5 16.8 11.7C16.8 11.9 16.6 12.1 16.4 12.2Z"
                    fill="url(#paint0_linear_3128_27775)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3128_27775"
                      x1="1"
                      y1="3.5"
                      x2="25.2951"
                      y2="18.248"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A088FB" />
                      <stop offset="1" stopColor="#B8A6FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M22.8664 6.37727C22.0856 6.72379 21.2572 6.95084 20.4089 7.05079C21.3028 6.51644 21.9715 5.67495 22.2902 4.68352C21.4504 5.18218 20.5315 5.53353 19.5733 5.72237C19.173 5.29524 18.6893 4.95489 18.1521 4.72244C17.6149 4.49 17.0357 4.37041 16.4503 4.3711C14.0877 4.3711 12.1721 6.28668 12.1721 8.64972C12.1721 8.98458 12.2098 9.31097 12.283 9.62466C8.72705 9.44601 5.57406 7.74294 3.46375 5.15426C3.08313 5.80725 2.88324 6.54982 2.88463 7.30564C2.88463 8.78984 3.63986 10.0996 4.78793 10.8667C4.10849 10.8452 3.44403 10.6616 2.84992 10.3312L2.84949 10.3854C2.84949 12.458 4.32439 14.1869 6.28188 14.5806C5.65158 14.7512 4.99071 14.7761 4.34936 14.6534C4.89419 16.3531 6.47407 17.5905 8.34605 17.6248C6.83059 18.8144 4.95898 19.4596 3.03237 19.4566C2.68736 19.4566 2.34657 19.4362 2.01172 19.3964C3.96797 20.6538 6.24493 21.3212 8.57041 21.3188C16.4406 21.3188 20.7438 14.7995 20.7438 9.14544C20.7438 8.96002 20.74 8.77503 20.7319 8.5913C21.5697 7.98645 22.2926 7.23664 22.8664 6.37727Z"
                    fill="url(#paint0_linear_3128_27777)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3128_27777"
                      x1="2.01172"
                      y1="4.37109"
                      x2="25.154"
                      y2="17.1884"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A088FB" />
                      <stop offset="1" stopColor="#B8A6FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M18.0859 13.5L18.7525 9.15656H14.5848V6.33797C14.5848 5.14969 15.167 3.99141 17.0336 3.99141H18.9283V0.293438C18.9283 0.293438 17.2089 0 15.565 0C12.1328 0 9.88937 2.08031 9.88937 5.84625V9.15656H6.07422V13.5H9.88937V24H14.5848V13.5H18.0859Z"
                    fill="url(#paint0_linear_3128_27779)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3128_27779"
                      x1="6.07422"
                      y1="0"
                      x2="23.6901"
                      y2="4.24649"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A088FB" />
                      <stop offset="1" stopColor="#B8A6FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M21.5 1.5H3.49531C2.67031 1.5 2 2.17969 2 3.01406V20.9859C2 21.8203 2.67031 22.5 3.49531 22.5H21.5C22.325 22.5 23 21.8203 23 20.9859V3.01406C23 2.17969 22.325 1.5 21.5 1.5ZM8.34687 19.5H5.23438V9.47812H8.35156V19.5H8.34687ZM6.79062 8.10938C5.79219 8.10938 4.98594 7.29844 4.98594 6.30469C4.98594 5.31094 5.79219 4.5 6.79062 4.5C7.78437 4.5 8.59531 5.31094 8.59531 6.30469C8.59531 7.30312 7.78906 8.10938 6.79062 8.10938ZM20.0141 19.5H16.9016V14.625C16.9016 13.4625 16.8781 11.9672 15.2844 11.9672C13.6625 11.9672 13.4141 13.2328 13.4141 14.5406V19.5H10.3016V9.47812H13.2875V10.8469H13.3297C13.7469 10.0594 14.7641 9.22969 16.2781 9.22969C19.4281 9.22969 20.0141 11.3062 20.0141 14.0062V19.5Z"
                    fill="url(#paint0_linear_3128_27781)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3128_27781"
                      x1="2"
                      y1="1.5"
                      x2="27.3221"
                      y2="12.8972"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A088FB" />
                      <stop offset="1" stopColor="#B8A6FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
            <p>
              Сайт разработан:{" "}
              <Link href="https://dragotech.info/" className="footer-link">
                dragotech.info
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
