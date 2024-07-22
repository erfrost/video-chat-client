import signIn from "@/api/signIn";
import styles from "@/styles/auth.module.css";
import { Input } from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const SignIn = () => {
  const [phone, setPhone] = useState<string>("+79998887766");
  const [password, setPassword] = useState<string>("password");
  const router: NextRouter = useRouter();

  const onSubmit = async () => {
    const { refreshToken, accessToken, userId } = await signIn(phone, password);
    console.log(accessToken);
    if (!refreshToken || !accessToken || !userId) return;

    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);
    setCookie("user_id", userId);

    router.push("/catalog");
  };

  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <span className={styles.title}>Вход</span>
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
        <Link
          style={{
            alignSelf: "flex-start",
            fontSize: "14px",
            fontWeight: 600,
          }}
          href="signUp"
          className={`${styles.default} ${styles.defaultHover}`}
        >
          Зарегистрироваться
        </Link>
        <div className={styles.submitBtn} onClick={onSubmit}>
          Войти
        </div>
      </div>
    </div>
  );
};

export default SignIn;
