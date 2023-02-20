import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
