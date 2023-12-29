function Front() {
  return (
    <>
      <main id="webdev">
        <section>
          <p id="title">Web Development</p>
          <a href="https://verba.fly.dev" target="_blank" rel="noreferrer">
            <img src={require("./images/1.png")} alt="placeholder"></img>
            <p>Verba - a blog built with Flask, HMTL, CSS, and JavaScript</p>
          </a>
          <a href="https://adeyomola.me" rel="noreferrer">
            <img
              src={require("./images/portfolio.png")}
              alt="placeholder"
            ></img>
            <p> Portfolio Website - built with React</p>
          </a>
          <a href="https://rennie.hair" target="_blank" rel="noreferrer">
            <img
              src={require("./images/renniehair.png")}
              alt="placeholder"
            ></img>
            <p>
              HairStylist Appointment Website (Renniehair) - built with HTML,
              CSS, and JavaScript
            </p>
          </a>
          <a
            href="https://adeyomola.me/redactr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./images/Redactr.png")} alt="placeholder"></img>
            <p>Redactr - built with HTML, CSS (Bootstrap), JavaScript</p>
          </a>
          {/* <a href="https://adeyomola.me/freehand-drawing-tool/" target="_blank">
            Freehand Drawing Tool
          </a>
          <a href="https://adeyomola.me/quiz_app/" target="_blank">
            Quiz App
          </a> */}
          {/* <a href="http://adeyomola.me/basic_crud_app/" target="_blank">
                Basic CRUD App
              </a> */}

          {/* <a href="https://adeyomola.me/weather-app/" target="_blank">
                Weather App
              </a> */}
          {/* <a href="https://adeyomola.me/tictactoe/" target="_blank">
                Tic-Tac-Toe
              </a> */}
          {/* <a href="https://adeyomola.me/todoapp/" target="_blank">
                Todo App
              </a> */}
          {/* <a href="https://adeyomola.me/analog_clock/" target="_blank">
                Analog Clock
              </a>
              <a href="https://adeyomola.me/digital_clock/" target="_blank">
                Digital Clock
              </a> */}
          {/* <a
                href="https://adeyomola.me/password_generator/"
                target="_blank"
              >
                Random Password Generator
              </a>
              <a href="https://adeyomola.me/GoogleSearchClone/" target="_blank">
                Google Homepage Clone
              </a>
              <a href="https://adeyomola.me/fementorbarcode/" target="_blank">
                FEMentor Barcode Challenge
              </a>
              <a href="https://adeyomola.me/vanilla_website/" target="_blank">
                Old Website
              </a> */}
        </section>
      </main>
    </>
  );
}

export default Front;
