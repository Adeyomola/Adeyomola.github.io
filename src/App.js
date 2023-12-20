// import "./App.css";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Front from "./frontend";
import Cloud from "./cloud";
import Writing from "./writing";
import Footer from "./footer";
import Background from "./background";

function App() {
  return (
    <>
      <Nav />
      <Background />
      <Home />
      {/* <About /> */}
      <Skills />
      <Cloud />
      {/* <Front /> */}
      <Writing />
      <Footer />
    </>
  );
}

export default App;
