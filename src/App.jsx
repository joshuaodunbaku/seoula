import "./App.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Music from "./Routes/Music";
import Contact from "./Routes/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlobalStyle from "./Styles/GlobalStyles";
import { Wrapper } from "./Styles/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App d-flex flex-column min-vh-100">
        <Wrapper>
          <Navbar />
        </Wrapper>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
