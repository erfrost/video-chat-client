import Image from "next/image";
import styles from "./index.module.css";
import image from "@/assets/image 11212.png";

const GirlCard = () => {
  return (
    <div className="catalog-container-block bg5">
      <Image src={image} alt="image" />
      <div className="catalog-container-block-line">
        <p>Алина</p>
        <span style={{ color: "#24FF47" }}>online</span>
      </div>
      <button type="button">Добавить в избранное</button>
    </div>
  );
};

export default GirlCard;
