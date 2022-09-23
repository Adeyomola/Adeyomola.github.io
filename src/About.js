// import { useState } from "react";

function About() {
  // const [overflow, setOverFlow] = useState("");
  // const [content, setContent] = useState("see more...");
  // const [content2, setContent2] = useState("");
  // let truncateToggle = `seeLess ${overflow}`;

  // function Truncated() {
  //   return (
  //     <a
  //       className="truncateLinks"
  //       onClick={() => {
  //         setOverFlow("seeMore");
  //         setContent("");
  //         setContent2("see less");
  //       }}
  //     >
  //       {content}
  //     </a>
  //   );
  // }
  // function Truncate() {
  //   return (
  //     <a
  //       className="truncateLinks"
  //       onClick={() => {
  //         setOverFlow("");
  //         setContent("see more...");
  //         setContent2("");
  //       }}
  //     >
  //       {content2}
  //     </a>
  //   );
  // }

  // function TruncationCondition() {
  //   if (window.innerWidth < 360) {
  //     return (
  //       <>
  //         <Truncated />
  //         <Truncate />
  //       </>
  //     );
  //   }
  // }

  return (
    <body
      id="about"
      onPointerEnter={() => {
        window.location.hash = "about";
      }}
    >
      <p id="details">
        I'm a Pharmacist, Software Engineer, and Writer passionate about
        creating solutions for the future. I have worked as a Clinical
        Pharmacist, Research Pharmacist, Community Pharmacist, Copywriter, and
        Content Writer. These days, I spend time programming. I taught myself
        some machine learning in 2021 but that was primarily for fun. Early this
        year, I did some basic front-end (HTML, CSS, and Vanilla JS) as part of
        a software engineering diploma. But my actual track for the diploma is
        cloud engineering, and I'm fully-focused on that now. However, from time
        to time, I teach myself some React JS.
      </p>
    </body>
  );
}

export default About;
