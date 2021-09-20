import React, { useState, useEffect, useRef } from "react";
import ScrollOut from "scroll-out";
import "../aboutMyWork/aboutMyWork.css";

const myExperience = {
  verizon: [
    "1234对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon1: [
    "2234对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon2: [
    "3234对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon3: [
    "4234对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon4: [
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
};

export const AboutMyWork = (props) => {
  let { available } = props;
  let aboutMyWorkElement = document.querySelector(".about-my-work-container");

  if (available && aboutMyWorkElement) {
    aboutMyWorkElement.classList.add("active");
  } else if (!available && aboutMyWorkElement) {
    aboutMyWorkElement.classList.remove("active");
    aboutMyWorkElement.classList.add("non-active");
    setTimeout(() => aboutMyWorkElement.classList.remove("non-active"), 1000);
  }

  const [activePage, setActivePage] = useState(0);
  // Set up scroll out
  useEffect(() => {
    let next_element = document.querySelectorAll(".card-section")[activePage];
    next_element.scrollIntoView();
    ScrollOut({
      scrollingElement: document.querySelector("main"),
      targets: ".card-section",
      threshold: 0.5,
    });
  }, [activePage]);

  const prevOrNextPage = (event, prev = true) => {
    console.log("test");

    let prevButtonElement = document.querySelector(".prev-button");
    let nextButtonElement = document.querySelector(".next-button");
    let targetElement = prev ? prevButtonElement : nextButtonElement;
    if (targetElement.classList.contains("inactive")) return;
    let newActivePage = prev ? activePage - 1 : activePage + 1;
    if (newActivePage === 0) {
      prevButtonElement.classList.add("inactive");
    } else if (newActivePage === Object.keys(myExperience).length - 1) {
      nextButtonElement.classList.add("inactive");
    } else {
      prevButtonElement.classList.remove("inactive");
      nextButtonElement.classList.remove("inactive");
    }
    setActivePage(newActivePage);
  };

  const footerPickClick = (event, index) => {
    setActivePage(index);
  };

  return (
    <div className="about-my-work-container">
      <div id="about-my-work">
        <main>
          {Object.entries(myExperience).map(([key, arr], index) => {
            return (
              <div id={key} key={key} className="card-section">
                <section className="cards">
                  <h1 className="work-header">{key}</h1>
                  <div className="cards-article-section">
                    {arr.map((description, arr_index) => {
                      return (
                        <article className="cards-article" key={key + arr_index}>
                          <p>{description}</p>
                        </article>
                      );
                    })}
                  </div>
                </section>
              </div>
            );
          })}
        </main>
        <footer>
          <div
            className="prev-button inactive"
            onClick={(event) => prevOrNextPage(event)}
          >
            Prev
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              ></path>
            </svg>
          </div>
          {Object.entries(myExperience).map(([key, arr], index) => {
            return (
              <div
                key={`footer-pick-${index}`}
                className={
                  "footer-pick " + (index === activePage ? "active" : "")
                }
                onClick={(event) => footerPickClick(event, index)}
              >
                <div className="footer-pick-tooltip">{key}</div>
              </div>
            );
          })}
          <div
            className="next-button"
            onClick={(event) => prevOrNextPage(event, false)}
          >
            Next
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              ></path>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
};
