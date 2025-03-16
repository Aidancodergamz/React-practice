import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './modules/NavigationBar';
import Footer from "./modules/Footer";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
