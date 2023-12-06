import React, { useEffect, useRef, useState } from "react";
import style from "./product.module.css";
import { toBaybayin } from "filipino-script-translator";
import axios from "axios";

// Refactoring
import VideoCam from "@/components/videoCam/VideoCam";

function App(props) {
  // voice API
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState("");
  const [selectedPreviewURL, setSelectedPreviewURL] = useState("");
  const [audioKey, setaudioKey] = useState("");

  // select Object detection Model
  const [model, selectModel] = useState("tinig_base");
  // state of tranlated words
  const [predictedWord, setPredictedWord] = useState("");
  console.log("hello", predictedWord);
  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await axios.get(
          "https://api.elevenlabs.io/v1/voices",
          {
            headers: {
              accept: "application/json",
              "xi-api-key": "88c5d93956a921db7882f5735a25784f",
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

  const startSpeech = () => {
    makeTextToSpeechRequest(predictedWord, selectedVoiceId);
  };

  const makeTextToSpeechRequest = async (text, id) => {
    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, id }), // Send the text in the request body
      });

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
    selectModel(e.target.value);
  };
  return (
    <div className={style.productContainer}>
      <div className={style.leftContainer}>
        <div className={style.container}>
          <VideoCam
            model={model}
            setPredictedWord={setPredictedWord}
          ></VideoCam>
        </div>
      </div>

      {/* delete first */}
      <div className={style.RightContainer}>
        <div className={style.control}>
          <p className={style.controlText}>Control Panel</p>
          <div className={style.controlInside}>
            <select
              onChange={handleSelectModel}
              name="model"
              id="model"
              className={style.selectModel}
            >
              <option className={style.optionModel} value="tinig_base">
                Base Detection Model
              </option>
              <option className={style.optionModel} value="tinig_base/1">
                Roboflow Detection Model
              </option>
              <option className={style.optionModel} value="tinig_base/2">
                YoloV8 Detection Model
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
            </div>
          </div>
        </div>

        <div className={style.textContainer}>
          {selectedPreviewURL && (
            <audio className={style.audio} key={audioKey} controls autoPlay>
              <source src={selectedPreviewURL} type="audio/mpeg" />
            </audio>
          )}
          {predictedWord}
        </div>
        <div className={style.baybayinContainer}>
          {predictedWord ? `${toBaybayin(predictedWord)}` : "test"}
        </div>
      </div>
    </div>
  );
}

export default App;
