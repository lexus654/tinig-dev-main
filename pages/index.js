import { useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import style from "./indexHome.module.css";
import Image from "next/image";
import homeBanner from "../assets/homeBanner.png";
import fsl from "../assets/signLanguage.png";

function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.insideContainer}>
        <div className={style.leftContainer}>
          <h1 className={style.header}>
            <span>LEARN</span> FILIPINO SIGN LANGUAGE & BAYBAYIN{" "}
            <span>TODAY</span>
          </h1>
          <p className={style.subText}>
            Your hands become the voice that speaks your thoughts.
          </p>
          <button className={style.button}>Get Started</button>
        </div>
        <div className={style.rightContainer}>
          <Image
            className={style.bannerWidth}
            src={homeBanner}
            alt="banner"
          ></Image>
        </div>
      </div>
      <Image src={fsl} className={style.fsl} alt="fsl"></Image>
    </div>
  );
}

export default HomePage;
