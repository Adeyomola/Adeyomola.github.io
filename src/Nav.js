import { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [nav_state, set_nav_state] = useState({
    gh: "",
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
        <Link
          to="#"
          href="#"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          hashSpy={true}
        >
          Home
        </Link>
        <Link
          to="about"
          href="#about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          hashSpy={true}
        >
          About
        </Link>
        <Link
          to="skills"
          href="#skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          hashSpy={true}
        >
          Skills
        </Link>
        <Link
          to="cloud"
          href="#cloud"
          spy={true}
          smooth={true}
          offset={0}
          duration={50}
          hashSpy={true}
        >
          DevOps
        </Link>
        <Link
          to="writing"
          href="#writing"
          spy={true}
          smooth={true}
          offset={-10}
          duration={50}
          hashSpy={true}
        >
          Technical Writing
        </Link>
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
