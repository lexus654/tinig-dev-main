import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import style from "./indexHome.module.css";
import Image from "next/image";
import homeBanner from "../assets/homeBanner.png";
import fsl from "../assets/signLanguage.png";
import feat1 from "../assets/feratureLogo/feat1.webp";
import feat2 from "../assets/feratureLogo/feat2.webp";
import feat3 from "../assets/feratureLogo/feat3.webp";
import Link from "next/link";
// popup
import Bihasa from "@/components/instructions/Bihasa";
import Dikta from "@/components/instructions/Dikta";
import Signayo from "@/components/instructions/Signayo";

// team
import Team from "./team";

// Combining the front page and Teams page. Adding a top layers
function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const showBihasa = () => {
    setIsVisible(true);
  };
  const showDikta = () => {
    setIsVisible1(true);
  };
  const showSignayo = () => {
    setIsVisible2(true);
  };

  return (
    <div className={style.container}>
      <div className={style.bannerText}>
        <p className={style.header}>
          Bridge the Communication Barrier using <span> TINIG </span>{" "}
        </p>
      </div>
      <div className={style.topLayer}>
        <div className={style.featureBox}>
          <div className={style.imageBox}>
            <Image
              src={feat1}
              className={style.feat1}
              alt="Filipino Sign Languae to Voice"
            ></Image>
          </div>
          <div className={style.nameBox}>
            <p className={style.feat1Title}>BIHASA</p>
            <p className={style.feat1Text}>Filipino Sign Languae to Voice</p>
          </div>
          <div className={style.instructBox}>
            <button onClick={showBihasa}>How to Use?</button>
          </div>
        </div>
        {/* end */}
        <div className={style.featureBox}>
          <div className={style.imageBox}>
            <Image
              src={feat2}
              className={style.feat2}
              alt="Filipino Sign Languafe to Voice"
            ></Image>
          </div>
          <div className={style.nameBox}>
            <p className={style.feat2Title}>DIKTA</p>
            <p className={style.feat2Text}>Voice to Filipino Sign Language</p>
          </div>
          <div className={style.instructBox}>
            <button onClick={showDikta}>How to Use?</button>
          </div>
        </div>
        {/* end */}
        {/* disable signayo */}
        {/* <div className={style.featureBox}>
          <div className={style.imageBox}>
            <Image
              src={feat3}
              className={style.feat3}
              alt="Filipino Sign Languae to Voice"
            ></Image>
          </div>
          <div className={style.nameBox}>
            <p className={style.feat3Title}>SIGNAYO</p>
            <p className={style.feat3Text}>Movies to Filipino Sign Language</p>
          </div>
          <div className={style.instructBox}>
            <button onClick={showSignayo}>How to Use?</button>
          </div>
        </div> */}
      </div>
      {/* inside container */}
      <div className={style.insideContainer}>
        <div className={style.leftContainer}>
          <h1 className={style.header}>
            <span>LEARN</span> FILIPINO SIGN LANGUAGE & BAYBAYIN{" "}
            <span>TODAY</span>
          </h1>
          <p className={style.subText}>
            Your hands become the voice that speaks your thoughts.
          </p>
          <button className={style.button}>
            <Link className={style.link} href="/dictionary">
              Learn Now
            </Link>
          </button>
        </div>
        <div className={style.rightContainer}>
          <Image
            className={style.bannerWidth}
            src={homeBanner}
            alt="banner"
          ></Image>
        </div>
      </div>
      <Team></Team>

      {/* pop up */}
      <Bihasa isVisible={isVisible} setIsVisible={setIsVisible} />
      <Dikta isVisible={isVisible1} setIsVisible={setIsVisible1} />
      <Signayo isVisible={isVisible2} setIsVisible={setIsVisible2} />
    </div>
  );
}

export default HomePage;
