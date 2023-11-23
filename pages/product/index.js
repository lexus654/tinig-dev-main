import React from "react";
import style from "./product.module.css";
import { toBaybayin } from "filipino-script-translator";

// Refactoring
import VideoCam from "@/components/videoCam/VideoCam";

function App() {
  return (
    <div className={style.productContainer}>
      <div className={style.leftContainer}>
        <div className={style.container}>
          <VideoCam></VideoCam>
        </div>
      </div>

      {/* delete first */}
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
              <select className={style.selectVoice}>
                <option className={style.optionVoice} value="">
                  Select a voice
                </option>
              </select>
              <span> Preview </span>
            </div>
            <div className={style.buttonContainer}>
              <button className={style.startBtn}> Start Translation</button>
            </div>
          </div>
        </div>

        <div className={style.textContainer}></div>
        <div className={style.baybayinContainer}>test </div>
      </div>
    </div>
  );
}

export default App;
