import React, { useEffect, useRef, useState } from "react";

function VideoCam() {
  const videoRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  return (
    <>
      <video id="videoElement" autoPlay />
      <canvas id="overlayCanvas" />
    </>
  );
}
export default VideoCam;
