import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { gsap } from "gsap";
import "../homePage/homePage.css";
import { AboutMe } from "../aboutMe/aboutMe";

// get the current window dimensions
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

// create element function
const creator = (tag, attrs) => {
  var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (var k in attrs) el.setAttribute(k, attrs[k]);
  return el;
};

// tab transform animation variable
const hoverPathAnimation = {
  top: {
    d:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    default:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    hover1:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z",
    hover2:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z",
    out:
      "M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z",
  },
  right: {
    d:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    default:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    hover1:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z",
    hover2:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z",
    out:
      "M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z",
  },
  left: {
    d:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    default:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    hover1:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z",
    hover2:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z",
    out:
      "M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z",
  },
  bottom: {
    d:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    default:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    hover1:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z",
    hover2:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z",
    out:
      "M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z",
  },
  back: {
    d:
      "M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z",
    default:
      "M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z",
    hover1:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z",
    hover2:
      "M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z",
    out:
      "M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z",
  },
};

const tabColor = {
  back: "#ffffff",
  top: "#ffcb75",
  right: "#ff7586",
  bottom: "#c8ade1",
  left: "#a7dcf7",
};

const welcomeSentence = {
  none: null,
  default: "Welcome to Mingjie Wang's Personal Space (σ'ω')σ",
  top: "my fantastic working experience",
  right: "my awesome blog",
  bottom: "more about me",
  left: "contact me",
};

const HomePage = (props) => {
  let { available } = props;
  const [aboutMeCheck, setAboutMeCheck] = useState('false');

  // initial animation of displaying the tabs
  useEffect(() => {
    if (!available) return;
    const allHandleElements = document.querySelectorAll(".handle");
    for (let element of allHandleElements) {
      if (element["attributes"]["data-permalink"]["value"] === "back") {
        continue;
      }
      let currentPath = element.querySelector("path");
      let currentTabPosition = element["attributes"]["data-position"]["value"];
      anime({
        targets: currentPath,
        duration: 500,
        easing: "easeOutBack",
        d: hoverPathAnimation[currentTabPosition]["d"],
      });
    }
  }, [available]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  const [handleAnimation, setHandleAnimation] = useState(false);
  const [transitionAnimation, setTransitionAnimation] = useState(false);

  let pageTransitionPathPoints = null;
  let vw = windowDimensions.width;
  let vh = windowDimensions.height;
  const getRectanglePaths = (top, right, bottom, left) => {
    pageTransitionPathPoints = {
      default:
        "M0,0 C0,0 " +
        vw / 4 +
        ",0 " +
        vw / 2 +
        ",0 C" +
        (vw / 4) * 3 +
        ",0 " +
        vw +
        ",0 " +
        vw +
        ",0 C" +
        vw +
        ",0 " +
        vw +
        "," +
        vh / 4 +
        " " +
        vw +
        "," +
        vh / 2 +
        " C" +
        vw +
        "," +
        (vh / 4) * 3 +
        " " +
        vw +
        "," +
        vh +
        " " +
        vw +
        "," +
        vh +
        " C" +
        vw +
        "," +
        vh +
        " " +
        (vw / 4) * 3 +
        "," +
        vh +
        " " +
        vw / 2 +
        "," +
        vh +
        " C" +
        vw / 4 +
        "," +
        vh +
        " 0," +
        vh +
        " 0," +
        vh +
        " C0," +
        vh +
        " 0," +
        (vh / 4) * 3 +
        " 0," +
        vh / 2 +
        " C0," +
        vh / 4 +
        " 0,0 0,0 Z",
      inner:
        "M0,0 C0,0 " +
        vw / 4 +
        "," +
        top +
        " " +
        vw / 2 +
        "," +
        top +
        " C" +
        (vw / 4) * 3 +
        "," +
        top +
        " " +
        vw +
        ",0 " +
        vw +
        ",0 C" +
        vw +
        ",0 " +
        (vw - right) +
        "," +
        vh / 4 +
        " " +
        (vw - right) +
        "," +
        vh / 2 +
        " C" +
        (vw - right) +
        "," +
        (vh / 4) * 3 +
        " " +
        vw +
        "," +
        vh +
        " " +
        vw +
        "," +
        vh +
        " C" +
        vw +
        "," +
        vh +
        " " +
        (vw / 4) * 3 +
        "," +
        (vh - bottom) +
        " " +
        vw / 2 +
        "," +
        (vh - bottom) +
        " C" +
        vw / 4 +
        "," +
        (vh - bottom) +
        " 0," +
        vh +
        " 0," +
        vh +
        " C0," +
        vh +
        " " +
        left +
        "," +
        (vh / 4) * 3 +
        " " +
        left +
        "," +
        vh / 2 +
        " C" +
        left +
        "," +
        vh / 4 +
        " 0,0 0,0 Z",
      outer:
        "M0,0 C0,0 " +
        vw / 4 +
        "," +
        -top +
        " " +
        vw / 2 +
        "," +
        -top +
        " C" +
        (vw / 4) * 3 +
        "," +
        -top +
        " " +
        vw +
        ",0 " +
        vw +
        ",0 C" +
        vw +
        ",0 " +
        (vw - -right) +
        "," +
        vh / 4 +
        " " +
        (vw - -right) +
        "," +
        vh / 2 +
        " C" +
        (vw - -right) +
        "," +
        (vh / 4) * 3 +
        " " +
        vw +
        "," +
        vh +
        " " +
        vw +
        "," +
        vh +
        " C" +
        vw +
        "," +
        vh +
        " " +
        (vw / 4) * 3 +
        "," +
        (vh - -bottom) +
        " " +
        vw / 2 +
        "," +
        (vh - -bottom) +
        " C" +
        vw / 4 +
        "," +
        (vh - -bottom) +
        " 0," +
        vh +
        " 0," +
        vh +
        " C0," +
        vh +
        " " +
        -left +
        "," +
        (vh / 4) * 3 +
        " " +
        -left +
        "," +
        vh / 2 +
        " C" +
        -left +
        "," +
        vh / 4 +
        " 0,0 0,0 Z",
    };
  };

  const wrapper = useRef(null);
  const pageTransitionRef = useRef(null);

  const pathEnter = (tabPosition, event) => {
    if (handleAnimation || transitionAnimation) return;
    anime({
      targets: event.target,
      duration: 300,
      easing: "easeOutBack",
      d: hoverPathAnimation[tabPosition]["hover2"],
    });
    if (tabPosition === "back") return;
    changeCenterTextValue(tabPosition);
  };

  const pathLeave = (tabPosition, event) => {
    if (handleAnimation || transitionAnimation) return;
    anime({
      targets: event.target,
      duration: 300,
      easing: "easeOutBack",
      d: hoverPathAnimation[tabPosition]["default"],
    });
  };

  const pathClick = (event) => {
    let handleElement = event.target.closest(".handle");
    if (transitionAnimation) return;
    setTransitionAnimation(true);
    setHandleAnimation(true);
    // find the parent handle element
    pageTransition(handleElement);
  };

  // handle page trob transition animation
  const handleAnimations = (isBack) => {
    const allHandleElements = document.querySelectorAll(
      '.handle[data-permalink="none"]'
    );
    for (let element of allHandleElements) {
      !isBack ? element.classList.add("out") : element.classList.remove("out");
      let currentPath = element.querySelector("path");
      let tabPosition = element["attributes"]["data-position"]["value"];
      setHandleAnimation(true);
      anime({
        targets: currentPath,
        duration: 500,
        easing: "easeOutBack",
        d: isBack
          ? hoverPathAnimation[tabPosition]["default"]
          : hoverPathAnimation[tabPosition]["out"],
        complete: () => {
          setHandleAnimation(false);
        },
      });
    }
  };

  // handle page return transition animation
  const backHandleAnimation = (isBack, tabPosition) => {
    let backHandleElement = document.querySelector(
      '.handle[data-permalink="back"]'
    );
    let backHandleElementPath = backHandleElement.querySelector("path");
    backHandleElement["attributes"]["data-position"]["value"] = tabPosition;
    setHandleAnimation(true);
    anime({
      targets: backHandleElementPath,
      duration: 500,
      easing: "easeOutBack",
      d: isBack
        ? hoverPathAnimation[tabPosition]["out"]
        : hoverPathAnimation[tabPosition]["default"],
      complete: () => {
        setHandleAnimation(false);
      },
    });
  };

  // tab click -> page transition
  const pageTransition = (handleElement) => {
    // disable all pointer events
    wrapper.current.style.pointerEvents = "none";
    let tabPosition = handleElement["attributes"]["data-position"]["value"];
    let isBack =
      handleElement["attributes"]["data-permalink"]["value"] === "back";
    let bgColor = tabColor[isBack ? "back" : tabPosition];
    let container = pageTransitionRef.current;

    // remove svg from container just in case
    let removeSvgElement = container.querySelector("svg");
    if (removeSvgElement) {
      removeSvgElement.parentNode.removeChild(removeSvgElement);
    }
    // add corresponding css to container
    container.style.cssText = `${tabPosition}: -100%; width: ${vw}px; height: ${vh}px;`;
    // set up the animation path
    let transitionOffsetX = vw / (Math.floor(Math.random() * 10) + 6);
    let transitionOffsetY = vh / (Math.floor(Math.random() * 10) + 6);
    getRectanglePaths(
      tabPosition === "bottom" ? transitionOffsetX : 0,
      tabPosition === "left" ? transitionOffsetY : 0,
      tabPosition === "top" ? transitionOffsetX : 0,
      tabPosition === "right" ? transitionOffsetY : 0
    );

    // create new animation svg and path
    let newAnimationSvg = creator("svg", {
      width: vw,
      height: vh,
      class: "shape",
      preserveAspectRatio: "none",
      viewBox: "0 0 " + vw + " " + vh,
      fill: bgColor,
    });
    let newAnimationPath = creator("path", {
      d: pageTransitionPathPoints.default,
    });
    newAnimationSvg.append(newAnimationPath);
    container.append(newAnimationSvg);
    // determine if the current Animation is back animation or not
    isBack
      ? backHandleAnimation(isBack, tabPosition)
      : handleAnimations(isBack);
    // start the page Transition animation
    // full page drop down
    anime({
      targets: container,
      duration: 1000,
      easing: "easeInQuad",
      top: tabPosition === "top" ? 0 : false,
      right: tabPosition === "right" ? 0 : false,
      bottom: tabPosition === "bottom" ? 0 : false,
      left: tabPosition === "left" ? 0 : false,
    });
    // full page drop down fluid effect
    anime({
      targets: newAnimationPath,
      duration: 500,
      easing: "linear",
      d: pageTransitionPathPoints.inner,
      complete: () => {
        switch (tabPosition) {
          case "bottom":
            isBack ? setAboutMeCheck('leave') : setAboutMeCheck('true');
            break;
          case "up":
            
            break;
          case "left":
            
            break;
          case "right":
            
            break;

          default:
            break;
        }
        anime({
          targets: newAnimationPath,
          duration: 300,
          easing: "linear",
          d: pageTransitionPathPoints.outer,
          complete: () => {
            anime({
              targets: newAnimationPath,
              duration: 400,
              easing: "easeInCubic",
              d: pageTransitionPathPoints.default,
              complete: () => {
                // remove the path
                document.querySelector(
                  "body, html"
                ).style.backgroundColor = bgColor;
                container.style.cssText = "";
                container.removeChild(container.children[0]);
                // determine if the current Animation is back animation or not
                // remove / add welcome sentence
                let welcomeSentenceElement = document.querySelector(
                  ".welcome-sentence"
                );
                if (isBack) {
                  welcomeSentenceElement.innerHTML = welcomeSentence.default;
                  let centerTextFirstComeAnimationTimeLine = new gsap.timeline();
                  centerTextAnimation = true;
                  let xPosition, yPosition;
                  switch (tabPosition) {
                    case "top":
                      yPosition = -100;
                      break;
                    case "right":
                      xPosition = 100;
                      break;
                    case "bottom":
                      yPosition = 100;
                      break;
                    case "left":
                      xPosition = -100;
                      break;
                    default:
                      break;
                  }
                  centerTextFirstComeAnimationTimeLine.from(
                    welcomeSentenceElement,
                    {
                      xPercent: xPosition,
                      yPercent: yPosition,
                      duration: 1,
                      ease: "power1.out",
                      opacity: 0,
                      onComplete: () => {
                        // show four tabs
                        handleAnimations(isBack);
                        centerTextAnimation = false;
                      },
                    },
                    0.2
                  );
                  welcomeSentenceElement.style.display = "block";
                } else {
                  backHandleAnimation(isBack, tabPosition);
                  welcomeSentenceElement.style.display = "none";
                }
                // reset about me page 
                if (isBack) setAboutMeCheck('false');
                // reset everything to default state
                wrapper.current.style.pointerEvents = "all";
                setTransitionAnimation(false);
              },
            });
          },
        });
      },
    });
  };

  // center text animation
  let centerTextAnimation = false;
  let centerTextTimeLine = new gsap.timeline();
  const changeCenterTextValue = (tabPosition) => {
    let element = document.querySelector(".welcome-sentence");
    if (element.innerHTML === welcomeSentence[tabPosition]) return;
    if (centerTextAnimation) {
      setTimeout(() => {
        changeCenterTextValue(tabPosition);
      }, 50);
      return;
    }
    centerTextAnimation = true;
    element.innerHTML = welcomeSentence[tabPosition];
    let xPosition, yPosition;
    switch (tabPosition) {
      case "top":
        yPosition = -100;
        break;
      case "right":
        xPosition = 100;
        break;
      case "bottom":
        yPosition = 100;
        break;
      case "left":
        xPosition = -100;
        break;
      default:
        break;
    }
    centerTextTimeLine.from(element, {
      xPercent: xPosition,
      yPercent: yPosition,
      duration: 0.6,
      ease: "power1.out",
      opacity: 0,
      onComplete: () => {
        centerTextAnimation = false;
      },
    });
  };

  return !available ? null : (
    <div>
      <div className="wrapper" ref={wrapper}>
        <div className="handle" data-permalink="back" data-position="none">
          <svg
            className="shape"
            width="220"
            height="220"
            preserveAspectRatio="none"
            viewBox="0 0 220 220"
          >
            <path
              onClick={(event) => pathClick(event)}
              onMouseEnter={(event) => pathEnter("back", event)}
              onMouseLeave={(event) => pathLeave("back", event)}
              d={hoverPathAnimation["back"]["d"]}
            ></path>
          </svg>
        </div>
        <div className="handle" data-permalink="none" data-position="top">
          <svg
            className="shape"
            width="220"
            height="220"
            preserveAspectRatio="none"
            viewBox="0 0 220 220"
          >
            <path
              onClick={(event) => pathClick(event)}
              onMouseEnter={(event) => pathEnter("top", event)}
              onMouseLeave={(event) => pathLeave("top", event)}
              d={hoverPathAnimation["top"]["out"]}
            ></path>
          </svg>
        </div>
        <div className="handle" data-permalink="none" data-position="right">
          <svg
            className="shape"
            width="220"
            height="220"
            preserveAspectRatio="none"
            viewBox="0 0 220 220"
          >
            <path
              onClick={(event) => pathClick(event)}
              onMouseEnter={(event) => pathEnter("right", event)}
              onMouseLeave={(event) => pathLeave("right", event)}
              d={hoverPathAnimation["right"]["out"]}
            ></path>
          </svg>
        </div>
        <div className="handle" data-permalink="none" data-position="bottom">
          <svg
            className="shape"
            width="220"
            height="220"
            preserveAspectRatio="none"
            viewBox="0 0 220 220"
          >
            <path
              onClick={(event) => pathClick(event)}
              onMouseEnter={(event) => pathEnter("bottom", event)}
              onMouseLeave={(event) => pathLeave("bottom", event)}
              d={hoverPathAnimation["bottom"]["out"]}
            ></path>
          </svg>
        </div>
        <div className="handle" data-permalink="none" data-position="left">
          <svg
            className="shape"
            width="220"
            height="220"
            preserveAspectRatio="none"
            viewBox="0 0 220 220"
          >
            <path
              onClick={(event) => pathClick(event)}
              onMouseEnter={(event) => pathEnter("left", event)}
              onMouseLeave={(event) => pathLeave("left", event)}
              d={hoverPathAnimation["left"]["out"]}
            ></path>
          </svg>
        </div>
        <div ref={pageTransitionRef} className="page-transition"></div>
      </div>

      <AboutMe available={aboutMeCheck} />
    </div>
  );
};

export default HomePage;
