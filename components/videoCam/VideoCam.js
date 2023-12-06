import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

function VideoCam(props) {
  const [getPrediction, setPrediction] = useState([]);
  const [wordPredicted, setWord] = useState("");
  const [counter, setCounter] = useState(1);

  const predictWord = (word) => {
    const sentence = `${word} + ${counter}`;
    props.setPredictedWord(sentence);
  };

  const videoRef = useRef(null);
  const webcamOptions = {
    width: 620,
    height: 480,
    mirrored: true,
  };

  const publishableKey = "rf_Im2zzGX4QmStLH7TNlG3WXNnYlO2";
  let modelKey = props.model;

  useEffect(() => {
    const initWebcam = async () => {
      try {
        const userMedia = await navigator.mediaDevices.getUserMedia({
          video: {
            frameRate: 60,
          },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = userMedia;
          const model = await roboflow
            .auth({
              publishable_key: publishableKey,
            })
            .load({
              model: modelKey,
              version: 1,
            });
          model.configure({
            threshold: 0,
          });

          const intervalId = setInterval(async () => {
            const videoElement = videoRef.current.video;
            const predictions = await model.detect(videoElement);
            setPrediction(predictions);

            setCounter((prevCounter) => prevCounter + 1);
          }, 5000);

          // Cleanup function to clear the interval when component unmounts
          return () => clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    initWebcam();
  }, [modelKey]);

  useEffect(() => {
    // This effect runs whenever getPrediction changes
    console.log("getPrediction has changed:", getPrediction);

    if (getPrediction.length === 0) {
      setWord("testing by ronald");
    } else {
      setWord(getPrediction[0].class);
    }

    predictWord(wordPredicted);
  }, [getPrediction]);

  return (
    <>
      <Webcam
        audio={false}
        height={webcamOptions.height}
        width={webcamOptions.width}
        ref={videoRef}
        mirrored={webcamOptions.mirrored}
        screenshotFormat="image/jpeg"
      />
    </>
  );
}

export default VideoCam;
