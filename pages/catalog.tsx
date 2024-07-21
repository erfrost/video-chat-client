import Image from "next/image";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import getUser from "@/api/getUser";
import { getCookie } from "cookies-next";
import User from "@/schemas/User.schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GirlCard from "@/components/GirlCard";

const Catalog = () => {
  const [user, setUser] = useState<User | null>(null);
  const router: NextRouter = useRouter();

  useEffect(() => {
    async function getUserInfo() {
      const accessToken: string | undefined = getCookie("access_token");
      if (!accessToken) return router.push("/signIn");

      const user = await getUser();
      setUser(user);
    }

    getUserInfo();
  }, []);

  if (!user) return;

  return (
    <div>
      <Header user={user} />
      <section className="catalog">
        <div className="container">
          <h1 className="catalog-title">Каталог девушек</h1>
          <div className="catalog-container">
            <GirlCard />
            <GirlCard />
            <GirlCard />
            <GirlCard />
            <GirlCard />
            <GirlCard />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Catalog;
