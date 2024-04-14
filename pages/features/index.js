import Image from "next/image";
import dictionary from "../../assets/dictionary.png";
import tts from "../../assets/tts.png";
import clock from "../../assets/clock.png";
import baybayin from "../../assets/baybayin.png";
import { Imag } from "@tensorflow/tfjs";
import style from "./features.module.css";
import Bihasa from "@/components/instructions/Bihasa";
import Dikta from "@/components/instructions/Dikta";
import Signayo from "@/components/instructions/Signayo";

function Features() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>
        Let us Introduce our <span>UNIQUE PRODUCT </span> Features
      </h1>
      <div className={style.insideContainer}>
        <div className={style.card}>
          <Image
            className={style.roundedImage}
            src={dictionary}
            alt="dictionary"
          ></Image>
          <p className={style.name}>Dictionary</p>
          <p className={style.description}>
            These dictionary features are essential for a comprehensive
            understanding of Filipino Sign Language, improving communication
            within the Deaf community .
          </p>
        </div>
        <div className={style.card}>
          <Image
            className={style.roundedImage}
            src={clock}
            alt="Real Time"
          ></Image>
          <p className={style.name}>Real-time</p>
          <p className={style.description}>
            Our product's real-time features empower users to communicate
            smoothly and seamlessly, enhancing their overall experience.
          </p>
        </div>
        <div className={style.card}>
          <Image
            className={style.roundedImage}
            src={tts}
            alt="Text-to-Speech "
          ></Image>
          <p className={style.name}>Text-to-Speech </p>
          <p className={style.description}>
            We have incorporated Text-to-Speech for the translated Filipino Sign
            Language (FSL) text, enhancing accessibility and user convenience.
          </p>
        </div>
        <div className={style.card}>
          <Image
            className={style.roundedImage}
            src={baybayin}
            alt="Baybayin"
          ></Image>
          <p className={style.name}>Baybayin</p>
          <p className={style.description}>
            Baybayin translation of the Filipino Sign Language (FSL) output text
            to aid in understanding and learning the culture of Filipino
            language.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Features;
