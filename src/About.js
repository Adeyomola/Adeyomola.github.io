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
      <div id="aboutDiv">
        <p id="details">
          I do not find satisfaction in who I was yesterday; I'm not trying to
          lose to my past. My goal is to persist on an endless path towards the
          peak of my existence. So, if there's a problem I cannot solve today,
          I'll solve it tomorrow or get closer to a solution.
          <br></br>
          When I'm not doing Software Engineering, I'm a Pharmacist, a Writer,
          and i++ other things. I get tired sometimes, and when I do, you'll
          find me with my face buried in something comical.
        </p>
      </div>
    </body>
  );
}

export default About;
