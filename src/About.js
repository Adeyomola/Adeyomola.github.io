import { useState } from "react";
import Me from "./Me.png";

function About() {
  const [overflow, setOverFlow] = useState("");
  const [content, setContent] = useState("see more...");
  const [content2, setContent2] = useState("");
  let truncateToggle = `seeLess ${overflow}`;

  function Truncated() {
    return (
      <a
        className="truncateLinks"
        onClick={() => {
          setOverFlow("seeMore");
          setContent("");
          setContent2("see less");
        }}
      >
        {content}
      </a>
    );
  }
  function Truncate() {
    return (
      <a
        className="truncateLinks"
        onClick={() => {
          setOverFlow("");
          setContent("see more...");
          setContent2("");
        }}
      >
        {content2}
      </a>
    );
  }

  function TruncationCondition() {
    if (window.innerWidth < 360) {
      return (
        <>
          <Truncated />
          <Truncate />
        </>
      );
    }
  }

  return (
    <body
      id="about"
      onPointerEnter={() => {
        window.location.hash = "about";
      }}
    >
      <main>
        <div id="content">
          <div id="Me">
            <div id="pictureDiv">
              <img src={Me} alt="Adeyomola" id="My-picture" />
            </div>
          </div>
          <div id="welcome">
            <p id="hi">Hi! Welcome to my page,</p>
            <p id="intro">I'm Adeyomola.</p>
            <p id="details" className={truncateToggle}>
              I'm a Pharmacist, Software Engineer, and Writer passionate about
              creating solutions for the future. My professional journey started
              in 2017 when I graduated from the University of Ibadan with a
              <i> Bachelor of Pharmacy</i>. From my graduation till this moment,
              I have worked as a Clinical Pharmacist, Research Pharmacist,
              Community Pharmacist, Copywriter, and Content Writer. These days,
              I spend time programming. I taught myself some machine learning in
              2021 but that was primarily for fun. Early this year, I did some
              basic front-end (HTML, CSS, and Vanilla JS) as part of a software
              engineering diploma. But my actual track for the diploma is cloud
              engineering, and I'm fully-focused on that now. However, from time
              to time, I teach myself some React JS.
            </p>
            <TruncationCondition />
          </div>
        </div>
      </main>
    </body>
  );
}

export default About;
