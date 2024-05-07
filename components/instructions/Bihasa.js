import React from "react";
import style from "./modal.module.css";
import { useState } from "react";
import Link from "next/link";
function Bihasa({ isVisible, setIsVisible }) {
  const hiddenStyle = { display: "none" };

  const closeModal = () => {
    setIsVisible(false);
  };
  const videoId = "PF0mryOW3_I"; // Replace 'YOUR_VIDEO_ID' with the actual video ID
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={style.modal} style={!isVisible ? hiddenStyle : {}}>
      <div className={style.innerContainer}>
        <div className={style.close}>
          <svg
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="34"
            height="34"
            viewBox="0 0 24 24"
          >
            <path
              d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
              opacity=".35"
            ></path>
            <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"></path>
            <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"></path>
          </svg>
        </div>
        <p className={style.heading}>
          <span> BIHASA:</span> How to use the Filipino Sign Language to Voice
          Converter
        </p>
        <div className={style.instructionbox}>
          <iframe
            width="560" // Set video width
            height="315" // Set video height
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={style.btnContaier}>
          <button onClick={closeModal}>
            <Link className={style.link} href="/product">
              Let's Go{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Bihasa;
