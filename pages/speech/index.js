import React, { useState, useEffect, useRef } from "react";
import CardDictionary from "@/components/card/Card";
import AKO from "../../assets/gif/AKO.gif";
import ANIM from "../../assets/gif/ANIM.gif";
import APAT from "../../assets/gif/APAT.gif";
import ARAL from "../../assets/gif/ARAL.gif";
import ATE from "../../assets/gif/ATE.gif";
import BASA from "../../assets/gif/BASA.gif";
import DALAWA from "../../assets/gif/DALAWA.gif";
import DUKTOR from "../../assets/gif/DUKTOR.gif";
import HELLO from "../../assets/gif/HELLO.gif";
import HINTO from "../../assets/gif/HINTO.gif";
import I_LOVE_YOU from "../../assets/gif/I LOVE YOU.gif";
import IKAW from "../../assets/gif/IKAW.gif";
import INOM from "../../assets/gif/INOM.gif";
import ISA from "../../assets/gif/ISA.gif";
import KINIG from "../../assets/gif/KINIG.gif";
import KO from "../../assets/gif/KO.gif";
import KUYA from "../../assets/gif/KUYA.gif";
import KYUT from "../../assets/gif/KYUT.gif";
import LARO from "../../assets/gif/LARO.gif";
import LIMA from "../../assets/gif/LIMA.gif";
import MABAIT from "../../assets/gif/MABAIT.gif";
import MALAMBOT from "../../assets/gif/MALAMBOT.gif";
import MAMAYA from "../../assets/gif/MAMAYA.gif";
import MATAMIS from "../../assets/gif/MATAMIS.gif";
import MATIGAS from "../../assets/gif/MATIGAS.gif";
import MO from "../../assets/gif/MO.gif";
import NANAY from "../../assets/gif/NANAY.gif";
import NARS from "../../assets/gif/NARS.gif";
import NGAYON from "../../assets/gif/NGAYON.gif";
import NO from "../../assets/gif/NO.gif";
import PINSAN from "../../assets/gif/PINSAN.gif";
import PITO from "../../assets/gif/PITO.gif";
import PULIS from "../../assets/gif/PULIS.gif";
import SAMPU from "../../assets/gif/SAMPU.gif";
import SIGAW from "../../assets/gif/SIGAW.gif";
import SILA from "../../assets/gif/SILA.gif";
import SIYA from "../../assets/gif/SIYA.gif";
import SIYAM from "../../assets/gif/SIYAM.gif";
import TAHIMIK from "../../assets/gif/TAHIMIK.gif";
import TAKBO from "../../assets/gif/TAKBO.gif";
import TATAY from "../../assets/gif/TATAY.gif";
import TIYA from "../../assets/gif/TIYA.gif";
import TIYO from "../../assets/gif/TIYO.gif";
import TUBERO from "../../assets/gif/TUBERO.gif";
import WALO from "../../assets/gif/WALO.gif";
import WEYTER from "../../assets/gif/WEYTER.gif";
import YES from "../../assets/gif/YES.gif";

import style from "./speech.module.css";
const SpeechToText = (props) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [gifArray, setGifArray] = useState([]);
  const recognitionRef = useRef(null);
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
    { image: TIYA, name: "TIYA" },
    { image: TIYO, name: "TIYO" },
    { image: TUBERO, name: "TUBERO" },
    { image: WALO, name: "WALO" },
    { image: WEYTER, name: "WEYTER" },
    { image: YES, name: "YES" },
  ];

  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      recognitionRef.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      const recognition = recognitionRef.current;

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "fil-PH"; // Set language to Filipino-Philippines

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const interimTranscript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setTranscript(interimTranscript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (error) => {
        console.error("Speech recognition error:", error);
        setIsListening(false);
      };
    } else {
      console.error("Speech recognition is not supported in this browser.");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startListening = () => {
    const recognition = recognitionRef.current;
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    const recognition = recognitionRef.current;
    if (recognition && isListening) {
      recognition.stop();

      // Search for corresponding GIF in single_array based on the spoken text
      const spokenText = transcript.trim().toUpperCase();
      const matchingItem = single_array.find(
        (item) => item.name.toUpperCase() === spokenText
      );

      // Update state with the corresponding image
      if (matchingItem) {
        // Do something with the matchingItem.image (e.g., set it in state)
        console.log(`Matching GIF found: ${matchingItem.image}`);
      } else {
        // No matching item found, handle accordingly
        console.log("No matching GIF found");
      }
    }
  };
  const translateWord = () => {
    const textSpeechDiv = document.getElementById("textSpeech");
    if (textSpeechDiv) {
      // Use either innerText or textContent to get the text content
      const textInsideDiv =
        textSpeechDiv.innerText || textSpeechDiv.textContent;
      // Update the state with the text content
      setTranscript(textInsideDiv);
      setGifArray(textInsideDiv.split(" "));
      console.log(gifArray);
    }
  };

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <button onClick={translateWord}>Translate</button>
      <div style={{ marginTop: "20px" }}>
        <p>Text as it listens:</p>
        <div
          id="textSpeech"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "50px",
          }}
        >
          {transcript || "Waiting for speech input..."}
        </div>
      </div>
      <div className={style.gifHolder}>
        {gifArray.map((letter, index) => {
          const matchingItem = single_array.find(
            (item) => item.name.toLowerCase() === letter.toLowerCase()
          );
          if (matchingItem) {
            return (
              <CardDictionary
                key={index}
                image={matchingItem.image}
                name={matchingItem.name}
              />
            );
          }
          return null; // Handle case where no match is found
        })}
      </div>
    </div>
  );
};

export default SpeechToText;
