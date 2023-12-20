import { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [nav_state, set_nav_state] = useState("");
  const [nav, setNav] = useState("");

  function appear() {
    if (nav == "") {
      return "shownav";
    } else {
      return "";
    }
  }

  return (
    <>
      {/* <div
        className="hamburger"
        id="hamburger"
        onClick={() => setNav("shownav")}
      >
        <span className="top-bun"></span>
        <span className="middle"></span>
        <span className="bottom-bun"></span>
      </div> */}

      <div id="logo">ai</div>
      <nav
        onTouchStart={() => {
          setNav("shownav");
        }}
        onTouchEnd={() => {
          setNav("shownav");
        }}
        onMouseOver={(event) => {
          setNav("shownav");
        }}
        onMouseOut={(event) => {
          setNav("");
        }}
      >
        {/* <div className="hamburger2" onClick={() => setNav("")}>
          <span className="top-bun"></span>
          <span className="middle"></span>
          <span className="bottom-bun"></span>
        </div> */}
        <Link
          to="#"
          href="#"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          hashSpy={true}
          title="home"
        >
          <svg width="30" height="30">
            <polygon
              points="23,12 23,24, 18,24 18,16 12,16 12,24 7,24 7,12 15,4"
              stroke="black"
              fill="none"
              stroke-width="1"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link
          to="skills"
          href="#skills"
          spy={true}
          smooth={true}
          offset={-10}
          duration={50}
          hashSpy={true}
          title="skills summary"
        >
          <img
            src={require("./images/pencil.png")}
            alt="skills"
            width="23"
            height="23"
            color="white"
          />
        </Link>
        <Link
          to="cloud"
          href="#cloud"
          spy={true}
          smooth={true}
          offset={-28}
          duration={50}
          hashSpy={true}
          title="portfolio-devops"
        >
          &lt;/&gt;
        </Link>
        {/* <Link
          to="frontend"
          href="#frontend"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          hashSpy={true}
          title="portfolio-webdev"
        >
          Web
        </Link> */}
        <Link
          to="writing"
          href="#writing"
          spy={true}
          smooth={true}
          offset={-28}
          duration={50}
          hashSpy={true}
          title="technical-writing"
        >
          <svg width="30" height="30">
            <line
              x1="8"
              y1="28"
              x2="23"
              y2="28"
              stroke="black"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
            />
            <polygon
              points="25,23 21,20, 16,10 15,8 19,6 20,8, 16,10 20,8 25,18"
              stroke="black"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
            />
          </svg>
        </Link>
        <a
          href="https://github.com/adeyomola"
          target="_blank"
          rel="noreferrer"
          // className={nav_state.gh}
          // onClick={() => {
          //   set_nav_state("active");
          // }}
          title="Github"
        >
          <img
            src={require("./images/github-mark.png")}
            alt="skills"
            width="23"
            height="23"
            color="white"
          />
        </a>
      </nav>
      <div id="nav-details" className={nav}>
        <p>Home</p>
        <p>Hightlights</p>
        <p>Portfolio</p>
        <p>Technical Writing</p>
        <p>Github</p>
      </div>
    </>
  );
}

export default Nav;
