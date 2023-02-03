import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
// import Front from "./frontend";
import Cloud from "./cloud";
import Writing from "./writing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Nav />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/cloud" element={<Cloud />} />
    //     <Route path="/writing" element={<Writing />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Nav />
      <Home />
      <About />
      <Cloud />
      <Writing />
    </>
  );
}

export default App;
