import Image from "next/image";
import style from "./team.module.css";
import eirand from "../../assets/Barcelo, Eirand Jan C..jpg";
import jasha from "../../assets/Basa, Jashameel Faith D..jpg";
import dumaguina from "../../assets/Dumaguina, Rafael B..jpg";
import camela from "../../assets/Romen, Camela Trisha J..jpg";
import aby from "../../assets/Lopez, Abegail A..jpg";
import ronald from "../../assets/IMG_20230921_094013.jpg";

function Team() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Meet Our Team</h1>
      <div className={style.insideContainer}>
        <div className={style.upperRow}>
          <div className={style.card}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={aby}
                alt="web designer"
              ></Image>
              <p className={style.name}>Abegail Lopez</p>
              <p className={style.position}>Web Designer </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={camela}
                alt="UI Developer"
              ></Image>
              <p className={style.name}>Camela Trisha Romen</p>
              <p className={style.position}>UI Developer</p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={ronald}
                alt="Front End Developer  "
              ></Image>
              <p className={style.name}>Ronald Laz</p>
              <p className={style.position}>Front End Developer </p>
            </div>
          </div>
        </div>
        <div className={style.bottomRow}>
          <div className={style.card}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={jasha}
                alt="Pre-processing Model 
                Developer "
              ></Image>
              <p className={style.name}>Jashameel Basa</p>
              <p className={style.position}>Pre-processing Model Developer </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={dumaguina}
                alt="Machine Learning 
                Supervisor "
              ></Image>
              <p className={style.name}>Rafael Dumaguina</p>
              <p className={style.position}>Machine Learning Supervisor </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={eirand}
                alt="Predictive Model Developer "
              ></Image>
              <p className={style.name}>Eirand Jan Barcelo</p>
              <p className={style.position}>Predictive Model Developer </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
