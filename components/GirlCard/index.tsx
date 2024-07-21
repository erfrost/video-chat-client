import Image from "next/image";
import styles from "./index.module.css";
import avatar from "@/assets/image 11212.png";
import Girl from "@/schemas/Girl.schema";

interface GirlCardProps {
  girl: Girl;
}

const GirlCard = ({ girl }: GirlCardProps) => {
  return (
    <div className="catalog-container-block bg5">
      <Image src={girl.avatar || avatar} width={200} height={200} alt="image" />
      <div className="catalog-container-block-line">
        <p>{girl.nickname}</p>
        <span style={{ color: girl.isOnline ? "#24FF47" : "#FF7043" }}>
          {girl.isOnline ? "online" : "offline"}
        </span>
      </div>
      <button type="button">Добавить в избранное</button>
    </div>
  );
};

export default GirlCard;
