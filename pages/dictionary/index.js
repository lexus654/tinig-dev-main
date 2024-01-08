import A from "../../assets/dictionary/ALPHABET/A.png";
import B from "../../assets/dictionary/ALPHABET/B.png";
import C from "../../assets/dictionary/ALPHABET/C.png";
import D from "../../assets/dictionary/ALPHABET/D.png";
import E from "../../assets/dictionary/ALPHABET/E.png";
import F from "../../assets/dictionary/ALPHABET/F.png";
import G from "../../assets/dictionary/ALPHABET/G.png";
import H from "../../assets/dictionary/ALPHABET/H.png";
import I from "../../assets/dictionary/ALPHABET/I.png";
import K from "../../assets/dictionary/ALPHABET/K.png";
import L from "../../assets/dictionary/ALPHABET/L.png";
import M from "../../assets/dictionary/ALPHABET/M.png";
import N from "../../assets/dictionary/ALPHABET/N.png";
import O from "../../assets/dictionary/ALPHABET/O.png";
import P from "../../assets/dictionary/ALPHABET/P.png";
import Q from "../../assets/dictionary/ALPHABET/Q.png";
import R from "../../assets/dictionary/ALPHABET/R.png";
import S from "../../assets/dictionary/ALPHABET/S.png";
import T from "../../assets/dictionary/ALPHABET/T.png";
import U from "../../assets/dictionary/ALPHABET/U.png";
import V from "../../assets/dictionary/ALPHABET/V.png";
import W from "../../assets/dictionary/ALPHABET/W.png";
import X from "../../assets/dictionary/ALPHABET/X.png";
import Y from "../../assets/dictionary/ALPHABET/Y.png";

// single
import AKO from "../../assets/dictionary/SINGLE/AKO.png";
import ANIM from "../../assets/dictionary/SINGLE/ANIM.png";
import APAT from "../../assets/dictionary/SINGLE/APAT.png";
import ARAL from "../../assets/dictionary/SINGLE/ARAL.png";
import ATE from "../../assets/dictionary/SINGLE/ATE.png";
import BASA from "../../assets/dictionary/SINGLE/BASA.png";
import DALAWA from "../../assets/dictionary/SINGLE/DALAWA.png";
import DUKTOR from "../../assets/dictionary/SINGLE/DUKTOR.png";
import HELLO from "../../assets/dictionary/SINGLE/HELLO.png";
import HINTO from "../../assets/dictionary/SINGLE/HINTO.png";
import I_LOVE_YOU from "../../assets/dictionary/SINGLE/I LOVE YOU.png";
import IKAW from "../../assets/dictionary/SINGLE/IKAW.png";
import INOM from "../../assets/dictionary/SINGLE/INOM.png";
import ISA from "../../assets/dictionary/SINGLE/ISA.png";
import KINIG from "../../assets/dictionary/SINGLE/KINIG.png";
import KO from "../../assets/dictionary/SINGLE/KO.png";
import KUYA from "../../assets/dictionary/SINGLE/KUYA.png";
import KYUT from "../../assets/dictionary/SINGLE/KYUT.png";
import LARO from "../../assets/dictionary/SINGLE/LARO.png";
import LIMA from "../../assets/dictionary/SINGLE/LIMA.png";
import MABAIT from "../../assets/dictionary/SINGLE/MABAIT.png";
import MALAMBOT from "../../assets/dictionary/SINGLE/MALAMBOT.png";
import MAMAYA from "../../assets/dictionary/SINGLE/MAMAYA.png";
import MATAMIS from "../../assets/dictionary/SINGLE/MATAMIS.png";
import MATIGAS from "../../assets/dictionary/SINGLE/MATIGAS.png";
import MO from "../../assets/dictionary/SINGLE/MO.png";
import NANAY from "../../assets/dictionary/SINGLE/NANAY.png";
import NARS from "../../assets/dictionary/SINGLE/NARS.png";
import NGAYON from "../../assets/dictionary/SINGLE/NGAYON.png";
import NO from "../../assets/dictionary/SINGLE/NO.png";
import PINSAN from "../../assets/dictionary/SINGLE/PINSAN.png";
import PITO from "../../assets/dictionary/SINGLE/PITO.png";
import PULIS from "../../assets/dictionary/SINGLE/PULIS.png";
import SAMPU from "../../assets/dictionary/SINGLE/SAMPU.png";
import SIGAW from "../../assets/dictionary/SINGLE/SIGAW.png";
import SILA from "../../assets/dictionary/SINGLE/SILA.png";
import SIYA from "../../assets/dictionary/SINGLE/SIYA.png";
import SIYAM from "../../assets/dictionary/SINGLE/SIYAM.png";
import TAHIMIK from "../../assets/dictionary/SINGLE/TAHIMIK.png";
import TAKBO from "../../assets/dictionary/SINGLE/TAKBO.png";
import TATAY from "../../assets/dictionary/SINGLE/TATAY.png";
import TATLO from "../../assets/dictionary/SINGLE/TATLO.png";
import THANK_YOU from "../../assets/dictionary/SINGLE/THANK YOU.png";
import TIYA from "../../assets/dictionary/SINGLE/TIYA.png";
import TIYO from "../../assets/dictionary/SINGLE/TIYO.png";
import TUBERO from "../../assets/dictionary/SINGLE/TUBERO.png";
import WALO from "../../assets/dictionary/SINGLE/WALO.png";
import WEYTER from "../../assets/dictionary/SINGLE/WEYTER.png";
import YES from "../../assets/dictionary/SINGLE/YES.png";

import style from "./dictionary.module.css";
import CardDictionary from "@/components/card/Card";
function Dictionary(props) {
  const alphabet_array = [
    { image: A, name: "A" },
    { image: B, name: "B" },
    { image: C, name: "C" },
    { image: D, name: "D" },
    { image: E, name: "E" },
    { image: F, name: "F" },
    { image: G, name: "G" },
    { image: H, name: "H" },
    { image: I, name: "I" },
    { image: K, name: "K" },
    { image: L, name: "L" },
    { image: M, name: "M" },
    { image: N, name: "N" },
    { image: O, name: "O" },
    { image: P, name: "P" },
    { image: Q, name: "Q" },
    { image: R, name: "R" },
    { image: S, name: "S" },
    { image: T, name: "T" },
    { image: U, name: "U" },
    { image: V, name: "V" },
    { image: W, name: "W" },
    { image: X, name: "X" },
    { image: Y, name: "Y" },
  ];
  const single_array = [
    { image: AKO, name: "AKO" },
    { image: ANIM, name: "ANIM" },
    { image: APAT, name: "APAT" },
    { image: ARAL, name: "ARAL" },
    { image: ATE, name: "ATE" },
    { image: BASA, name: "BASA" },
    { image: DALAWA, name: "DALAWA" },
    { image: DUKTOR, name: "DUKTOR" },
    { image: HELLO, name: "HELLO" },
    { image: HINTO, name: "HINTO" },
    { image: I_LOVE_YOU, name: "I LOVE YOU" },
    { image: IKAW, name: "IKAW" },
    { image: INOM, name: "INOM" },
    { image: ISA, name: "ISA" },
    { image: KINIG, name: "KINIG" },
    { image: KO, name: "KO" },
    { image: KUYA, name: "KUYA" },
    { image: KYUT, name: "KYUT" },
    { image: LARO, name: "LARO" },
    { image: LIMA, name: "LIMA" },
    { image: MABAIT, name: "MABAIT" },
    { image: MALAMBOT, name: "MALAMBOT" },
    { image: MAMAYA, name: "MAMAYA" },
    { image: MATAMIS, name: "MATAMIS" },
    { image: MATIGAS, name: "MATIGAS" },
    { image: MO, name: "MO" },
    { image: NANAY, name: "NANAY" },
    { image: NARS, name: "NARS" },
    { image: NGAYON, name: "NGAYON" },
    { image: NO, name: "NO" },
    { image: PINSAN, name: "PINSAN" },
    { image: PITO, name: "PITO" },
    { image: PULIS, name: "PULIS" },
    { image: SAMPU, name: "SAMPU" },
    { image: SIGAW, name: "SIGAW" },
    { image: SILA, name: "SILA" },
    { image: SIYA, name: "SIYA" },
    { image: SIYAM, name: "SIYAM" },
    { image: TAHIMIK, name: "TAHIMIK" },
    { image: TAKBO, name: "TAKBO" },
    { image: TATAY, name: "TATAY" },
    { image: TATLO, name: "TATLO" },
    { image: THANK_YOU, name: "THANK YOU" },
    { image: TIYA, name: "TIYA" },
    { image: TIYO, name: "TIYO" },
    { image: TUBERO, name: "TUBERO" },
    { image: WALO, name: "WALO" },
    { image: WEYTER, name: "WEYTER" },
    { image: YES, name: "YES" },
  ];

  return (
    <div className={style.bigContainer}>
      <p className={style.tags} id="Alphabet">
        {" "}
        Alphabet
      </p>
      <div className={style.container}>
        {alphabet_array.map((letter, index) => (
          <CardDictionary key={index} image={letter.image} name={letter.name} />
        ))}
      </div>
      <p className={style.tags} id="Words">
        {" "}
        Common Filipino Words
      </p>
      <div className={style.container}>
        {single_array.map((letter, index) => (
          <CardDictionary key={index} image={letter.image} name={letter.name} />
        ))}
      </div>
    </div>
  );
}
export default Dictionary;
