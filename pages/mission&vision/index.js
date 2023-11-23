import style from "./mission&vision.module.css";
import Image from "next/image";
import banner from "../../assets/missionBanner.png";
import textBG from "../../assets/missionText.png";
import timeline from "../../assets/timeline.png";

function MissionVision() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <Image
          src={banner}
          className={style.banner}
          alt="croppedImages"
        ></Image>
      </div>
      <div className={style.rightContainer}>
        <div className={style.topPart}>
          Our <span> </span>&nbsp;<span> Mission</span>&nbsp;<span> </span> and
          <span> </span>&nbsp;<span> Vision </span>
        </div>
        <div className={style.botPart}>
          <div className={style.botPartOne}>
            <div className={`${style.mission} ${style.missionText}`}>
              Mission
            </div>
            <div className={`${style.vision} ${style.missionText}`}>Vision</div>{" "}
          </div>
          <Image
            src={timeline}
            className={style.timeline}
            alt="timeline"
          ></Image>
          <div className={style.botPartTwo}>
            <div className={style.mission}>
              Enabling seamless real-time sign language translation for enhanced
              communication and accessibility.
            </div>
            <div className={style.vision}>
              Bridging gaps, connecting Deaf and hearing communities.
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MissionVision;
