import { useState } from "react";

function Nav() {
  const [nav_state, set_nav_state] = useState({
    home: "active",
    about: "",
    cloud: "",
    skills: "",
    writing: "",
    gh: "",
    front: "",
  });
  const [nav, setNav] = useState("");

  return (
    <>
      <div
        className="hamburger"
        id="hamburger"
        onClick={() => setNav("shownav")}
      >
        <span className="top-bun"></span>
        <span className="middle"></span>
        <span className="bottom-bun"></span>
      </div>
      <div id="logo">ai</div>
      <nav className={nav}>
        <div className="hamburger2" onClick={() => setNav("")}>
          <span className="top-bun"></span>
          <span className="middle"></span>
          <span className="bottom-bun"></span>
        </div>
        <a
          href="/#"
          className={nav_state.home}
          onClick={() => {
            set_nav_state({ home: "active" });
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className={nav_state.about}
          onClick={() => {
            set_nav_state({ about: "active" });
          }}
        >
          About Me
        </a>
        <a
          href="#skills"
          className={nav_state.skills}
          onClick={() => {
            set_nav_state({ skills: "active" });
          }}
        >
          Skills
        </a>
        <a
          href="#cloud"
          className={nav_state.cloud}
          onClick={() => {
            set_nav_state({ cloud: "active" });
          }}
        >
          DevOps
        </a>
        {/* <a
          href="#frontend"
          className={nav_state.front}
          onClick={() => {
            set_nav_state({ front: "active" });
          }}
        >
          Web Dev
        </a> */}
        <a
          href="#writing"
          className={nav_state.writing}
          onClick={() => {
            set_nav_state({ writing: "active" });
          }}
        >
          Technical Writing
        </a>
        <a
          href="https://github.com/adeyomola"
          target="_blank"
          rel="noreferrer"
          className={nav_state.gh}
          onClick={() => {
            set_nav_state({ gh: "active" });
          }}
        >
          Github
        </a>
      </nav>
    </>
  );
}

export default Nav;
