function Front() {
  return (
    <>
      <body
        id="frontend"
        onPointerEnter={() => {
          window.location.hash = "frontend";
        }}
      >
        <div id="link-container">
        <p id="frontendTitle">Front-End Projects</p>
          <section>
            <a href="https://adeyomola.github.io/redactr" target="_blank">
              Redactr
            </a>
            <a href="https://adeyomola.github.io/weather-app/" target="_blank">
              Weather App
            </a>
            <a
              href="https://adeyomola.github.io/freehand-drawing-tool/"
              target="_blank"
            >
              Free-Hand Drawing Tool
            </a>
            <a href="https://adeyomola.github.io/tictactoe/" target="_blank">
              Tic-Tac-Toe
            </a>
            <a href="https://adeyomola.github.io/todoapp/" target="_blank">
              Todo App
            </a>
            <a href="https://adeyomola.github.io/analog_clock/" target="_blank">
              Analog Clock
            </a>
            <a
              href="https://adeyomola.github.io/digital_clock/"
              target="_blank"
            >
              Digital Clock
            </a>
            <a
              href="https://adeyomola.github.io/tips-calculator/"
              target="_blank"
            >
              Tips Calculator
            </a>
            <a
              href="https://adeyomola.github.io/password_generator/"
              target="_blank"
            >
              Random Password Generator
            </a>
            <a href="https://adeyomola.github.io/quiz_app/" target="_blank">
              Quiz App
            </a>
            <a
              href="https://adeyomola.github.io/GoogleSearchClone/"
              target="_blank"
            >
              A Pseudo-Clone of Google Homepage
            </a>
            <a
              href="https://adeyomola.github.io/fementorbarcode/"
              target="_blank"
            >
              FE Mentor Barcode Challenge
            </a>
          </section>
        </div>
      </body>
    </>
  );
}

export default Front;
