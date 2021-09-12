import React, { useState, useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import "../aboutMe/about.css";

export const AboutMe = (props) => {
  let { available } = props;
  let aboutPageElement = document.querySelector(".about-page");
  if (available && aboutPageElement) {
    aboutPageElement.classList.add("active");
  } else if (!available && aboutPageElement) {
    aboutPageElement.classList.remove("active");
    aboutPageElement.classList.add("non-active");
    setTimeout(() => aboutPageElement.classList.remove("non-active"), 1000);
  }

  const showWechatQRCode = () => {
    let tooltip = document.querySelector(".wechat-tooltip");
    tooltip.classList.toggle("active");
  };

  return (
    <div className="about-page">
      <div className="main-section">
        <div className="left-section">
          <div className="upper-wrapper">
            <div className="my-info my-photo">
              <p>My Avatar</p>
              <div className="my-photo-inner-wrapper">
                <lottie-player
                  src={window.location.origin + "/static/lottie/avatar.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
          <div className="lower-wrapper">
            <div className="my-info my-email">
              <p>My Email</p>
              <div className="my-email-inner-wrapper">
                <lottie-player
                  src={window.location.origin + "/static/lottie/email.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>mingjie.wang0907@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className="mid-section">
          <div className="upper-wrapper">
            <div className="my-info about-me">
              <p>More About me</p>
            </div>
          </div>
          <div className="lower-wrapper">
            <div className="my-info my-github">
              <p>My Github</p>
              <div className="my-github-inner-wrapper">
                <lottie-player
                  src={window.location.origin + "/static/lottie/github.json"}
                  background="transparent"
                  speed="2"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>mingjiew97</h3>
            </div>
            <div
              className="my-info my-wechat"
              onClick={(event) => showWechatQRCode()}>
              <p>My Wechat</p>
              <div className="my-wechat-inner-wrapper">
                <lottie-player
                  src={window.location.origin + "/static/lottie/wechat.json"}
                  mode="bounce"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>frank1997097</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="wechat-tooltip" onClick={(event) => showWechatQRCode()}>
        <img
          className="qrcode"
          src={window.location.origin + "/static/images/wechat-qrcode.png"}
          alt="wechat-qrcode"
        />
      </div>
    </div>
  );
};
