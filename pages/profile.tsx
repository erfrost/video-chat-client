import Image, { StaticImageData } from "next/image";
import logo from "@/assets/Logo.png";
import { ChangeEvent, useEffect, useState } from "react";
import User from "@/schemas/User.schema";
import getUser from "@/api/getUser";
import styles from "@/styles/profile.module.css";
import uploadImage from "@/api/uploadImage";
import avatarIcon from "@/assets/Ellipse 3.png";
import updateAvatar from "@/api/updateAvatar";
import updateNickname from "@/api/updateNickname";
import { toastSuccess } from "@/utils/toast";
import updateEmail from "@/api/updateEmail";
import updatePhone from "@/api/updatePhone";
import updatePassword from "@/api/updatePassword";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import updatePassport from "@/api/updatePassport";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string | StaticImageData>("");

  useEffect(() => {
    async function getUserInfo() {
      const user: User = await getUser();
      setUser(user);

      setNickname(user.nickname);
      setEmail(user.email);
      setPhone(user.phone);
      setAvatar(user.avatar || avatarIcon);
    }

    getUserInfo();
  }, []);

  const onUpdateAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target?.files;
    if (!files) return;

    const uploadedAvatar: string = await uploadImage(files[0]);
    setAvatar(uploadedAvatar);

    const user: User = await updateAvatar(uploadedAvatar);
    if (user) toastSuccess("Успешно");
  };

  const onUpdateNickname = async () => {
    const user: User = await updateNickname(nickname);
    if (user) toastSuccess("Успешно");
  };

  const onUpdateEmail = async () => {
    const user: User = await updateEmail(email);
    if (user) toastSuccess("Успешно");
  };

  const onUpdatePhone = async () => {
    const user: User = await updatePhone(email);
    console.log(user);
    if (user) toastSuccess("Успешно");
  };

  const onUpdatePassword = async () => {
    const user: User = await updatePassword(email);
    if (user) toastSuccess("Успешно");
  };

  const onChangePassport = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target?.files;
    if (!files) return;

    const uploadedPassport: string = await uploadImage(files[0]);
    const user: User = await updatePassport(uploadedPassport);
    if (user) {
      toastSuccess(
        "Успешно. Как только администратор верифицирует Ваш паспорт, откроются все возможности платформы."
      );
    }
  };

  if (!user) return;

  return (
    <div>
      <Header user={user} />
      <section className="lk">
        <div className="container">
          <div className="lk-block">
            <div className="lk-top">
              <label className={styles.label}>
                <Image
                  src={avatar}
                  width={100}
                  height={100}
                  alt="avatar"
                  className={styles.avatarFile}
                />
                <input
                  className={styles.avatarInput}
                  type="file"
                  onChange={onUpdateAvatar}
                />
              </label>
              <div className="lk-top-text">
                <h3>{user.nickname}</h3>
                <p>{user.dateBirth}</p>
                <span>Баланс: 12,000 руб.</span>
                {user.gender === "female" &&
                  (user.passportIsVerified ? (
                    <h5>
                      Паспорт верефицирован
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.4902 2.22859L5.50016 4.10859C4.35016 4.53859 3.41016 5.89859 3.41016 7.11859V14.5486C3.41016 15.7286 4.19016 17.2786 5.14016 17.9886L9.44016 21.1986C10.8502 22.2586 13.1702 22.2586 14.5802 21.1986L18.8802 17.9886C19.8302 17.2786 20.6102 15.7286 20.6102 14.5486V7.11859C20.6102 5.88859 19.6702 4.52859 18.5202 4.09859L13.5302 2.22859C12.6802 1.91859 11.3202 1.91859 10.4902 2.22859Z"
                          stroke="#21EA00"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.05078 11.8697L10.6608 13.4797L14.9608 9.17969"
                          stroke="#21EA00"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </h5>
                  ) : (
                    <h5 className="red">
                      Паспорт неверефицирован
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.4902 2.22859L5.50016 4.10859C4.35016 4.53859 3.41016 5.89859 3.41016 7.11859V14.5486C3.41016 15.7286 4.19016 17.2786 5.14016 17.9886L9.44016 21.1986C10.8502 22.2586 13.1702 22.2586 14.5802 21.1986L18.8802 17.9886C19.8302 17.2786 20.6102 15.7286 20.6102 14.5486V7.11859C20.6102 5.88859 19.6702 4.52859 18.5202 4.09859L13.5302 2.22859C12.6802 1.91859 11.3202 1.91859 10.4902 2.22859Z"
                          stroke="#21EA00"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.05078 11.8697L10.6608 13.4797L14.9608 9.17969"
                          stroke="#21EA00"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </h5>
                  ))}
              </div>
            </div>
            <button className="btn-lk-balance" type="button">
              Пополнить баланс
            </button>
          </div>
          <div className="lk-content">
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Василий Иванов"
                value={nickname}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNickname(e.target.value)
                }
              />
              <div className={styles.saveBtn} onClick={onUpdateNickname}>
                Сохранить
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <div className={styles.saveBtn} onClick={onUpdateEmail}>
                Сохранить
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="+7 (999) 888-77-66"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              />
              <div className={styles.saveBtn} onClick={onUpdatePhone}>
                Сохранить
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Новый пароль"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <div className={styles.saveBtn} onClick={onUpdatePassword}>
                Сохранить
              </div>
            </div>
            <label className={styles.passport}>
              <span className={styles.passportText}>
                Загрузить новую фотографию паспорта
              </span>
              <input
                type="file"
                className={styles.passportInput}
                onChange={onChangePassport}
              />
            </label>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
