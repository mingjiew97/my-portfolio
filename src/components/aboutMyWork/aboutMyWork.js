import React, { useState, useEffect, useRef } from "react";
import "../aboutMyWork/aboutMyWork.css";

const myExperience = {
  verizon: [
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon1: [
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon2: [
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
  ],
  verizon3: [
    "对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width的宽度，width没设置也为 auto，所以子项占用空间由内容决定。对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width为70px，所以子项子项占用空间是70px。 对于子项3，flex-basis为100px，覆盖width 的宽度，所以子项占用空间是100px。",
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
  return (
    <div id="about-my-work">
      <h1>Cards</h1>
      <main>
        {Object.entries(myExperience).map(([key, arr], index) => {
          return (
            <div id={key} key={key}>
              <section className="cards">
                {arr.map((description, arr_index) => {
                  return (
                    <article key={key + arr_index}>
                      <p>{description}</p>
                    </article>
                  );
                })}
              </section>
            </div>
          );
        })}
      </main>

      <footer>
        <div className="footer-pick">Cards</div>
      </footer>
    </div>
  );
};
