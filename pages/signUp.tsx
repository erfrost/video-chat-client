import styles from "@/styles/auth.module.css";
import { Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import avatarIcon from "@/assets/avatar.svg";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import uploadImage from "@/api/uploadImage";
import signUp from "@/api/signUp";
import { setCookie } from "cookies-next";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [nickname, setNickname] = useState<string>("nickname");
  const [email, setEmail] = useState<string>("email@mail.ru");
  const [phone, setPhone] = useState<string>("+79998887766");
  const [password, setPassword] = useState<string>("password");
  const [gender, setGender] = useState<string>("male");
  const [date, setDate] = useState<string>("");
  const [dateBirth, setDateBirth] = useState<string>("10.10.2009");
  const [avatar, setAvatar] = useState<string>("");
  const [passport, setPassport] = useState<string[]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(1920);
  const router: NextRouter = useRouter();

  useEffect(() => {
    const handleResize = (event: Event) => {
      if (!event || !event.target) return;

      const target = event.target as Window;
      setScreenWidth(target.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onDateChange = (value: string) => {
    const date: string = value.split("T")[0].split("-").reverse().join(".");
    setDate(value);
    setDateBirth(date);
  };

  const onChangeAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target?.files;
    if (!files) return;

    const uploadedAvatar: string = await uploadImage(files[0]);
    setAvatar(uploadedAvatar);
  };

  const onChangePassport = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target?.files;
    if (!files) return;

    const uploadedPassport: string = await uploadImage(files[0]);
    setPassport((prevState) => [...prevState, uploadedPassport]);
  };

  const onSubmit = async () => {
    const response = await signUp(
      nickname,
      email,
      phone,
      password,
      gender,
      dateBirth,
      avatar,
      passport
    );
    if (!response) return;

    const { refreshToken, accessToken, userId } = response;

    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);
    setCookie("user_id", userId);

    router.push("/catalog");
  };

  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <span className={styles.title}>Регистрация</span>
        <label className={styles.label}>
          {avatar ? (
            <Image
              src={avatar}
              width={100}
              height={100}
              alt="avatar"
              className={styles.avatarFile}
            />
          ) : (
            <Image src={avatarIcon} alt="avatar" className={styles.avatar} />
          )}
          <input
            className={styles.avatarInput}
            type="file"
            onChange={onChangeAvatar}
          />
        </label>
        <Input
          className={styles.input}
          placeholder="Никнейм"
          size="md"
          value={nickname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNickname(e.target.value)
          }
        />
        <Input
          className={styles.input}
          placeholder="Email"
          size="md"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          className={styles.input}
          placeholder="Номер телефона"
          size="md"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />
        <Input
          className={styles.input}
          placeholder="Пароль"
          type="password"
          size="md"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <RadioGroup
          alignSelf="flex-start"
          alignItems="center"
          value={gender}
          onChange={(e: string) => setGender(e)}
        >
          <Stack direction="row" gap={15}>
            <span className={styles.default}>Пол:</span>
            <Radio value="male">Мужской</Radio>
            <Radio value="female">Женский</Radio>
          </Stack>
        </RadioGroup>
        {gender === "female" && (
          <Stack
            direction={screenWidth > 550 ? "row" : "column"}
            gap={15}
            alignSelf="flex-start"
            alignItems={screenWidth > 550 ? "center" : "flex-start"}
          >
            <span className={styles.default}>Загрузите селфи с паспортом:</span>
            <label className={styles.passportLabel}>
              <span className={styles.default}>Загрузить:</span>
              <input
                type="file"
                className={styles.passportInput}
                onChange={onChangePassport}
              />
            </label>
          </Stack>
        )}
        <Stack
          direction={screenWidth > 550 ? "row" : "column"}
          gap={15}
          alignSelf="flex-start"
          alignItems={screenWidth > 550 ? "center" : "flex-start"}
        >
          <span className={styles.default}>Дата рождения:</span>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            value={date}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onDateChange(e.target.value)
            }
          />
        </Stack>
        <Link
          style={{ alignSelf: "flex-start", fontSize: "14px", fontWeight: 600 }}
          href="signIn"
          className={`${styles.default} ${styles.defaultHover}`}
        >
          Уже есть аккаунт
        </Link>
        <div className={styles.submitBtn} onClick={onSubmit}>
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
};

export default SignUp;
