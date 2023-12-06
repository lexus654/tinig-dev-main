import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

function VideoCam(props) {
  // state to pass the words to the parent
  const [wordPredicted, setWord] = useState("");

  // function to send the word above
  const predictWord = (word) => {
    props.setPredictedWord(word);
    // console.log("Predictions:", predictions);
    console.log(word);
  };

  const videoRef = useRef(null);
  const webcamOptions = {
    width: 620,
    height: 480,
    mirrored: true,
  };
  // eirand emotion
  // const publishableKey = "rf_2gPnixvVexSdRbdNt9zIeV7HqIm2";
  // const modelKey = "qwertyuiopwagniyohanapin";

  // TiNIG MAIN BY DUMA

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
        }

        const model = await roboflow
          .auth({
            publishable_key: publishableKey,
          })
          .load({
            model: modelKey,
            version: 1,
          });

        setInterval(async () => {
          // Access the video element from the Webcam component
          const videoElement = videoRef.current.video;

          const predictions = await model.detect(videoElement);

          // You can add code here to handle the predictions, draw on the canvas, etc.
        }, 5000);
        if (predictions.length !== 0) {
          setWord(predictions.class);
        } else {
          setWord("testing by ronald");
        }
        predictWord(wordPredicted);
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    initWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [modelKey]);

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
