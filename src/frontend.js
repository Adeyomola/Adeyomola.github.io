function Front() {
  return (
    <>
      <body
        id="frontend"
        onPointerEnter={() => {
          window.location.hash = "frontend";
        }}
      >
        <main>
          <div id="link-container">
            <p id="frontendTitle">Front-End Projects</p>
            <section>
              <a href="https://adeyomola.me/redactr" target="_blank">
                Redactr
              </a>
              <a
                href="https://adeyomola.me/freehand-drawing-tool/"
                target="_blank"
              >
                Freehand Drawing Tool
              </a>
              <a href="http://adeyomola.me/basic_crud_app/" target="_blank">
                Basic CRUD App
              </a>
              <a href="https://adeyomola.me/quiz_app/" target="_blank">
                Quiz App
              </a>
              <a href="https://adeyomola.me/weather-app/" target="_blank">
                Weather App
              </a>
              <a href="https://adeyomola.me/tictactoe/" target="_blank">
                Tic-Tac-Toe
              </a>
              <a href="https://adeyomola.me/todoapp/" target="_blank">
                Todo App
              </a>
              <a href="https://adeyomola.me/analog_clock/" target="_blank">
                Analog Clock
              </a>
              <a href="https://adeyomola.me/digital_clock/" target="_blank">
                Digital Clock
              </a>
              <a
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
              </a>
            </section>
          </div>
        </main>
      </body>
    </>
  );
}

export default Front;
