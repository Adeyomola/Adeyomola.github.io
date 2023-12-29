import "./Nav.css";
function Background() {
  return (
    <>
      <svg viewBox="300 500 500 600" id="background" width="50vw" height="50vh">
        <g
          fill="skyblue"
          strokeWidth="5"
          stroke="none"
          transform="matrix(1,0,0,1,220,390)"
        >
          <path
            d="M 250 350 A  1 1 0 1 1 300 200 A  1 1 0 1 1 450 200 A  1 1 0 1 1 550 300 A  1 1 0 1 1 431.38075903170784 357.1129785991648 A  1 1 0 1 1 250 350 Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </>
  );
}

export default Background;
