// Back up before space and backspace button

import React, { useEffect, useRef, useState } from "react";
import style from "./product.module.css";
import { toBaybayin } from "filipino-script-translator";
import axios from "axios";

// Refactoring
import VideoCam from "@/components/videoCam/VideoCam";
import { flushSync } from "react-dom";

function App(props) {
  // voice API
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState("");
  const [selectedPreviewURL, setSelectedPreviewURL] = useState("");
  const [audioKey, setaudioKey] = useState("");
  const [arrWords, setArrWords] = useState([]);
  // select Object detection Model
  const [model, selectModel] = useState("");
  // for api key passing to videocam
  const [apiKey, selectApiKey] = useState("");
  // for model ke`y passing to videocam
  const [modelKey, selectModelKey] = useState("");
  // for confidence threshol passing to videocam
  const [threshold, selectThreshold] = useState(0.6);
  // state of tranlated words
  const [predictedWord, setPredictedWord] = useState([]);
  // state for space or no space
  const [space, setSpace] = useState(true);

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await axios.get(
          "https://api.elevenlabs.io/v1/voices",
          {
            headers: {
              accept: "application/json",
              "xi-api-key": "748cced56ea45b07f298dcf7e3e55ab4",
            },
          }
        );
        // Handle the response data here
        setVoices(response.data.voices);
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    };

    fetchVoices();
  }, []);

  // voice management test
  const callPreview = function () {
    const previewURL = voices.find(
      (voice) => voice.voice_id === selectedVoiceId
    );
    setSelectedPreviewURL(previewURL.preview_url);
    setaudioKey(selectedVoiceId);
  };

  // post functiom
  let word = [];

  const startSpeech = () => {
    if (space) {
      const result = arrWords.join(" ");
      makeTextToSpeechRequest(result, selectedVoiceId);
    } else {
      const result = arrWords.join("");
      console.log(arrWords, "test");
      console.log(result);
      makeTextToSpeechRequest(result, selectedVoiceId);
    }
  };
  const callFlush = () => {
    setArrWords([]);
  };

  useEffect(() => {
    setArrWords((prevArr) => [...prevArr, predictedWord]);
  }, [predictedWord]);

  const makeTextToSpeechRequest = async (text, id) => {
    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${id}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": "748cced56ea45b07f298dcf7e3e55ab4",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ text }),
          body: `{"model_id":"eleven_monolingual_v1","text":"${text}","voice_settings":{"similarity_boost":0.6,"stability":0.25,"style":0,"use_speaker_boost":false}}`,
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const audioBlob = await response.blob(); // Convert the response to a Blob
      const audioURL = URL.createObjectURL(audioBlob);
      const audioElement = new Audio(audioURL);
      audioElement.play();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // slecting a model and passing it to video cam
  const handleSelectModel = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (
      selectedOption.getAttribute("data-modelkey") === "tinig_base" ||
      selectedOption.getAttribute("data-modelkey") === "tinig_single"
    ) {
      console.log(selectedOption.getAttribute("data-modelkey"));
      setSpace(true);
      selectModel(e.target.value);
      selectApiKey(selectedOption.getAttribute("data-apikey"));
      selectModelKey(selectedOption.getAttribute("data-modelkey"));
    } else if (
      selectedOption.getAttribute("data-modelkey") === "alphabet_all" ||
      selectedOption.getAttribute("data-modelkey") === "hand-sign-yhknu"
    ) {
      console.log(selectedOption.getAttribute("data-modelkey"));
      setSpace(false);
      selectModel(e.target.value);
      selectApiKey(selectedOption.getAttribute("data-apikey"));
      selectModelKey(selectedOption.getAttribute("data-modelkey"));
    }
  };
  const handleSelectThreshold = (e) => {
    selectThreshold(e.target.value);
  };
  return (
    <div className={style.productContainer}>
      <div className={style.leftContainer}>
        <div className={style.container}>
          <VideoCam
            model={model}
            apikey={apiKey}
            modelkey={modelKey}
            threshold={+threshold}
            setPredictedWord={setPredictedWord}
            refresh={callFlush}
          ></VideoCam>
        </div>
      </div>

      {/* delete first */}
      <div className={style.RightContainer}>
        <div className={style.label}>CONTROL BOX</div>
        <div className={style.control}>
          {/* <p className={style.controlText}>Control Panel</p> */}
          <div className={style.controlInside}>
            <select
              onChange={handleSelectModel}
              name="model"
              id="model"
              className={style.selectModel}
            >
              <option
                className={style.optionModel}
                value=""
                data-apikey=""
                data-modelkey=""
              >
                Select a Model
              </option>
              <option
                className={style.optionModel}
                value="2"
                data-apikey="rf_Im2zzGX4QmStLH7TNlG3WXNnYlO2"
                data-modelkey="tinig_base"
              >
                tinig_base/2 (v2)(YOLOv5)
              </option>
              <option
                className={style.optionModel}
                value="11"
                data-apikey="rf_Im2zzGX4QmStLH7TNlG3WXNnYlO2"
                data-modelkey="tinig_base"
              >
                tinig_base/11 (v11)(YOLOv5)
              </option>
              <option
                className={style.optionModel}
                value="1"
                data-apikey="rf_EfwTZMgihcV11xhMsZTVqpkzdKD2"
                data-modelkey="tinig_single"
              >
                tinig_single/1 (v1)(RoboFlow)
              </option>
              <option
                className={style.optionModel}
                value="2"
                data-apikey="rf_EfwTZMgihcV11xhMsZTVqpkzdKD2"
                data-modelkey="tinig_single"
              >
                tinig_single/2 (v2)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="1"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/1 (v1)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="3"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/3 (v3)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="7"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/7 (v7)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="8"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/8 (v8)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="9"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/9 (v9)(YOLOv8)
              </option>

              <option
                className={style.optionModel}
                value="1"
                data-apikey="rf_OoDSh3cVfzWaqk0bcLjG9mWnAEl1"
                data-modelkey="hand-sign-yhknu"
              >
                hand-sign-yhknu/1 (v1)(YOLOv5)
              </option>
              {/* final */}
              <option
                className={style.optionModel}
                value="2"
                data-apikey="rf_kr4GJNShBEaat59ZkwrtJremh2n1"
                data-modelkey="tinigsinglefinal"
              >
                tinigsinglefinal/2 (roboflow)
              </option>
              <option
                className={style.optionModel}
                value="3"
                data-apikey="rf_kr4GJNShBEaat59ZkwrtJremh2n1"
                data-modelkey="tinigsinglefinal"
              >
                tinigsinglefinal/3 (YOLOv5)
              </option>
              <option
                className={style.optionModel}
                value="4"
                data-apikey="rf_kr4GJNShBEaat59ZkwrtJremh2n1"
                data-modelkey="tinigsinglefinal"
              >
                tinigsinglefinal/4 (YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="5"
                data-apikey="rf_kr4GJNShBEaat59ZkwrtJremh2n1"
                data-modelkey="tinigsinglefinal"
              >
                tinigsinglefinal/5 (YOLO NAS)
              </option>
            </select>
            <select
              onChange={handleSelectThreshold}
              name="threshold"
              id="threshold"
              className={style.selectModel}
            >
              <option className={style.optionModel} value="0.6">
                Select a threshold
              </option>
              <option className={style.optionModel} value="0.1">
                10%
              </option>
              <option className={style.optionModel} value="0.2">
                20%
              </option>
              <option className={style.optionModel} value="0.3">
                30%
              </option>
              <option className={style.optionModel} value="0.4">
                40%
              </option>
              <option className={style.optionModel} value="0.5">
                50%
              </option>
              <option className={style.optionModel} value="0.6">
                60%
              </option>
              <option className={style.optionModel} value="0.7">
                70%
              </option>
              <option className={style.optionModel} value="0.8">
                80%
              </option>
              <option className={style.optionModel} value="0.9">
                90%
              </option>
            </select>
            <div className={style.voiceContainer}>
              <select
                className={style.selectVoice}
                value={selectedVoiceId}
                onChange={(e) => setSelectedVoiceId(e.target.value)}
              >
                <option className={style.optionVoice} value="">
                  Select a voice
                </option>
                {voices.map((voice) => (
                  <option key={voice.voice_id} value={voice.voice_id}>
                    {voice.name}
                  </option>
                ))}
              </select>
              <span onClick={callPreview}> Preview </span>
            </div>

            <div className={style.buttonContainer}>
              <button className={style.startBtn} onClick={startSpeech}>
                {" "}
                Start Translation
              </button>
              <button
                className={`${style.startBtn} ${style.marginBtn}`}
                onClick={callFlush}
              >
                {" "}
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* DISPLAY BOX */}
        <div className={style.labelBox}>FILIPINO TEXT</div>
        <div className={style.textContainer}>
          {selectedPreviewURL && (
            <audio className={style.audio} key={audioKey} controls autoPlay>
              <source src={selectedPreviewURL} type="audio/mpeg" />
            </audio>
          )}
          {space ? arrWords.join(" ") : arrWords.join("")}
        </div>
        <div className={style.labelBox}>BAYBAYIN TEXT</div>
        <div className={style.baybayinContainer}>
          {/* {Array.from(new Set(predictedWord)).join(" ")
            ? `${toBaybayin(
                Array.from(new Set(predictedWord)).join(" ")
              ).toLowerCase()}`
            : ""} */}
          {space
            ? `${toBaybayin(arrWords.join(" ")).toLowerCase()}`
            : `${toBaybayin(arrWords.join("")).toLowerCase()}`}
        </div>
      </div>
    </div>
  );
}

export default App;
