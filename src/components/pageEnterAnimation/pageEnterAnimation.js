import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../pageEnterAnimation/pageEnterAnimation.css";
import HomePage from "../homePage/homePage";

const PageEnterAnimation = (props) => {
  const coverName = useRef(null);
  const coverDot = useRef(null);
  const cover1 = useRef(null);
  const cover2 = useRef(null);
  const cover3 = useRef(null);
  const cover4 = useRef(null);
  const welcomeSentence = useRef(null);

  // set GSAP Timeline
  const [tl] = useState(new gsap.timeline());
  const [finishRender, setFinishRender] = useState(false);
  // name and dot animation
  useEffect(() => {
    tl.from(coverName.current, {
      opacity: 0,
      xPercent: -100,
      delay: 0.5,
      duration: 1,
      ease: "power1.out",
      yoyo: true,
    })
    .from(coverDot.current,{
        opacity: 0,
        yPercent: 100,
        delay: 0.5,
        repeatDelay: 1,
        duration: 1,
        ease: "power1.out",
    }, 0.01)
    .to(coverDot.current,{
        x: 30,
        duration: 1,
        ease: "power1.out",
    })
    .to(coverDot.current,{
        x: 0,
        duration: 0.5,
        ease: "power1.out",
    })
    .to(coverName.current, {
        opacity: 0,
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        yoyo: true,
    })
    .to(coverDot.current,{
        opacity: 0,
        duration: 1,
        ease: "expo.out",
    }, 3)
    .to(cover1.current, {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3)
    .to(cover2.current, {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3.2)
    .to(cover3.current, {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3.4)
    .to(cover4.current, {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          setFinishRender(true);
        }
    }, 3.6)
    .from(welcomeSentence.current, {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
        onComplete: () => {
          setFinishRender(true);
        }
    }, 3.8);
  }, [tl]);

  return (
    <div>
      <div ref={cover4} className="cover-4"></div>
      <div ref={cover3} className="cover-3"></div>
      <div ref={cover2} className="cover-2"></div>

      <div ref={cover1} className="cover-1">
        <div className="cover-heading">
          <h1 ref={coverName} className="cover-name">
            Mingjie Wang
          </h1>
          <span ref={coverDot} className="cover-dot">
            .
          </span>
        </div>
      </div>

      <div ref={welcomeSentence} className="welcome-sentence">Welcome to Mingjie Wang's Personal Space (σ'ω')σ</div>
      <HomePage available={finishRender}></HomePage>
    </div>
  );
};

export default PageEnterAnimation;
