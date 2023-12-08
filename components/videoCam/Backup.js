import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

function VideoCam(props) {
  const [getPrediction, setPrediction] = useState([]);
  const [wordPredicted, setWord] = useState("");
  const [counter, setCounter] = useState(1);
  const canvasRef = useRef(null);

  const predictWord = (word) => {
    const sentence = `${word} + ${counter}`;
    props.setPredictedWord(sentence);
  };

  const videoRef = useRef(null);
  const canvasOptions = {
    width: 620,
    height: 480,
  };
  const webcamOptions = {
    width: 620,
    height: 480,
    mirrored: true,
  };

  const publishableKey = "rf_Im2zzGX4QmStLH7TNlG3WXNnYlO2";
  let modelKey = "tinig_base";
  let versionModel = +props.model;

  const drawBoundingBoxes = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvasOptions.width, canvasOptions.height);

    // Draw bounding boxes
    getPrediction.forEach((prediction) => {
      const bbox = prediction.bbox;
      const x = (bbox.x / videoRef.current.video.width) * canvasOptions.width;
      const y = (bbox.y / videoRef.current.video.height) * canvasOptions.height;
      const width =
        (bbox.width / videoRef.current.video.width) * canvasOptions.width;
      const height =
        (bbox.height / videoRef.current.video.height) * canvasOptions.height;

      // Set the color of the bounding box
      ctx.strokeStyle = prediction.color;

      // Draw the bounding box
      ctx.strokeRect(x - width / 2, y - height / 2, width, height);
    });
  };

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
              version: props.model,
            });
          model.configure({
            threshold: 0.2,
          });

          const intervalId = setInterval(async () => {
            const videoElement = videoRef.current.video;
            const predictions = await model.detect(videoElement);
            setPrediction(predictions);

            setCounter((prevCounter) => prevCounter + 1);
          }, 1500);

          // Cleanup function to clear the interval when the component unmounts
          return () => clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    initWebcam();
  }, [props.model]);

  useEffect(() => {
    // Call the function to draw bounding boxes whenever predictions change
    drawBoundingBoxes();

    // This effect runs whenever getPrediction changes
    console.log("getPrediction has changed:", getPrediction);

    if (getPrediction.length === 0) {
      setWord("testing by ronald");
    } else {
      setWord(getPrediction[0].class);
    }

    predictWord(wordPredicted);

    return () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvasOptions.width, canvasOptions.height);
    };
  }, [getPrediction]);

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Webcam
          audio={false}
          height={webcamOptions.height}
          width={webcamOptions.width}
          ref={videoRef}
          mirrored={webcamOptions.mirrored}
          screenshotFormat="image/jpeg"
        />
      </div>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 180,
          left: 220,
          zIndex: 1, // Make sure the canvas is above the video
        }}
        width={canvasOptions.width}
        height={canvasOptions.height}
      />
    </>
  );
}

export default VideoCam;
