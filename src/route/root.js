import React from "react";
import "../route/root.css";
import PageEnterAnimation from "../components/pageEnterAnimation/pageEnterAnimation";
import { AboutMe } from "../components/aboutMe/aboutMe";

function App() {
  return (
    <div>
      <PageEnterAnimation></PageEnterAnimation>
      {/* <AboutMe available={true} /> */}
    </div>
  );
}

export default App;
