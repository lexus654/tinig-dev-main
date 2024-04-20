import React from "react";
import Image from "next/image";
import style from "./card.module.css";
import { toBaybayin } from "filipino-script-translator";

function CardDictionary(props) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <Image
          className={style.roundedImage}
          src={props.image}
          alt={`${props.name}`}
        ></Image>
      </div>
      <div className={style.textContainer}>
        <p>
          Sign Language for :{" "}
          <span className={style.bold}>{`${props.name}`}</span>
          <br />
          Baybayin :{" "}
          <span className={`${style.bold} ${style.bold2}`}>
            {toBaybayin(props.name.toLowerCase())}
          </span>
        </p>
      </div>
    </div>
  );
}
export default CardDictionary;
