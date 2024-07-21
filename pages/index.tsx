import logo from "@/assets/logo.png";
import image1 from "@/assets/29314779_2206_w037_n003_433b_p1_433 1.png";
import image2 from "@/assets/Group 31.png";
import image3 from "@/assets/Group 32.png";
import image4 from "@/assets/Group 33.png";
import image5 from "@/assets/Memoji Girls 6-11.png";
import image6 from "@/assets/all 3d 1.png";
import image7 from "@/assets/Mockup 1.png";
import image8 from "@/assets/Group 1948754052.png";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Header />
      <section className="section-main">
        <svg
          className="section-main-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="684"
          height="761"
          viewBox="0 0 684 761"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_3128_26374)">
            <path
              d="M-93.7069 540.28C-38.0508 708.791 149.306 530.49 317.818 474.834C486.33 419.177 572.184 507.243 516.528 338.731C460.872 170.219 279.148 78.7315 110.636 134.388C-57.8755 190.044 -149.363 371.768 -93.7069 540.28Z"
              fill="#8060F6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3128_26374"
              x="-260.005"
              y="-31.9102"
              width="943.428"
              height="792.914"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_3128_26374"
              />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <div className="section-main-container">
            <div className="section-main-text">
              <h1>
                <span>Live video & audio</span> consultation service for your{" "}
                <span>relaxation</span> and <span>website</span>
              </h1>
              <p>
                <span>NameSite</span> is a widget that you place on your website
                that provides customers with live video or audio consultations.
              </p>
              <div className="section-main-text-btns">
                <Link href="signUp">
                  <button className="btn-register" type="button">
                    Регистрация
                  </button>
                </Link>
                <button className="btn-buy" type="button">
                  Купить за <strong>799</strong> ₽
                </button>
              </div>
            </div>
            <div className="section-main-img">
              <Image src={image1} alt="" />
            </div>
          </div>
          <div className="section-main-container-bottom">
            <div className="section-main-container-bottom-logos">
              <Image src={image2} alt="" />
              <Image
                src={image3}
                alt=""
                className="section-main-container-bottom-logo2"
              />
              <Image
                src={image4}
                alt=""
                className="section-main-container-bottom-logo3"
              />
            </div>
            <p>Более 100k+ пользователей</p>
          </div>
        </div>
      </section>
      <section className="possibility">
        <svg
          className="possibility-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="765"
          height="677"
          viewBox="0 0 765 677"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_3128_27496)">
            <path
              d="M781.926 388.38C827.857 559.798 573.389 513.535 401.971 559.466C230.553 605.397 207.097 726.13 161.166 554.712C115.235 383.294 216.962 207.097 388.38 161.166C559.798 115.235 735.994 216.962 781.926 388.38Z"
              fill="#8060F6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3128_27496"
              x="0.137695"
              y="0.136719"
              width="937.24"
              height="793.596"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_3128_27496"
              />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <h3 className="title">Возможности</h3>
          <div className="possibility-top">
            <div className="possibility-top-block">
              <div className="possibility-top-block-part">
                <Image src={image5} alt="" />
                <p>Покупай чтобы смотреть</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5775 6.50042C17.929 6.85008 17.9292 7.41715 17.5778 7.76701L5.43697 19.8555C5.08559 20.2053 4.51575 20.2055 4.16417 19.8558C3.8126 19.5062 3.81244 18.9391 4.16381 18.5893L16.3047 6.50078C16.656 6.15092 17.2259 6.15076 17.5775 6.50042Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79328 6.12977C8.79328 5.63514 9.19622 5.23416 9.69328 5.23416L16.4842 5.23416C17.039 5.23581 17.5706 5.45585 17.9629 5.84623C18.3552 6.23662 18.5763 6.76562 18.5779 7.3177L18.5779 7.32036L18.5779 14.2613C18.5779 14.7559 18.175 15.1569 17.6779 15.1569C17.1809 15.1569 16.7779 14.7559 16.7779 14.2613L16.7779 7.32303C16.7779 7.32272 16.7779 7.32334 16.7779 7.32303C16.7775 7.2445 16.7459 7.16837 16.6901 7.11282C16.6342 7.05727 16.5587 7.02586 16.4798 7.02538C16.4795 7.02538 16.4801 7.02539 16.4798 7.02538L9.69328 7.02538C9.19622 7.02538 8.79328 6.62441 8.79328 6.12977Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="possibility-top-block">
              <div className="possibility-top-block-part">
                <Image src={image5} alt="" />
                <p>Следим за нарушениями</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5775 6.50042C17.929 6.85008 17.9292 7.41715 17.5778 7.76701L5.43697 19.8555C5.08559 20.2053 4.51575 20.2055 4.16417 19.8558C3.8126 19.5062 3.81244 18.9391 4.16381 18.5893L16.3047 6.50078C16.656 6.15092 17.2259 6.15076 17.5775 6.50042Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79328 6.12977C8.79328 5.63514 9.19622 5.23416 9.69328 5.23416L16.4842 5.23416C17.039 5.23581 17.5706 5.45585 17.9629 5.84623C18.3552 6.23662 18.5763 6.76562 18.5779 7.3177L18.5779 7.32036L18.5779 14.2613C18.5779 14.7559 18.175 15.1569 17.6779 15.1569C17.1809 15.1569 16.7779 14.7559 16.7779 14.2613L16.7779 7.32303C16.7779 7.32272 16.7779 7.32334 16.7779 7.32303C16.7775 7.2445 16.7459 7.16837 16.6901 7.11282C16.6342 7.05727 16.5587 7.02586 16.4798 7.02538C16.4795 7.02538 16.4801 7.02539 16.4798 7.02538L9.69328 7.02538C9.19622 7.02538 8.79328 6.62441 8.79328 6.12977Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="possibility-top-block">
              <div className="possibility-top-block-part">
                <Image src={image5} alt="" />
                <p>Найди кто по вкусу</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5775 6.50042C17.929 6.85008 17.9292 7.41715 17.5778 7.76701L5.43697 19.8555C5.08559 20.2053 4.51575 20.2055 4.16417 19.8558C3.8126 19.5062 3.81244 18.9391 4.16381 18.5893L16.3047 6.50078C16.656 6.15092 17.2259 6.15076 17.5775 6.50042Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79328 6.12977C8.79328 5.63514 9.19622 5.23416 9.69328 5.23416L16.4842 5.23416C17.039 5.23581 17.5706 5.45585 17.9629 5.84623C18.3552 6.23662 18.5763 6.76562 18.5779 7.3177L18.5779 7.32036L18.5779 14.2613C18.5779 14.7559 18.175 15.1569 17.6779 15.1569C17.1809 15.1569 16.7779 14.7559 16.7779 14.2613L16.7779 7.32303C16.7779 7.32272 16.7779 7.32334 16.7779 7.32303C16.7775 7.2445 16.7459 7.16837 16.6901 7.11282C16.6342 7.05727 16.5587 7.02586 16.4798 7.02538C16.4795 7.02538 16.4801 7.02539 16.4798 7.02538L9.69328 7.02538C9.19622 7.02538 8.79328 6.62441 8.79328 6.12977Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="possibility-top-block">
              <div className="possibility-top-block-part">
                <Image src={image5} alt="" />
                <p>Общаяйся в прямом эфире</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5775 6.50042C17.929 6.85008 17.9292 7.41715 17.5778 7.76701L5.43697 19.8555C5.08559 20.2053 4.51575 20.2055 4.16417 19.8558C3.8126 19.5062 3.81244 18.9391 4.16381 18.5893L16.3047 6.50078C16.656 6.15092 17.2259 6.15076 17.5775 6.50042Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79328 6.12977C8.79328 5.63514 9.19622 5.23416 9.69328 5.23416L16.4842 5.23416C17.039 5.23581 17.5706 5.45585 17.9629 5.84623C18.3552 6.23662 18.5763 6.76562 18.5779 7.3177L18.5779 7.32036L18.5779 14.2613C18.5779 14.7559 18.175 15.1569 17.6779 15.1569C17.1809 15.1569 16.7779 14.7559 16.7779 14.2613L16.7779 7.32303C16.7779 7.32272 16.7779 7.32334 16.7779 7.32303C16.7775 7.2445 16.7459 7.16837 16.6901 7.11282C16.6342 7.05727 16.5587 7.02586 16.4798 7.02538C16.4795 7.02538 16.4801 7.02539 16.4798 7.02538L9.69328 7.02538C9.19622 7.02538 8.79328 6.62441 8.79328 6.12977Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="possibility-top-block">
              <div className="possibility-top-block-part">
                <Image src={image5} alt="" />
                <p>Заработывай</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5775 6.50042C17.929 6.85008 17.9292 7.41715 17.5778 7.76701L5.43697 19.8555C5.08559 20.2053 4.51575 20.2055 4.16417 19.8558C3.8126 19.5062 3.81244 18.9391 4.16381 18.5893L16.3047 6.50078C16.656 6.15092 17.2259 6.15076 17.5775 6.50042Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79328 6.12977C8.79328 5.63514 9.19622 5.23416 9.69328 5.23416L16.4842 5.23416C17.039 5.23581 17.5706 5.45585 17.9629 5.84623C18.3552 6.23662 18.5763 6.76562 18.5779 7.3177L18.5779 7.32036L18.5779 14.2613C18.5779 14.7559 18.175 15.1569 17.6779 15.1569C17.1809 15.1569 16.7779 14.7559 16.7779 14.2613L16.7779 7.32303C16.7779 7.32272 16.7779 7.32334 16.7779 7.32303C16.7775 7.2445 16.7459 7.16837 16.6901 7.11282C16.6342 7.05727 16.5587 7.02586 16.4798 7.02538C16.4795 7.02538 16.4801 7.02539 16.4798 7.02538L9.69328 7.02538C9.19622 7.02538 8.79328 6.62441 8.79328 6.12977Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="possibility-top-block">
              <div className="possibility-top-block-part">
                <Image src={image5} alt="" />
                <p>Общение с девушками</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5775 6.50042C17.929 6.85008 17.9292 7.41715 17.5778 7.76701L5.43697 19.8555C5.08559 20.2053 4.51575 20.2055 4.16417 19.8558C3.8126 19.5062 3.81244 18.9391 4.16381 18.5893L16.3047 6.50078C16.656 6.15092 17.2259 6.15076 17.5775 6.50042Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.79328 6.12977C8.79328 5.63514 9.19622 5.23416 9.69328 5.23416L16.4842 5.23416C17.039 5.23581 17.5706 5.45585 17.9629 5.84623C18.3552 6.23662 18.5763 6.76562 18.5779 7.3177L18.5779 7.32036L18.5779 14.2613C18.5779 14.7559 18.175 15.1569 17.6779 15.1569C17.1809 15.1569 16.7779 14.7559 16.7779 14.2613L16.7779 7.32303C16.7779 7.32272 16.7779 7.32334 16.7779 7.32303C16.7775 7.2445 16.7459 7.16837 16.6901 7.11282C16.6342 7.05727 16.5587 7.02586 16.4798 7.02538C16.4795 7.02538 16.4801 7.02539 16.4798 7.02538L9.69328 7.02538C9.19622 7.02538 8.79328 6.62441 8.79328 6.12977Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="possibility-container">
            <div className="possibility-text">
              <p>
                We also can provide <span>educated outsourcing personnel</span>{" "}
                for our clients upon your needs.
              </p>
            </div>
            <div className="possibility-img">
              <Image src={image6} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pluses">
        <svg
          className="pluses-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="938"
          height="794"
          viewBox="0 0 938 794"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_3128_27540)">
            <path
              d="M781.926 388.38C827.857 559.798 573.389 513.535 401.971 559.466C230.553 605.397 207.097 726.13 161.166 554.712C115.235 383.294 216.962 207.097 388.38 161.166C559.798 115.235 735.994 216.962 781.926 388.38Z"
              fill="#8060F6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3128_27540"
              x="0.137695"
              y="0.136719"
              width="937.24"
              height="793.596"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_3128_27540"
              />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <h3 className="title">
            <span>Logo</span> provides best experience <br />
            for each side of scenarios
          </h3>
          <div className="pluses-container">
            <div className="pluses-container-block-small bg1">
              <p>Для досуга</p>
              <span></span>
            </div>
            <div className="pluses-container-block-big">
              <h3>Для твоего дохода</h3>
              <span></span>
              <p>
                Opportunity to show products in real time to customers by video
                calls
                <br />
                Don’t miss sales, your customers will be will be sent to the
                right expert who understands the product with our smart routing
                feature
                <br /> Checkout products for your customers, put products in
                their brackets and increase sales
              </p>
            </div>
            <div className="pluses-container-block-small bg1">
              <p>Для наслаждения</p>
              <span></span>
            </div>
          </div>
        </div>
      </section>
      <section className="guests">
        <div className="container">
          <div className="guests-container">
            <Image src={image7} alt="" className="guests-img" />
            <div className="guests-container-bottom">
              <p>
                <span>Посетители</span> остаются <br />с нами надолго
              </p>
              <h5>
                <span>Logo</span> is a widget that you place on your website
                that provides customers with live video or audio consultations.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="different-taste">
        <svg
          className="different-taste-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="672"
          height="616"
          viewBox="0 0 672 616"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_3128_27576)">
            <path
              d="M107.393 340.129C73.6503 214.201 165.272 151.056 291.199 117.314C417.127 83.5718 529.674 92.01 563.416 217.937C597.158 343.865 522.427 473.303 396.5 507.045C270.572 540.787 141.135 466.056 107.393 340.129Z"
              fill="#8060F6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3128_27576"
              x="0.34082"
              y="0.335938"
              width="671.178"
              height="614.811"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_3128_27576"
              />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <Image src={image8} alt="" className="different-taste-img" />
          <div className="different-taste-text">
            <p>Для</p>
            <span>любого вкуса</span>
          </div>
        </div>
      </section>
      <section className="plans">
        <svg
          className="plans-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="1037"
          height="785"
          viewBox="0 0 1037 785"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_3128_27591)">
            <path
              d="M886.752 518.376C886.752 721.824 618.694 595.091 415.245 595.091C211.797 595.091 150 721.824 150 518.376C150 314.928 314.928 150 518.376 150C721.824 150 886.752 314.928 886.752 518.376Z"
              fill="#8060F6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3128_27591"
              x="0"
              y="0"
              width="1036.75"
              height="784.09"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_3128_27591"
              />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <h3 className="title">Plans</h3>
          <div className="plans-container">
            <div className="plans-mini-block">
              <h3>START</h3>
              <h4>Starting from</h4>
              <h5>
                <span>799</span> AED / user
              </h5>
              <div className="plans-mini-block-content">
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Widget</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Administrative portal</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Experts workspace</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>All scenarios</p>
                </div>
              </div>
              <button type="button">SELECT</button>
            </div>
            <div className="plans-mini-block plans-big-block">
              <h3>START</h3>
              <h4>Starting from</h4>
              <h5>
                <span>799</span> AED / user
              </h5>
              <div className="plans-mini-block-content">
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="#292758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Widget</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="#292758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Sales forces</p>
                </div>
                <div className="plans-mini-block-content-text">
                  1 expert shared with other company (50% of the time work
                  adjustment)
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="#292758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Administrative portal</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="#292758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Experts workspace</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="#292758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>All scenarios</p>
                </div>
              </div>
              <button type="button">SELECT</button>
            </div>
            <div className="plans-mini-block">
              <h3>START</h3>
              <h4>Starting from</h4>
              <h5>
                <span>799</span> AED / user
              </h5>
              <div className="plans-mini-block-content">
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Widget</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Administrative portal</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Experts workspace</p>
                </div>
                <div className="plans-mini-block-content-part">
                  <div className="plans-mini-block-content-part-ellipse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1.43359 3.75997L4.37359 6.69331L10.5669 1.30664"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>All scenarios</p>
                </div>
              </div>
              <button type="button">SELECT</button>
            </div>
          </div>
        </div>
      </section>
      <section className="why-we">
        <svg
          className="why-we-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="554"
          viewBox="0 0 1920 554"
          fill="none"
        >
          <path
            d="M0 64C0 28.6538 28.6538 0 64 0H1856C1891.35 0 1920 28.6538 1920 64V554H0V64Z"
            fill="url(#paint0_linear_3128_27680)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3128_27680"
              x1="4.29153e-05"
              y1="554"
              x2="255.123"
              y2="-431.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#292758" />
              <stop offset="1" stopColor="#3A1FA0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="container">
          <h3 className="title why-we-title" style={{ color: "white" }}>
            Почему мы?
          </h3>
          <div className="why-we-container">
            <div className="why-we-container-block why-we-container-block1 bg2">
              <span>35 %</span>
              <p>sales up</p>
            </div>
            <div className="why-we-container-block why-we-container-block2 bg3">
              <span>35 %</span>
              <p>sales up</p>
            </div>
            <div className="why-we-container-block why-we-container-block3 bg4">
              <span>35 %</span>
              <p>sales up</p>
            </div>
            <div className="why-we-container-block why-we-container-block3 bg2">
              <span>35 %</span>
              <p>sales up</p>
            </div>
            <div className="why-we-container-block why-we-container-block2 bg3">
              <span>35 %</span>
              <p>sales up</p>
            </div>
            <div className="why-we-container-block why-we-container-block1 bg4">
              <span>35 %</span>
              <p>sales up</p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-start">
        <svg
          className="how-start-ellipse"
          xmlns="http://www.w3.org/2000/svg"
          width="1037"
          height="785"
          viewBox="0 0 1037 785"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_3128_27725)">
            <path
              d="M149.998 265.714C149.998 62.2655 418.056 188.999 621.505 188.999C824.953 188.999 886.75 62.2655 886.75 265.714C886.75 469.162 721.822 634.09 518.374 634.09C314.926 634.09 149.998 469.162 149.998 265.714Z"
              fill="#8060F6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3128_27725"
              x="-0.00195312"
              y="0"
              width="1036.75"
              height="784.09"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_3128_27725"
              />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <h3 className="title">
            Как начать <span>пользоваться</span>
          </h3>
          <div className="how-start-container">
            <div className="how-start-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.333 2.66602C14.8853 2.66602 15.333 3.11373 15.333 3.66602V22.3327C15.333 22.885 14.8853 23.3327 14.333 23.3327C13.7807 23.3327 13.333 22.885 13.333 22.3327V3.66602C13.333 3.11373 13.7807 2.66602 14.333 2.66602Z"
                  fill="url(#paint0_linear_3128_28307)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8838 0.165162C11.1645 0.350206 11.3333 0.66386 11.3333 1V25.6667C11.3333 25.9919 11.1752 26.2968 10.9094 26.4841C10.6436 26.6714 10.3032 26.7178 9.997 26.6084L0.663664 23.2751C0.265671 23.1329 0 22.7559 0 22.3333V5C0 4.59997 0.238397 4.23844 0.606081 4.08086L9.93941 0.0808585C10.2484 -0.0515547 10.6032 -0.0198813 10.8838 0.165162ZM2 5.6594V21.6286L9.33333 24.2477V2.51654L2 5.6594Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.667 2.66602C20.2193 2.66602 20.667 3.11373 20.667 3.66602V22.3327C20.667 22.885 20.2193 23.3327 19.667 23.3327C19.1147 23.3327 18.667 22.885 18.667 22.3327V3.66602C18.667 3.11373 19.1147 2.66602 19.667 2.66602Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 2.66602C25.5523 2.66602 26 3.11373 26 3.66602V22.3327C26 22.885 25.5523 23.3327 25 23.3327C24.4477 23.3327 24 22.885 24 22.3327V3.66602C24 3.11373 24.4477 2.66602 25 2.66602Z"
                  fill="#8060F6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3128_28307"
                    x1="13.333"
                    y1="23.3327"
                    x2="17.5128"
                    y2="22.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#292758" />
                    <stop offset="1" stopColor="#3A1FA0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>Пройдите регистрацию</h3>
              <p>
                Our manager will get in touch with you, offer a demonstration
                and provide access to a personal account area
              </p>
            </div>
            <div className="how-start-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.333 2.66602C14.8853 2.66602 15.333 3.11373 15.333 3.66602V22.3327C15.333 22.885 14.8853 23.3327 14.333 23.3327C13.7807 23.3327 13.333 22.885 13.333 22.3327V3.66602C13.333 3.11373 13.7807 2.66602 14.333 2.66602Z"
                  fill="url(#paint0_linear_3128_28307)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8838 0.165162C11.1645 0.350206 11.3333 0.66386 11.3333 1V25.6667C11.3333 25.9919 11.1752 26.2968 10.9094 26.4841C10.6436 26.6714 10.3032 26.7178 9.997 26.6084L0.663664 23.2751C0.265671 23.1329 0 22.7559 0 22.3333V5C0 4.59997 0.238397 4.23844 0.606081 4.08086L9.93941 0.0808585C10.2484 -0.0515547 10.6032 -0.0198813 10.8838 0.165162ZM2 5.6594V21.6286L9.33333 24.2477V2.51654L2 5.6594Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.667 2.66602C20.2193 2.66602 20.667 3.11373 20.667 3.66602V22.3327C20.667 22.885 20.2193 23.3327 19.667 23.3327C19.1147 23.3327 18.667 22.885 18.667 22.3327V3.66602C18.667 3.11373 19.1147 2.66602 19.667 2.66602Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 2.66602C25.5523 2.66602 26 3.11373 26 3.66602V22.3327C26 22.885 25.5523 23.3327 25 23.3327C24.4477 23.3327 24 22.885 24 22.3327V3.66602C24 3.11373 24.4477 2.66602 25 2.66602Z"
                  fill="#8060F6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3128_28307"
                    x1="13.333"
                    y1="23.3327"
                    x2="17.5128"
                    y2="22.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#292758" />
                    <stop offset="1" stopColor="#3A1FA0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>Пройдите регистрацию</h3>
              <p>
                Our manager will get in touch with you, offer a demonstration
                and provide access to a personal account area
              </p>
            </div>
            <div className="how-start-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.333 2.66602C14.8853 2.66602 15.333 3.11373 15.333 3.66602V22.3327C15.333 22.885 14.8853 23.3327 14.333 23.3327C13.7807 23.3327 13.333 22.885 13.333 22.3327V3.66602C13.333 3.11373 13.7807 2.66602 14.333 2.66602Z"
                  fill="url(#paint0_linear_3128_28307)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8838 0.165162C11.1645 0.350206 11.3333 0.66386 11.3333 1V25.6667C11.3333 25.9919 11.1752 26.2968 10.9094 26.4841C10.6436 26.6714 10.3032 26.7178 9.997 26.6084L0.663664 23.2751C0.265671 23.1329 0 22.7559 0 22.3333V5C0 4.59997 0.238397 4.23844 0.606081 4.08086L9.93941 0.0808585C10.2484 -0.0515547 10.6032 -0.0198813 10.8838 0.165162ZM2 5.6594V21.6286L9.33333 24.2477V2.51654L2 5.6594Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.667 2.66602C20.2193 2.66602 20.667 3.11373 20.667 3.66602V22.3327C20.667 22.885 20.2193 23.3327 19.667 23.3327C19.1147 23.3327 18.667 22.885 18.667 22.3327V3.66602C18.667 3.11373 19.1147 2.66602 19.667 2.66602Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 2.66602C25.5523 2.66602 26 3.11373 26 3.66602V22.3327C26 22.885 25.5523 23.3327 25 23.3327C24.4477 23.3327 24 22.885 24 22.3327V3.66602C24 3.11373 24.4477 2.66602 25 2.66602Z"
                  fill="#8060F6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3128_28307"
                    x1="13.333"
                    y1="23.3327"
                    x2="17.5128"
                    y2="22.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#292758" />
                    <stop offset="1" stopColor="#3A1FA0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>Пройдите регистрацию</h3>
              <p>
                Our manager will get in touch with you, offer a demonstration
                and provide access to a personal account area
              </p>
            </div>
            <div className="how-start-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.333 2.66602C14.8853 2.66602 15.333 3.11373 15.333 3.66602V22.3327C15.333 22.885 14.8853 23.3327 14.333 23.3327C13.7807 23.3327 13.333 22.885 13.333 22.3327V3.66602C13.333 3.11373 13.7807 2.66602 14.333 2.66602Z"
                  fill="url(#paint0_linear_3128_28307)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8838 0.165162C11.1645 0.350206 11.3333 0.66386 11.3333 1V25.6667C11.3333 25.9919 11.1752 26.2968 10.9094 26.4841C10.6436 26.6714 10.3032 26.7178 9.997 26.6084L0.663664 23.2751C0.265671 23.1329 0 22.7559 0 22.3333V5C0 4.59997 0.238397 4.23844 0.606081 4.08086L9.93941 0.0808585C10.2484 -0.0515547 10.6032 -0.0198813 10.8838 0.165162ZM2 5.6594V21.6286L9.33333 24.2477V2.51654L2 5.6594Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.667 2.66602C20.2193 2.66602 20.667 3.11373 20.667 3.66602V22.3327C20.667 22.885 20.2193 23.3327 19.667 23.3327C19.1147 23.3327 18.667 22.885 18.667 22.3327V3.66602C18.667 3.11373 19.1147 2.66602 19.667 2.66602Z"
                  fill="#8060F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 2.66602C25.5523 2.66602 26 3.11373 26 3.66602V22.3327C26 22.885 25.5523 23.3327 25 23.3327C24.4477 23.3327 24 22.885 24 22.3327V3.66602C24 3.11373 24.4477 2.66602 25 2.66602Z"
                  fill="#8060F6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3128_28307"
                    x1="13.333"
                    y1="23.3327"
                    x2="17.5128"
                    y2="22.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#292758" />
                    <stop offset="1" stopColor="#3A1FA0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>Пройдите регистрацию</h3>
              <p>
                Our manager will get in touch with you, offer a demonstration
                and provide access to a personal account area
              </p>
            </div>
          </div>
          <Link href="signUp">
            <button className="btn-register-how-start" type="button">
              Пройти регистрацию
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
