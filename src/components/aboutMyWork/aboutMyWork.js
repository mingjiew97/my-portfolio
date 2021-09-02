import React, { useState, useEffect, useRef } from "react";
import "../aboutMyWork/aboutMyWork.css";

export const AboutMyWork = (props) => {
    return (
        <div id="about-my-work">
            <main>
                <section id="cards" data-scroll="in">
                    <article>
                        <p>
                            对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width 的宽度，width没设置也为 auto，所以子项占用空间由内容决定。
                            对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width 为70px，所以子项子项占用空间是70px。
                            对于子项3，flex-basis 为100px，覆盖width 的宽度，所以子项占用空间是100px。
                        </p>
                    </article>
                    <article>
                        <p>
                            对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width 的宽度，width没设置也为 auto，所以子项占用空间由内容决定。
                            对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width 为70px，所以子项子项占用空间是70px。
                            对于子项3，flex-basis 为100px，覆盖width 的宽度，所以子项占用空间是100px。
                        </p>
                    </article>
                    <article>
                        <p>
                            对于子项1，flex-basis 如果设置默认是auto，子项占用的宽度使用width 的宽度，width没设置也为 auto，所以子项占用空间由内容决定。
                            对于子项2，flex-basis 为auto，子项占用宽度使用width 的宽度，width 为70px，所以子项子项占用空间是70px。
                            对于子项3，flex-basis 为100px，覆盖width 的宽度，所以子项占用空间是100px。
                        </p>
                    </article>
                    <h1>Card</h1>
                </section>
            </main>
        </div>
    )
};