import React, { useEffect, useRef, useState } from "react";
import style from "./product.module.css";
import { toBaybayin } from "filipino-script-translator";
import axios from "axios";

// api 88c5d93956a921db7882f5735a25784f

function App() {
  const videoRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const overlayCtx =
    overlayCanvasRef.current && overlayCanvasRef.current.getContext("2d");

  // data management
  const [predictionClass, setPredictionClass] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState("");
  const [selectedPreviewURL, setSelectedPreviewURL] = useState("");
  const [audioKey, setaudioKey] = useState(""); // to re render audio
  // voice data for converted sign language
  // still need the prediction class - eto yung text
  const [audioKey2, setaudioKey2] = useState(""); // to re render audio for the second

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          if (overlayCtx) {
            videoRef.current.onloadedmetadata = () => {
              // Set overlay canvas dimensions to match video
              overlayCanvasRef.current.width = videoRef.current.videoWidth;
              overlayCanvasRef.current.height = videoRef.current.videoHeight;

              // Load the Roboflow model and perform predictions here
              const loadModel = window.roboflow
                .auth({
                  publishable_key: "rf_ZeFg5UpUU5ejtWd2IIFtBq5R5zg2",
                })
                .load({
                  model: "tinig_2",
                  version: 1,
                })
                .then((model) => {
                  // Model has loaded!
                  console.log("Model is loaded");

                  function drawPredictions(predictions) {
                    overlayCtx.clearRect(
                      0,
                      0,
                      overlayCanvasRef.current.width,
                      overlayCanvasRef.current.height
                    );

                    predictions.forEach((prediction) => {
                      const bbox = prediction.bbox;
                      const label = prediction.class;
                      const confidence = prediction.confidence;
                      const color = prediction.color;

                      // Adjust the bounding box to match the video dimensions
                      const x =
                        (bbox.x / videoRef.current.videoWidth) *
                        overlayCanvasRef.current.width;
                      const y =
                        (bbox.y / videoRef.current.videoHeight) *
                        overlayCanvasRef.current.height;
                      const width =
                        (bbox.width / videoRef.current.videoWidth) *
                        overlayCanvasRef.current.width;
                      const height =
                        (bbox.height / videoRef.current.videoHeight) *
                        overlayCanvasRef.current.height;

                      // Draw bounding box
                      overlayCtx.strokeStyle = color;
                      overlayCtx.lineWidth = 2;
                      overlayCtx.strokeRect(x, y, width, height);

                      // Draw label and confidence
                      overlayCtx.fillStyle = color;
                      overlayCtx.font = "16px Arial";
                      overlayCtx.fillText(
                        `${label} (${confidence.toFixed(2)}`,
                        x,
                        y - 5
                      );
                    });
                  }

                  // Function to make predictions and draw every 5 seconds
                  function makePredictionsAndDraw() {
                    model.detect(videoRef.current).then((predictions) => {
                      console.log("Predictions:", predictions);
                      if (predictions.length > 0) {
                        // Update the predictionClass with the class from the first prediction
                        setPredictionClass(predictions[0].class);
                        console.log(predictionClass);
                      } else {
                        console.log("no data found");
                        setPredictionClass(" ");
                      }
                      drawPredictions(predictions);
                    });
                  }

                  // // Call the function to make predictions and draw initially
                  makePredictionsAndDraw();

                  makeTextToSpeechRequest("anim", selectedVoiceId);

                  // Set up an interval to make predictions and draw every 5 seconds
                  setInterval(() => {
                    makeTextToSpeechRequest("anim", selectedVoiceId);

                    makePredictionsAndDraw();
                  }, 5000);
                })
                .catch((error) => {
                  console.error("Error loading the model:", error);
                });
            };
          }
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    }
  }, [overlayCtx]);

  // voice management
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
        console.log(response.data);
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
    console.log("tes");
    console.log(selectedVoiceId);
    const previewURL = voices.find(
      (voice) => voice.voice_id === selectedVoiceId
    );
    setSelectedPreviewURL(previewURL.preview_url);
    setaudioKey(selectedVoiceId);
    console.log(previewURL.preview_url);
  };

  // post functiom

  const makeTextToSpeechRequest = async (text, voice_id) => {
    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text, // Your text
          voice_id: selectedVoiceId, // Include the selected voice ID
        }),
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

  return (
    <div className={style.productContainer}>
      <div className={style.leftContainer}>
        <div className={style.container}>
          <video
            ref={videoRef}
            className={style.videoElement}
            id="videoElement"
            autoPlay
          />
          <canvas
            ref={overlayCanvasRef}
            className={style.overlayCanvas}
            id="overlayCanvas"
          />
        </div>
        <div></div>
      </div>
      <div className={style.RightContainer}>
        <div className={style.control}>
          <p className={style.controlText}>Control Panel</p>
          <div className={style.controlInside}>
            <select name="model" id="model" className={style.selectModel}>
              <option className={style.optionModel} value="FastObject">
                Fast Object Detection
              </option>
              <option className={style.optionModel} value="FastObject2">
                Fast Object Detection2
              </option>
              <option className={style.optionModel} value="FastObject1">
                Fast Object Detection2
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
              <button className={style.startBtn}> Start Translation</button>
            </div>
          </div>
        </div>

        <div className={style.textContainer}>
          {predictionClass}

          {selectedPreviewURL && (
            <audio className={style.audio} key={audioKey} controls autoPlay>
              <source src={selectedPreviewURL} type="audio/mpeg" />
            </audio>
          )}
        </div>
        <div className={style.baybayinContainer}>
          {toBaybayin(predictionClass)}
        </div>
      </div>
    </div>
  );
}

export default App;
