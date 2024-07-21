import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import getUser from "@/api/getUser";
import User from "@/schemas/User.schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GirlCard from "@/components/GirlCard";
import Girl from "@/schemas/Girl.schema";
import getGirls from "@/api/getGirls";

const Catalog = () => {
  const [girls, setGirls] = useState<Girl[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const router: NextRouter = useRouter();

  useEffect(() => {
    async function getUserInfo() {
      const user: User = await getUser();
      setUser(user);
    }

    getUserInfo();
  }, []);

  useEffect(() => {
    async function getCatalog() {
      const response = await getGirls();
      if (response) setGirls(response.girls);
    }

    getCatalog();
  }, []);

  if (!user) return;

  return (
    <div>
      <Header user={user} />
      <section className="catalog">
        <div className="container">
          <h1 className="catalog-title">Каталог девушек</h1>
          <div className="catalog-container">
            {girls.map((girl: Girl) => (
              <GirlCard girl={girl} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Catalog;
