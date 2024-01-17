// with space and backspace
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
  // previous arr words for backspace
  const [previous, setPrevious] = useState([]);
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
    const result = arrWords.join("");
    makeTextToSpeechRequest(result, selectedVoiceId);
  };
  const callFlush = () => {
    setArrWords([]);
  };

  useEffect(() => {
    if (predictedWord === "*") {
      if (arrWords.length <= 1) {
        setArrWords([]);
      } else {
        setArrWords(previous[previous.length - 1]);
      }
    } else {
      setArrWords((prevArr) => [...prevArr, predictedWord]);
      setPrevious((prevArr) => [...prevArr, arrWords]);
      console.log("previis", previous);
    }
  }, [predictedWord]);

  const makeTextToSpeechRequest = async (text, id) => {
    console.log(text);
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
          body: `{"model_id":"eleven_monolingual_v1","text":"${text}","voice_settings":{"similarity_boost":0.6,"stability":0.45,"style":0,"use_speaker_boost":false}}`,
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
    selectModel(e.target.value);
    selectApiKey(selectedOption.getAttribute("data-apikey"));
    selectModelKey(selectedOption.getAttribute("data-modelkey"));
    console.log("ted", selectedOption.getAttribute("data-modelkey"));
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
                value="5"
                data-apikey="rf_EfwTZMgihcV11xhMsZTVqpkzdKD2"
                data-modelkey="tinig_single"
              >
                tinig_single/5 (v5)(RoboFlow)
              </option>

              <option
                className={style.optionModel}
                value="6"
                data-apikey="rf_EfwTZMgihcV11xhMsZTVqpkzdKD2"
                data-modelkey="tinig_single"
              >
                tinig_single/6 (v6)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="7"
                data-apikey="rf_EfwTZMgihcV11xhMsZTVqpkzdKD2"
                data-modelkey="tinig_single"
              >
                tinig_single/7 (v7)(YOLOv5)
              </option>
              <option
                className={style.optionModel}
                value="4"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/4 (v4)(RoboFlow)
              </option>
              <option
                className={style.optionModel}
                value="5"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/5 (v5)(YOLOv8)
              </option>
              <option
                className={style.optionModel}
                value="6"
                data-apikey="rf_yRT4Z51EDybxTNiVqpfNdYwz5dC2"
                data-modelkey="alphabet_all"
              >
                alphabet_all/6 (v6)(YOLOv5)
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

        <div className={style.textContainer}>
          {selectedPreviewURL && (
            <audio className={style.audio} key={audioKey} controls autoPlay>
              <source src={selectedPreviewURL} type="audio/mpeg" />
            </audio>
          )}
          {/* {Array.from(new Set(arrWords)).join(", ")} */}
          {arrWords}
        </div>
        <div className={style.baybayinContainer}>
          {/* {Array.from(new Set(predictedWord)).join(" ")
            ? `${toBaybayin(
                Array.from(new Set(predictedWord)).join(" ")
              ).toLowerCase()}`
            : "test"} */}
          {toBaybayin(`${arrWords}`)}
        </div>
      </div>
    </div>
  );
}

export default App;
